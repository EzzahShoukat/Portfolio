# Portfolio Hero Landing Page

A beautiful, animated hero section for your portfolio website with a warm beige theme, inspired by modern design patterns.

## Features

- ✨ Full-screen hero section with smooth entrance animations
- ⌨️ Typewriter effect for full sentences with fade/slide animations
- 🎨 Warm beige/light theme with dark text and teal accent color
- 📱 Fully responsive (320px to large desktop)
- 🎭 Framer Motion animations throughout
- 🧭 Sticky navbar with smooth scroll navigation
- 🔗 Social media links (LinkedIn, GitHub)
- 🎯 Smooth scroll indicators and interactions

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- react-simple-typewriter (custom implementation for full sentences)
- React Icons

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your profile image:**
   - Place your profile photo as `profile.jpg` in the `public/` folder
   - The image should be square or circular for best results

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Edit `data/hero.ts` to customize:
- **Your name**: Change the `name` field
- **Your title**: Update the `title` field (e.g., "Data Enthusiast")
- **Your sentences**: Update the `sentences` array with 2-3 full sentences for the typewriter effect
- **Your email**: Update `email` for the "Get in touch" button

### Social Links

Edit `data/socialLinks.ts` to customize:
- **LinkedIn URL**: Update `linkedin` field
- **GitHub URL**: Update `github` field

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (renders Navbar + Hero)
│   └── globals.css         # Global styles with Tailwind (beige theme)
├── components/
│   ├── Hero.tsx            # Main hero component with profile image
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── TypewriterText.tsx  # Custom typewriter for full sentences
│   └── ScrollIndicator.tsx # Scroll down indicator
├── data/
│   ├── hero.ts             # Your personal data (edit this!)
│   └── socialLinks.ts      # Social media links (edit this!)
└── public/
    └── profile.jpg         # Your profile photo (add this!)
```

## Theme Customization

The theme uses a warm beige background (`#f5f0e8`) with dark text and a teal accent color. You can customize:
- **Background color**: Edit `bg-[#f5f0e8]` in `app/globals.css`
- **Accent color**: Edit the `accent` color in `tailwind.config.ts`

## Navigation

The navbar includes:
- **Left**: Your name
- **Center**: Navigation links (Home, About, Experience, Skills, Projects) - smooth scrolls to sections
- **Right**: Social icons (LinkedIn, GitHub) + "Get in touch" button

All navigation links use smooth scrolling to sections on the same page.

## Next Steps

1. ✅ Replace placeholder text in `data/hero.ts` with your actual information
2. ✅ Update social links in `data/socialLinks.ts`
3. ✅ Add your profile photo to `public/profile.jpg`
4. ⏭️ Add your sections: About, Experience, Skills, Projects (with id="projects")
5. ⏭️ Optionally add a Contact section (id="contact") or the "Get in touch" button will use mailto
