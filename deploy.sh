#!/bin/bash
# LLM Wiki 자동 배포 스크립트
# 동작: Obsidian/wiki 변경사항을 Quartz에 동기화한 후 GitHub Pages로 배포

set -e

QUARTZ_DIR="/Users/railscraft/quartz"
WIKI_DIR="/Users/railscraft/Obsidian/wiki"
BRANCH="v4"
LOG_FILE="/Users/railscraft/quartz/deploy.log"

cd "$QUARTZ_DIR"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 배포 시작"

# 1. symlink인 경우 제거하고 실제 파일로 복사
if [ -L content ]; then
    rm content
fi

# 기존 content 제거 후 최신 콘텐츠 복사
rm -rf content
cp -rL "$WIKI_DIR" content

echo "[$(date '+%Y-%m-%d %H:%M:%S')] wiki 동기화 완료"

# 2. git 변경사항 확인 후 커밋/푸시
git add -A

if git diff --cached --quiet; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] 변경사항 없음. 스킵."
else
    git commit -m "Auto-deploy: sync wiki content $(date '+%Y-%m-%d %H:%M')"
    git push origin "$BRANCH"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] 배포 완룝: https://railscraft-gh.github.io/llm-wiki"
fi

# 3. 로컬 개발 환경을 위해 symlink로 복원
rm -rf content
ln -s "$WIKI_DIR" content

echo "[$(date '+%Y-%m-%d %H:%M:%S')] symlink 복원 완료"
echo "---"
