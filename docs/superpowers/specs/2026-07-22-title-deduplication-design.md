# Design Specification: Quartz Title Heading Deduplication

## 1. Problem Statement
In Quartz v5, the `ArticleTitle` layout component renders an `<h1>` heading containing the note title above the document body (`position: beforeBody`). Simultaneously, 324 out of 406 Obsidian Markdown notes in `wiki/*.md` start with an `# <Note Title>` heading as their first line of content. When rendered by Quartz, both headings were emitted, causing document titles to appear twice consecutively on pages such as `https://wiki.railscraft.dev/가짜-지성의-징후와-자기-정당화`.

## 2. Solution Architecture
Instead of modifying hundreds of Markdown files in the Obsidian Vault or relying on external plugin submodules that get refreshed during CI builds, a unified AST-level deduplication rule was integrated into Quartz's core Markdown processor (`quartz/processors/parse.ts`).

### Core Component Change: `createMdProcessor` in `quartz/processors/parse.ts`
When parsing Markdown AST (`MDRoot`), the processor inspects the top AST nodes. If a leading `# H1` (`depth: 1`) heading exists within the first 3 nodes of the document body, it is removed from `tree.children` prior to HTML conversion.

```typescript
.use(() => (tree: MDRoot) => {
  if (!tree.children || tree.children.length === 0) return
  const firstH1Index = tree.children.findIndex(
    (node) => node.type === "heading" && (node as any).depth === 1,
  )
  if (firstH1Index !== -1 && firstH1Index < 3) {
    tree.children.splice(firstH1Index, 1)
  }
})
```

## 3. Verification & Results
- **Scanned HTML Pages**: 407 pages
- **Pages with exactly 1 H1**: 407 pages (100%)
- **Pages with duplicate H1s**: 0 pages (0%)
- **Live Verification**: Confirmed on `https://wiki.railscraft.dev/가짜-지성의-징후와-자기-정당화` and live site endpoints.
