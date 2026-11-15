# BSS Workspace – Next.js website package

This package contains the current BSS Next.js website project, the supplied BSS logo and catalogues, and the supplied product photographs.

## Product photography included
- Office chairs: 11 PNG photographs
- Workstations and tables: 13 PNG photographs
- Storage: 7 PNG photographs

The supplied product photographs are converted to high-quality WebP (quality 88, maximum 2200px on the longest side) for faster page loading and smaller GitHub uploads. The source archives remain unchanged.

## Main routes
- `/` – Home
- `/office-chairs` – Chair photo gallery and catalogue ranges
- `/workstations` – Workstation and table photo gallery and catalogue ranges
- `/storage` – Storage photo gallery
- `/about` – About BSS
- `/catalogue` – Catalogue PDF downloads
- `/contact` – BSS contact information

## Local development
Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

## Production build check
```bash
npm run build
```

## GitHub / Vercel update
1. Extract this ZIP.
2. Open the existing BSS GitHub repository and select the `nextjs-build` branch.
3. Upload the contents of the `bssworkspace-nextjs` folder to the repository root, replacing files with the same paths.
4. Commit to `nextjs-build` only. Do not replace or delete `main`.
5. Wait for Vercel to complete a fresh deployment, then test the deployment URL.

The existing Vercel Hobby project should be used for preview/development only; review the appropriate commercial hosting plan before using the site as a commercial production website.

## Content accuracy
Product photo captions are descriptive labels based on the uploaded filenames. They are not confirmed BSS SKU names or technical specifications. Confirm exact model names, dimensions, finishes and pricing with BSS before publishing those details.


## Image optimisation
The product photos are stored as WebP for responsive web delivery. Original uploaded ZIP archives were not modified.


## Latest product photography update

The current project includes optimised WebP photography supplied by BSS:
- 16 office chair images
- 4 cafe / breakout chair images (shown at the bottom of Office Chairs)
- 21 workstation and table images
- 10 office storage images

The product image files are stored in `public/images/products/`. The image gallery data is maintained in `data/gallery.ts`. The official BSS logo is included as a lossless WebP asset.

## Updating the GitHub branch safely

1. Extract this ZIP on your computer.
2. Open the existing GitHub repository and switch to the `nextjs-build` branch.
3. Use GitHub's **Add file → Upload files** and upload the *contents* of the extracted project folder (not the ZIP itself and not an extra enclosing folder).
4. Allow matching files to be replaced when GitHub asks. Existing product-image paths have been reused where possible so older photographs are overwritten rather than left as duplicate files.
5. Commit the changes to `nextjs-build` only. Do not merge into `main` until the preview has been checked.

All product photographs have been converted to WebP for a smaller deployment while retaining their original proportions. The ZIP itself is a delivery package; GitHub's web uploader expects the extracted files and folders.
