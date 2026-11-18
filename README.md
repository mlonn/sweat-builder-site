# sweatbuilder.losell.nu

The website for Sweat Builder, the iPhone and Apple Watch app: a home page (`index.html`) and the privacy policy
(`privacy.html`, served at `/privacy`). Both use `style.css`, and `icon.svg` is the app icon. The look matches
[losell.nu/apps](https://losell.nu/apps).

## Publishing

The site runs as the Cloudflare Worker `sweatbuilder` (see `wrangler.jsonc`), on the custom domain
`sweatbuilder.losell.nu`. Workers Builds is connected to this repo, so a push to `main` publishes it with
`npx wrangler deploy`. Only the site's files are uploaded; the rest is listed in `.assetsignore`.

The old domain, `sweatbuilder.lonn.xyz`, is a route on the same Worker, and `worker.js` redirects it (301) to the
same path on `sweatbuilder.losell.nu`. Keep it: the app and App Store Connect link to
`https://sweatbuilder.lonn.xyz/privacy`.

To try it locally:

```bash
npx wrangler dev
```
