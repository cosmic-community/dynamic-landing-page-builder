# 🚀 Dynamic Landing Page Builder

![App Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=300&fit=crop&auto=format)

A production-ready Next.js application for building dynamic landing pages powered by Cosmic CMS with AI-generated imagery support.

## Features

- 🎨 **Modular Section System**: Hero, Features, Gallery, Testimonials, Stats, CTAs, Logo Wall, and Footer
- 🖼️ **AI Image Integration**: Store AI prompts with images for consistency and regeneration
- 📱 **Fully Responsive**: Mobile-first design with dedicated mobile settings
- ⚡ **Performance Optimized**: Static generation, image optimization, and lazy loading
- 🎬 **Rich Animations**: Scroll-triggered effects with Framer Motion
- 🎨 **Dynamic Theming**: Brand colors applied via CSS custom properties
- ♿ **Accessible**: WCAG AA compliant with semantic HTML
- 🔧 **TypeScript**: Fully typed for better developer experience

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e523cb260d9dd939d1c46d&clone_repository=68e527b0260d9dd939d1c480)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Complete Landing Page Builder with AI Image Generation - Full Specification Prompt
> I need you to build a complete Next.js landing page builder application that integrates with Cosmic CMS and supports AI-generated imagery throughout.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic CMS (@cosmicjs/sdk ^1.5.5)
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image + imgix
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Cosmic CMS account with a bucket

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd landing-page-builder
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic CMS credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

5. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Cosmic SDK Examples

### Fetching a Landing Page

```typescript
import { cosmic } from '@/lib/cosmic'

const page = await cosmic.objects
  .findOne({
    type: 'landing-pages',
    slug: 'home'
  })
  .props('id,slug,title,metadata')
  .depth(1)
```

### Fetching All Landing Pages

```typescript
const { objects } = await cosmic.objects
  .find({
    type: 'landing-pages'
  })
  .props('id,slug,title,metadata.page_title')
```

## Cosmic CMS Integration

This application uses the following Cosmic CMS structure:

- **Bucket**: landing-page-production-0a1359a0-a38a-11f0-b5c6-87e0826ab877
- **Object Type**: landing-pages
- **Key Sections**: Hero, Features, Gallery, Testimonials, Stats, CTAs, Logo Wall, Footer

Each section can be enabled/disabled via CMS switches and includes support for AI-generated images with stored prompts.

## Deployment Options

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `bun run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard

## Project Structure

```
/landing-page-builder
├── /app
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Home page (landing page list)
│   └── /[slug]
│       └── page.tsx            # Dynamic landing page route
├── /components
│   ├── /sections               # All landing page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Stats.tsx
│   │   ├── CTABlock.tsx
│   │   ├── LogoWall.tsx
│   │   └── Footer.tsx
│   ├── /ui                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── ImageWithPrompt.tsx
│   ├── LandingPageBuilder.tsx  # Main page orchestrator
│   └── CosmicBadge.tsx         # "Built with Cosmic" badge
├── /lib
│   ├── cosmic.ts               # Cosmic SDK setup
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Utility functions
└── /public
    └── dashboard-console-capture.js  # Console capture for debugging
```

## Performance Features

- Static Site Generation (SSG) for optimal performance
- Image optimization with Next.js Image and imgix
- Lazy loading for below-fold content
- Framer Motion animations with reduced motion support
- React Suspense for loading states
- Lighthouse score 90+ target

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT

<!-- README_END -->