# Daniel Effiong - Data Science Portfolio

A modern, responsive portfolio website showcasing data science projects, skills, and experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Danieljohn0/daniel-portfolio.git
   cd daniel-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your profile image:**
   ```bash
   mkdir -p public/images
   # Copy your profile photo to public/images/profile.jpg
   ```

4. **Setup contact form:**
   - Visit https://formspree.io/
   - Create a new form and copy your Form ID
   - Open `src/components/DataSciencePortfolio.jsx`
   - Replace `YOUR_FORM_ID` on line 108 with your actual ID

5. **Run locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

## 📦 Build & Deploy

### Option 1: GitHub Pages (Automatic)
Just push to main branch and GitHub Actions will automatically build and deploy:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

**Your site will be live at:** `https://Danieljohn0.github.io/daniel-portfolio`

### Option 2: Manual Deployment
```bash
npm run build
npm run deploy
```

### Option 3: AWS Amplify
1. Go to https://console.aws.amazon.com/amplify/
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Amplify will automatically build and deploy on every push

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## 📋 Project Structure

```
daniel-portfolio/
├── public/
│   └── images/
│       └── profile.jpg          # Your profile photo
├── src/
│   ├── components/
│   │   └── DataSciencePortfolio.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Formspree** - Contact form handling
- **GitHub Pages** - Hosting

## ✨ Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Modern dark theme with yellow accent
✅ Functional contact form with Formspree
✅ Auto-deploy with GitHub Actions
✅ Optimized build with Vite
✅ Clean, semantic HTML

## 📝 Customization

### Change Theme Colors
Edit `src/components/DataSciencePortfolio.jsx`:
```javascript
const theme = {
  primary: "text-yellow-400",      // Primary accent color
  button: "bg-yellow-400",         // Button background
  border: "border-yellow-400/40",  // Border colors
  background: "bg-black",          // Background color
  card: "bg-zinc-900",             // Card background
};
```

### Update Profile Information
Edit the `profile` object in `src/components/DataSciencePortfolio.jsx`:
```javascript
const profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com",
  profileImage: "/images/profile.jpg",
};
```

## 🔗 Links

- 📧 Email: danieleffiong100@gmail.com
- 🐙 GitHub: https://github.com/Danieljohn0
- 💼 LinkedIn: https://linkedin.com/in/danieleffiong

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

If you have questions or issues, please create an issue on the GitHub repository.

---

**Happy coding! 🎉**
