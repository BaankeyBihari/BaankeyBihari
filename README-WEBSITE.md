# BaankeyBihari Portfolio - v2.0

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.baankeybihari.com)](https://www.baankeybihari.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> **Modern, Fast, and Accessible Personal Portfolio**

Professional portfolio website for Sudhanshu Singh, showcasing career achievements, technical skills, and professional experience in software engineering.

🔗 **Live Site**: [www.baankeybihari.com](https://www.baankeybihari.com)

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional single-page layout
- ⚡ **Lightning Fast** - Optimized with Vite build system
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Rich meta tags and structured data
- 🎯 **Performance** - 90+ Lighthouse scores
- 🔒 **Secure** - Modern security best practices
- 📊 **Analytics Ready** - Google Analytics 4 integrated

---

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Lint JavaScript
npm run lint

# Format code
npm run format
```

---

## 📁 Project Structure

```
BaankeyBihari/
├── css/
│   ├── variables.css          # CSS custom properties & theming
│   ├── style.css              # Main styles
│   ├── flaticon.css           # Icon fonts
│   ├── bootstrap.min.css      # Grid system (legacy)
│   └── ...                    # Other stylesheets
│
├── js/
│   ├── app.js                 # Main JavaScript (ES6 modules)
│   └── ...                    # Legacy scripts
│
├── img/
│   ├── Sudhanshu.jpg          # Profile photo
│   └── ...                    # Other images
│
├── public/
│   └── resume_cv.pdf          # Downloadable resume
│
├── index.html                 # Main HTML file
├── package.json               # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── .eslintrc.json            # ESLint rules
├── .prettierrc               # Prettier configuration
└── README.md                 # This file
```

---

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup with structured data
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Vanilla JS, no frameworks

### Build Tools
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

### Libraries
- **Bootstrap** (Grid only) - Responsive layout
- **Font Awesome 6** - Icons
- **Google Fonts** - Typography (Josefin Sans, Dancing Script, Roboto)

### Services
- **Google Analytics 4** - Analytics
- **GitHub Pages** - Hosting

---

## 📊 Performance

The website is optimized for performance:

- ✅ **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3.5s
- ✅ **Cumulative Layout Shift**: < 0.1

### Optimizations Applied

- Minified CSS/JavaScript
- Optimized images with lazy loading
- Preconnect to external domains
- Tree-shaking unused code
- Modern ES modules

---

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast ratios meet standards
- Focus visible styling

---

## 🔍 SEO

The website is optimized for search engines:

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (Schema.org JSON-LD)
- Semantic HTML elements
- Clean URLs
- Sitemap ready

---

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `index.html` lines 107-130
2. **Work Experience**: Edit `index.html` lines 145-200
3. **Skills**: Edit `index.html` lines 300-450
4. **Resume PDF**: Replace `public/resume_cv.pdf`

### Theming

All colors and design tokens are defined in `css/variables.css`:

```css
:root {
  --primary-color: #40424a;
  --accent-color: #28d6f5;
  --font-primary: 'Josefin Sans', sans-serif;
  /* ... more variables */
}
```

### Analytics

Update Google Analytics ID in `index.html`:

```javascript
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID
```

---

## 🚢 Deployment

### GitHub Pages (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy contents of `dist/` to repository root:
   ```bash
   cp -r dist/* .
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy updated site"
   git push origin main
   ```

4. GitHub Pages will automatically serve from the root directory.

### Alternative: GitHub Actions

Create `.github/workflows/deploy.yml` for automated deployment:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: cp -r dist/* .
      - uses: stefanzweifel/git-auto-commit-action@v4
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Lint JavaScript files |
| `npm run format` | Format code with Prettier |

---

## 🔄 Migration from v1.0

The site has been modernized from jQuery-based legacy code to modern vanilla JavaScript:

### Key Improvements

✅ **Removed Dependencies**
- jQuery 2.1.4 → Vanilla JavaScript
- Bootstrap 3 → Modern CSS (with minimal Bootstrap 5 grid)
- Owl Carousel → Native CSS animations
- Magnific Popup → Native functionality

✅ **Added Modern Features**
- Vite build system
- ES6+ modules
- CSS custom properties
- SEO optimization
- Accessibility improvements
- Performance optimizations

✅ **Security Enhancements**
- Updated Font Awesome to v6
- GA4 instead of deprecated Universal Analytics
- SRI hashes on CDN resources
- Modern security headers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 About

**Sudhanshu Singh** - Lead Software Engineer

- 💼 Currently: Lead Software Engineer @ [Capital One](https://www.capitalone.com)
- 🔗 LinkedIn: [dukesudhanshu](https://www.linkedin.com/in/dukesudhanshu/)
- 🐙 GitHub: [@BaankeyBihari](https://github.com/BaankeyBihari/)
- 🐦 Twitter: [@BaankeyBihari](https://twitter.com/BaankeyBihari)
- 📧 Email: sudhanshu@baruntar.com

### Professional Experience

- **Capital One** - Lead Software Engineer (Jun 2025 - Present)
- **Microsoft** - Software Engineer (Nov 2021 - Apr 2025)
- **Cadence Design Systems** - Lead Solutions Engineer (Jun 2019 - Oct 2021)
- **Western Digital** - Staff Engineer (Jan 2018 - Jun 2019)
- **Qualcomm** - Engineer (Jul 2017 - Jan 2018)
- **And more...**

### Education

- **Indian Institute of Science (IISc)** - Doctoral Program, Computer Science
- **NIT Tiruchirappalli** - M.Tech, Computer Science
- **Sikkim Manipal Institute of Technology** - B.Tech, Computer Science

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and bug reports are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📮 Support

For support, email sudhanshu@baruntar.com or open an issue on GitHub.

---

## 🙏 Acknowledgments

- Template inspiration from [Colorlib](https://colorlib.com)
- Images from [Lorem Picsum](https://picsum.photos/)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)

---

<div align="center">

**[Website](https://www.baankeybihari.com)** • 
**[LinkedIn](https://www.linkedin.com/in/baankeybihari/)** • 
**[GitHub](https://github.com/BaankeyBihari/)** • 
**[Twitter](https://twitter.com/BaankeyBihari)**

Made with ❤️ by Sudhanshu Singh

</div>
