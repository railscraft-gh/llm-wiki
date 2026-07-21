import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg, ctx }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = ctx.argv.serve ? "/" : url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          if (typeof fetchData !== "undefined") {
            fetchData.then(function(index) {
              var basePath = document.body.dataset.basepath || "";
              if (basePath.length > 1 && basePath.endsWith("/")) {
                basePath = basePath.slice(0, -1);
              }
              var rawPath = window.location.pathname;
              var decoded = rawPath;
              try { decoded = decodeURIComponent(rawPath); } catch (e) {}
              
              var hasBasePrefix = basePath.length > 1 && decoded.startsWith(basePath);
              if (hasBasePrefix) {
                decoded = decoded.slice(basePath.length);
              }
              if (decoded.startsWith("/")) {
                decoded = decoded.slice(1);
              }
              if (decoded.endsWith("/")) {
                decoded = decoded.slice(0, -1);
              }
              if (decoded.endsWith(".html")) {
                decoded = decoded.slice(0, -5);
              }
              if (decoded.endsWith("/index")) {
                decoded = decoded.slice(0, -6);
              }
              
              var lowered = decoded.toLowerCase();
              var matchKey = index[decoded] ? decoded : (index[lowered] ? lowered : null);
              if (!matchKey) {
                var hyphed = decoded.replace(/\s+/g, "-");
                if (index[hyphed]) matchKey = hyphed;
                else if (index[hyphed.toLowerCase()]) matchKey = hyphed.toLowerCase();
              }

              if (matchKey) {
                var prefix = hasBasePrefix ? basePath : "";
                var target = prefix + (prefix.endsWith("/") ? "" : "/") + matchKey + ".html";
                window.location.replace(target);
              }
            });
          }
          `,
        }}
      />
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
