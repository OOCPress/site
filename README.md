# Out of Context Website

Static Jekyll site for the second edition of *Out of Context*.

## Local Development

This repo uses `mise` to pin Ruby.

```sh
mise install
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://127.0.0.1:4000/>.

Production build with static search:

```sh
JEKYLL_ENV=production bundle exec jekyll build
npx -y pagefind --site _site
```
