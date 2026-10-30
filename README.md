# @kanpuriyazzzz GitHub Pages site

This is a lightweight static landing page for the Instagram creator handle `@kanpuriyazzzz`.

## Files

- `index.html` — main page structure
- `styles.css` — styling and responsive layout
- `script.js` — animated counters for profile stats
- `CNAME` — custom domain mapping for GitHub Pages
- `.nojekyll` — prevents Jekyll processing

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, go to the repository settings and enable GitHub Pages.
3. Select the `main` branch (or `master`) and root folder.
4. If using a custom domain, keep the `CNAME` file and configure these DNS records:
   - A records: GitHub Pages IPs
   - CNAME: `www` -> `kanpuriyazzzz.github.io`
5. In your domain provider, point the apex domain to GitHub Pages or use their custom domain setup.

## Live Instagram stats without a backend

This setup works with GitHub Pages because the site reads a static JSON file, `stats.json`, instead of calling Instagram directly from the browser.

The recommended approach is:

1. Use a GitHub Action to fetch fresh Instagram metrics from Meta's Graph API.
2. Save the result into `stats.json`.
3. The browser reads `stats.json` and updates the numbers on the page.

The workflow file is already in `.github/workflows/update-stats.yml`.

### Required GitHub secrets

Add these repository secrets in GitHub:

- `INSTAGRAM_ACCOUNT_ID`
- `INSTAGRAM_GRAPH_TOKEN`

The `INSTAGRAM_GRAPH_TOKEN` must be a valid long-lived Instagram Graph API access token for a business/creator account.

### JSON shape expected by the page

```json
{
  "data": {
    "followers": 18400,
    "reach": 94800,
    "posts": 210,
    "avgViews": 12400,
    "engagement": 6.7,
    "storyViews": 12400
  }
}
```

If the workflow cannot fetch data, the page automatically falls back to the sample values already in the design.

## Custom domain

The site is configured for `kanpuriyazzzz.com` via `CNAME`.
