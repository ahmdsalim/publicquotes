#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy 2'

git push -f git@github.com:ahmdsalim/publicquotes.git master:gh-pages

cd -