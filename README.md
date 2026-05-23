# Zifan Peng Homepage

Personal academic website built with Jekyll.

## Build

```bash
bundle install
bundle exec jekyll build
```

## Deploy

Netlify should use `netlify.toml`:

- build command: `bundle exec jekyll build`
- publish directory: `_site`
- Ruby: `3.2.2`

GitHub Actions also runs the same build on pushes to `main`/`master` and on pull requests.
