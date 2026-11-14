# BSS Workspace — Next.js starter

Premium corporate website foundation for Bangalore Seating Systems.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React

## Local development
1. Install Node.js 20.9 or later.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Production build check
Run `npm run build`.

## Assets to add
- Company logo: `public/images/logo/bss-logo.svg` or `.png`
- Chair photos: `public/images/chairs/`
- Workstation photos: `public/images/workstations/`
- Project photos: `public/images/projects/`
- Approved catalogue PDF: `public/catalogues/bss-catalogue.pdf`

The catalogue page intentionally shows a "coming soon" state until the approved PDF is added. Product cards are placeholders until the real BSS product catalogue and images are supplied.

## Vercel
Import the GitHub repository into Vercel and use the Next.js framework preset. Keep the root directory as `./`. Vercel detects the build command automatically.

Before replacing the existing repository, preserve a copy/branch of the current files. Do not change production domain settings until preview testing is complete.

## Content accuracy
Company history, certifications, product models, specifications, contact details and project claims are intentionally not invented. Add only BSS-approved information.
