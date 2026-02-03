# 🌐 Tethered - Global Talent Recruiting Platform

A modern, beautiful Next.js landing page for Tethered, a global talent recruiting platform that connects companies with world-class remote professionals.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist design with pixel art hero image
- 🎯 **Orange Color Scheme** - Solid orange accents throughout for a cohesive brand experience
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Next.js 15** - Built with the latest Next.js features
- 🔷 **TypeScript** - Fully typed for better developer experience
- 🎭 **Tailwind CSS + shadcn/ui** - Beautiful, accessible UI components
- 🖼️ **Image Optimization** - Automatic image fallbacks and optimization

## 🏁 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site!

## 🎨 Design Highlights

### Hero Section
- Split layout with text on the left and pixel art image on the right
- Square aspect ratio for the hero image
- Clean typography with refined spacing

### Color Palette
- **Primary**: Orange (`orange-500`, `orange-600`)
- **Background**: Light orange tint (`orange-50`)
- **Text**: Slate grays for readability
- **Accents**: Solid orange throughout (no gradients)

### Key Sections
1. **Hero** - Main value proposition with pixel art visual
2. **Mission** - Company mission and vision
3. **How It Works** - Three-step process (Target, Recruit, Validate)
4. **Talent Showcase** - Featured candidates with profiles
5. **Testimonials** - Client success stories
6. **CTA** - Call-to-action for getting started
7. **Newsletter** - Salary guide signup form

## 📁 Project Structure

```
full-stack-starter-frontend/
├── app/
│   ├── page.tsx            # Main landing page
│   ├── layout.tsx          # Root layout with metadata
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── image-with-fallback.tsx  # Image component with fallback
├── public/
│   └── hero-background.jpg  # Pixel art hero image
├── lib/
│   └── utils.ts            # Utility functions
└── types/                  # TypeScript definitions
```

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import to [Vercel](https://vercel.com/new)
3. Click "Deploy" 🚀

Vercel will automatically detect Next.js and configure everything for you!

### Deploy on Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎯 Customization

### Changing Colors

All orange colors can be customized in `app/page.tsx`. Search for `orange-` classes and replace with your preferred color.

### Updating Content

- **Candidates**: Edit the `candidates` array in `app/page.tsx`
- **Testimonials**: Edit the `testimonials` array
- **Steps**: Edit the `steps` array for the "How It Works" section

### Replacing Hero Image

Replace `public/hero-background.jpg` with your own image. The image should be:
- Square aspect ratio (1:1) for best results
- High resolution for crisp display
- Optimized file size for fast loading

## 📝 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Image Handling**: Next.js Image optimization with custom fallback component

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 📄 License

© 2025 Tethered Technology Corporation

---

**Built with ❤️ for connecting world-class talent with forward-thinking companies.**
