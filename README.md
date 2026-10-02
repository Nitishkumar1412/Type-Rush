# ⚡ TypeRush

A realistic typing speed test built with React and Vite. Pick a time, start typing, and see every letter turn green or red instantly. No backend, no sign-up, and your scores stay in your browser.

🌐 **Live Demo:** [![Netlify Status](https://img.shields.io/badge/Netlify-Live-00C7B7?logo=netlify&logoColor=white)](https://nitish-type-rush.netlify.app/)

## ✨ Features

- ⏱️ Time modes: 15s, 30s, 60s and 120s
- 🎯 Difficulty levels: Easy, Medium, Hard
- 💬 Quotes mode with motivational lines
- ✍️ Custom mode to practice your own text
- 🟢 Correct letters turn green, 🔴 wrong letters turn red instantly
- 📊 Live WPM and accuracy while you type
- 🏁 Result screen with a speed graph for the test
- 🏆 Local leaderboard with your top 5 scores
- 📈 Progress graph of your last 15 tests
- 🌫️ Blurry keyboard background with glass-style cards
- 🎨 Custom logo and favicon
- 💾 Scores saved in the browser
- 📱 Works on mobile and desktop
- ⌨️ Press Esc to restart quickly

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 HTML, CSS, JavaScript
- 📉 Recharts

## 📁 Project Structure

```
TypeRush/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── words.js
    └── components/
        ├── Logo.jsx
        ├── KeyboardBackground.jsx
        ├── Controls.jsx
        ├── TypingBox.jsx
        ├── Result.jsx
        ├── Leaderboard.jsx
        └── ProgressChart.jsx
```

## 🚀 Run Locally

```bash
git clone https://github.com/Nitishkumar1412/TypeRush.git
cd TypeRush
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## 📦 Build

```bash
npm run build
npm run preview
```

The production files are created in the `dist` folder.

## ☁️ Deployment

Hosted on Netlify.

- Build command: `npm run build`
- Publish directory: `dist`

## 🧠 How It Works

```
WPM      = (correct characters / 5) / minutes
Accuracy = (total keystrokes - wrong keystrokes) / total keystrokes
```

## 👨‍💻 Author

**Nitish Kumar** - [GitHub](https://github.com/Nitishkumar1412)

⭐ If you like this project, give it a star!
