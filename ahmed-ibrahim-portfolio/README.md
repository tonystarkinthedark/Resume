# Ahmed Ibrahim - Digital Marketing Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring immersive parallax scrolling and professional design.

## Features

- **Parallax Scrolling**: Multi-layered background elements with dynamic transforms
- **Responsive Design**: Mobile-first approach with modern UI components
- **Dark/Light Mode**: Automatic theme switching with CSS variables
- **Interactive Animations**: Scroll-triggered animations and hover effects
- **Contact Form**: Functional contact form with email integration
- **PDF Resume**: Downloadable resume generation
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Express.js

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── sections/   # Page sections (hero, about, etc.)
│   │   │   └── ui/         # UI components (navigation, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Page components
│   │   └── index.css       # Global styles and CSS variables
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Data storage interface
├── shared/                 # Shared TypeScript schemas
└── package.json            # Dependencies and scripts
```

## Customization

### Colors and Styling
Edit `client/src/index.css` to customize:
- CSS variables for colors (lines 28-75)
- Animation timings and effects
- Component styles

### Content
- **Hero Section**: `client/src/components/sections/hero.tsx`
- **About/Headshot**: `client/src/components/sections/headshot.tsx`
- **Experience**: `client/src/components/sections/experience.tsx`
- **Projects**: `client/src/components/sections/projects.tsx`
- **Skills**: `client/src/components/sections/skills.tsx`
- **Contact**: `client/src/components/sections/contact.tsx`

### Adding Your Professional Photo
Replace the User icon placeholder in `headshot.tsx` with your actual photo:
```tsx
<img 
  src="/path/to/your/photo.jpg" 
  alt="Ahmed Ibrahim"
  className="w-64 h-64 object-cover rounded-full"
/>
```

## Environment Variables

Create a `.env` file in the root directory:
```
# Email configuration (for contact form)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Database (optional)
DATABASE_URL=your-database-url
```

## Deployment

The site is optimized for deployment on various platforms:

- **Replit**: Already configured with proper workflow
- **Vercel**: Add `vercel.json` configuration
- **Netlify**: Works out of the box
- **Traditional hosting**: Build and serve the `dist` folder

## Key Technologies

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, TypeScript, Drizzle ORM
- **Animations**: GSAP, CSS animations
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React
- **Styling**: shadcn/ui components

## Development Notes

- Hot reload enabled for instant changes
- TypeScript strict mode for type safety
- ESLint and Prettier configured
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Support

For questions or customizations, refer to the component files and CSS variables. The codebase is well-documented with inline comments.

---

Built with performance and conversion in mind. Ready for professional use.