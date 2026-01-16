# G.M.P Electrical – Solar & Electrical Services Landing Site

A responsive marketing site for a solar and electrical contractor, built with React, Vite, Chakra UI, and React Router. The site showcases services, recent installations, and a contact form for quote requests.

## Live Demo

- Production: https://gmp-electrical.netlify.app/

## Tech Stack

- **Frontend:** React, React Router
- **Styling & UI:** Chakra UI, custom theme (dark-mode focused)
- **Build Tool:** Vite
- **Deployment:** Netlify

## Features

- Multi-page SPA:
  - Home (hero, key services, trust badges)
  - Services (detailed sections with feature lists and imagery)
  - Packages (solar and backup power packages)
  - About (company story and credentials)
  - Contact (contact info, map embed, and email form placeholder)
- Custom **dark theme** using a Chakra UI theme with brand colors
- Responsive navigation with sticky navbar and mobile drawer menu
- Smooth scroll and subtle animations for cards and content sections
- Netlify redirects configured for client-side routing (`public/_redirects`)

## Getting Started

```bash
# install dependencies
npm install

# run in development
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

Then open the shown localhost URL in your browser.

## Project Structure

- `src/main.jsx` – App entry, ChakraProvider and React Router setup
- `src/theme.js` – Custom Chakra UI theme (colors, fonts, global styles)
- `src/components/` – Layout, Navbar, Footer, Hero, and shared UI
- `src/pages/` – Route pages: Home, Services, Packages, About, Contact
- `public/_redirects` – Netlify SPA redirect rules

## Notes

- The contact form uses EmailJS placeholders and is currently a demo; replace the service/template/user IDs with your own to enable real email sending.
