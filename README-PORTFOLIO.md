# BaankeyBihari Portfolio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.baankeybihari.com)](https://www.baankeybihari.com)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> Modern, performant portfolio built with Astro featuring dark mode, interactive animations, and premium design

🔗 **Live Site**: [www.baankeybihari.com](https://www.baankeybihari.com)

## ✨ Features

- 🌙 **Dark Mode** - Toggle with system preference detection
- ⚡ **Lightning Fast** - 100 Lighthouse score, zero JS by default
- 🎨 **Modern Design** - Indigo/Purple gradients, glassmorphism, bento grid
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** - Rich meta tags, structured data
- ✨ **Interactive** - Scroll animations, hover effects, count-up stats

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro           # Main layout with SEO
│   ├── components/
│   │   ├── Navigation.astro       # Sticky nav + dark mode
│   │   ├── HeroModern.astro       # Hero with gradient
│   │   ├── StatsBar.astro         # Animated stats
│   │   ├── ProjectsModern.astro   # Project showcase
│   │   ├── TechStackModern.astro  # Tech with icons
│   │   ├── ExperienceTimeline.astro # Interactive timeline
│   │   ├── ContactModern.astro    # Contact section
│   │   └── FooterModern.astro     # Footer
│   ├── pages/
│   │   └── index.astro            # Homepage
│   └── styles/
│       └── design-system.css      # CSS variables
│
├── public/
│   ├── img/                       # Images
│   ├── css/                       # Legacy CSS
│   └── resume_cv.pdf              # Resume
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Astro 4.16** - Static site generator
- **TypeScript** - Type safety
- **CSS Variables** - Modern theming
- **Devicon** - Tech stack logos
- **Font Awesome 6** - Icons

## 📝 Updating Content

### Work Experience

Edit `src/components/ExperienceTimeline.astro`:

```astro
const experiences = [
  {
    company: "Your Company",
    title: "Your Title",
    period: "Start - End",
    location: "Location",
    description: "What you did...",
    technologies: ["Tech1", "Tech2"]
  }
];
```

### Projects

Edit `src/components/ProjectsModern.astro`:

```astro
const projects = [
  {
    title: "Project Name",
    description: "Description",
    tech: ["React", "TypeScript"],
    github: "https://github.com/user/repo",
    featured: true
  }
];
```

### Tech Stack

Edit `src/components/TechStackModern.astro`:

```astro
const techStack = {
  languages: [
    { name: "Python", icon: "devicon-python-plain", color: "#3776AB" }
  ]
};
```

## 🚢 Deployment

### GitHub Pages (Manual)

```bash
npm run build
# Deploy dist/ contents to hosting
```

### GitHub Actions

Enable GitHub Pages in settings, then push to main branch. The site builds automatically.

## 🎨 Design System

### Colors

- **Light Mode**: White/Gray (#ffffff, #f8fafc)
- **Dark Mode**: Navy/Slate (#0f172a, #1e293b)
- **Accent**: Indigo/Purple (#6366f1, #8b5cf6)

### Typography

- **Display**: Space Grotesk (700)
- **Body**: Inter (400-900)
- **Mono**: JetBrains Mono (400-500)

## 📊 Performance

- ⚡ Performance: 100
- ♿ Accessibility: 100
- 🎯 Best Practices: 100
- 🔍 SEO: 100

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 About

**Sudhanshu Singh** - Lead Software Engineer

- 💼 Currently: Lead Software Engineer @ Capital One
- 🔗 [LinkedIn](https://linkedin.com/in/baankeybihari)
- 🐙 [GitHub](https://github.com/BaankeyBihari)
- 📧 sudhanshu@baruntar.com

---

<div align="center">

**[Website](https://www.baankeybihari.com)** • **[LinkedIn](https://linkedin.com/in/baankeybihari)** • **[GitHub](https://github.com/BaankeyBihari)**

Made with ❤️ using [Astro](https://astro.build)

**v3.0** - Modern Design

</div>
