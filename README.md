# ✨ Witch-Themed Portfolio ✨

A magical, elegant, and feminine-coded portfolio website built with React. This enchanting portfolio features a dreamy witch aesthetic with lavender, peach-pink, and midnight blue color palette, complete with floating sparkles, glowing effects, and smooth animations.

## 🌟 Features

- **Magical Design**: Soft, dreamy witch aesthetic with elegant typography
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Custom cursor with sparkly trail, floating sparkles
- **Responsive Design**: Fully responsive across all devices
- **Modern React**: Built with React 18, hooks, and modern practices
- **Scroll Animations**: Intersection Observer for scroll-triggered effects
- **Contact Form**: Functional contact form with magical styling
- **Loading Screen**: Enchanting loading animation

## 🎨 Color Palette

- **Lavender**: `#E6E6FA`
- **Peach-pink**: `#FFB6C1`
- **Midnight Blue**: `#1a1a2e`
- **Cream**: `#FDF6E3`
- **Magical Gold**: `#FFD700`

## 🖋 Typography

- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Inter (modern sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd witch-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js      # Navigation bar with smooth scrolling
│   ├── Hero.js           # Hero section with floating profile card
│   ├── About.js          # About section with animated stats
│   ├── Skills.js         # Skills grid with hover effects
│   ├── Projects.js       # Project cards with magical styling
│   ├── Contact.js        # Contact form and social links
│   ├── Footer.js         # Footer component
│   ├── Sparkles.js       # Floating sparkle animations
│   └── CustomCursor.js   # Custom cursor with trail effect
├── App.js                # Main app component
├── index.js              # React entry point
└── index.css             # Witch theme styles
```

## 🛠 Technologies Used

- **React 18**: Modern React with hooks
- **Framer Motion**: Smooth animations and transitions
- **React Intersection Observer**: Scroll-triggered animations
- **Font Awesome**: Icons for skills and projects
- **Google Fonts**: Playfair Display and Inter typography

## ✨ Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change "Your Name" to your actual name
   - Update subtitle and description

2. **About Section** (`src/components/About.js`):
   - Update the about text
   - Modify stats numbers and labels

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove skill categories
   - Update skill names and icons

4. **Projects Section** (`src/components/Projects.js`):
   - Add your actual projects
   - Update descriptions, technologies, and links

5. **Contact Section** (`src/components/Contact.js`):
   - Update email, phone, and location
   - Add your social media links

### Styling

The main styles are in `src/index.css`. You can customize:

- Colors in the `:root` CSS variables
- Animations and transitions
- Typography and spacing
- Background effects and gradients

## 🎭 Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## 🌙 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🎨 Design Inspiration

This portfolio is inspired by:
- Modern witch aesthetics
- Enchanted spellbooks
- Celestial elements
- Soft, feminine design principles
- Magical and whimsical themes

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✨ Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Framer Motion for animations
- The magical community for inspiration

---

**✨ May your code be as magical as your dreams! ✨**

---
*Last updated: October 2025 - Portfolio successfully deployed to Vercel! 🚀* 