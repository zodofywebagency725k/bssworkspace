# BSS Workspace website

A responsive, static website starter for Bengaluru Seating Systems (BSS Workspace), inspired by the premium editorial layout of the reference site while using original copy and a furniture-focused information architecture.

## Files
- `index.html` — page structure and content
- `styles.css` — responsive styling, layouts, colors, and image references
- `script.js` — mobile navigation and current year

## Run locally
Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to Vercel
1. Create a GitHub repository and upload these three website files plus this README.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. Build command: leave empty. Output directory: `.` (the repository root).
4. Deploy. Vercel will provide a preview URL.
5. Add your purchased domain in the Vercel project's **Settings → Domains** and follow the DNS instructions shown there.

## Required before public launch
1. Replace `ADD_YOUR_BUSINESS_EMAIL_HERE` in `index.html` with the official BSS business email.
2. Confirm the official domain (for example, the full domain including `.com` or another extension) before connecting DNS.
3. Replace sample stock photography with approved BSS product photos for accurate product representation.
4. Review all product/service wording and add confirmed phone, address, privacy policy, and any real certifications only when provided.

## Notes
- Stock images load from Unsplash over the internet. For production, use properly licensed, approved images hosted in the project or a trusted image CDN.
- This is a front-end website starter. No database or inquiry form backend is configured yet.
