# Source Code Overview - SEAO-RENTALS Cameroon

## What's the Source Code?

This repository now contains a **working React + TypeScript application** that serves as the foundation for the SEAO-RENTALS equipment rental platform.

## Source Code Structure

```
/
├── src/                      # Source code directory
│   ├── main.tsx             # Application entry point
│   ├── App.tsx              # Main application component
│   ├── main.css             # Global styles with Tailwind CSS
│   └── vite-env.d.ts        # TypeScript environment definitions
│
├── public/                   # Public assets
│   ├── manifest.json        # PWA manifest for installable app
│   ├── icon-192.svg         # App icon (192x192)
│   └── icon-512.svg         # App icon (512x512)
│
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── eslint.config.js         # ESLint configuration
```

## Key Source Files

### 1. `src/main.tsx` - Entry Point
The application entry point that:
- Imports React 19 with StrictMode
- Creates the root DOM element
- Renders the App component
- Imports global styles

### 2. `src/App.tsx` - Main Component
The core application component featuring:
- **Bilingual Support**: French/English language toggle
- **Responsive Design**: Mobile-first layout
- **Company Branding**: Navy, sky blue, and vibrant orange color scheme
- **Contact Integration**: WhatsApp, phone, and email links
- **Service Showcase**: 4 key services (rental, delivery, installation, maintenance)
- **Equipment Categories**: Generators, GPS trackers, and tools
- **Professional Footer**: Contact information and copyright

### 3. `src/main.css` - Global Styles
Global CSS with:
- Tailwind CSS imports
- CSS custom properties for brand colors
- Font family definitions (Space Grotesk for headings, Inter for body)

### 4. `public/manifest.json` - PWA Configuration
Progressive Web App manifest for:
- Installable mobile app experience
- App name and branding
- Icon references
- Display and theme settings

## Technologies Used

### Core Stack
- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe JavaScript
- **Vite 7** - Ultra-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **Phosphor Icons** - Icon library (configured but not yet used in MVP)
- **Radix UI** - Accessible component primitives (configured but not yet used in MVP)
- **shadcn/ui** - Component library (configured but not yet used in MVP)

### Additional Tools
- **ESLint** - Code linting
- **Framer Motion** - Animations (configured but not yet used in MVP)
- **React Hook Form** - Form handling (configured but not yet used in MVP)
- **Zod** - Schema validation (configured but not yet used in MVP)

## Features Implemented (MVP)

### ✅ Working Features
1. **Bilingual Interface** - Toggle between French and English
2. **Responsive Layout** - Works on mobile, tablet, and desktop
3. **Contact Methods** - WhatsApp, phone, and email links
4. **Service Display** - 4 core services with icons
5. **Equipment Categories** - 3 category buttons
6. **Brand Styling** - Official colors and fonts from documentation
7. **Progressive Web App** - Installable on mobile devices

### 🚧 Not Yet Implemented
The documentation describes 58 advanced features including:
- Booking system
- Agreement signing
- Calendar integration
- Backend portal
- Payment integration
- Loyalty program
- Analytics dashboard
- And many more...

These features are **documented but not yet coded**. The current implementation is a **minimal viable product (MVP)** that establishes the foundation.

## How to Use the Source Code

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5000

### Build for Production
```bash
npm run build
```
Output: `dist/` directory

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Design Philosophy

The source code implements the design principles from the documentation:

1. **Professional** - Clean, trustworthy interface for B2B customers
2. **Bold** - Strong visual hierarchy with confident design choices
3. **Accessible** - Clear information architecture and WCAG compliance
4. **Mobile-First** - Optimized for Cameroon's mobile-heavy market
5. **Bilingual** - Complete French/English support

## Color Palette

```css
--navy-dark: #3b3f5c      /* Primary brand color */
--sky-blue: #60a5fa       /* Accent color */
--vibrant-orange: #fb923c /* Call-to-action color */
```

## Typography

- **Headings**: Space Grotesk (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600, 700)

## Next Steps for Development

To implement the full feature set described in the documentation:

1. **Component Library**: Create reusable UI components
2. **Routing**: Add React Router for multi-page navigation
3. **State Management**: Implement global state for bookings and user data
4. **Backend Integration**: Connect to KV storage or API
5. **Forms**: Add booking forms with validation
6. **Authentication**: Implement user login and admin access
7. **Payment**: Integrate Orange Money and MTN Mobile Money
8. **Agreements**: Add digital signature capture
9. **Calendar**: Implement availability booking system
10. **Admin Portal**: Build backend management interface

## Contact & Support

For questions about the source code:

- **Email**: seaointeralia1@gmail.com
- **WhatsApp**: +237 697 661 092
- **Phone**: +237 697 661 092

## License

MIT License - See LICENSE file for details.

---

**Note**: This is a minimal viable product (MVP). The extensive documentation in this repository describes the **planned features**, not all implemented features. The current source code provides a solid foundation for building toward that vision.
