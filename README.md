# Code Snippets Library PRO

A modern and responsive code snippets library built with **HTML, CSS and Vanilla JavaScript**.

Browse useful frontend development snippets, search by keyword, filter by category, sort results, save favorites and copy code directly to your clipboard.

## 🚀 Live Demo

👉 [View Live Demo](https://johnyisbackk.github.io/js-code-snippets-library/)

---

## 📸 Preview

![Code Snippets Library PRO Preview](/preview.png)

---

## ✨ Features

- Modern responsive dashboard design
- Dark and light mode
- Search snippets in real time
- Filter snippets by category
- Sort snippets by popularity, newest or alphabetically
- Add and remove favorite snippets
- Copy snippets directly to clipboard
- Dynamic snippet rendering
- View All / Show Less functionality
- Dynamic statistics
- Smooth navigation between sections
- Sticky animated header
- Keyboard search shortcut
- Responsive layout for desktop, tablet and mobile
- Syntax-highlighted code examples
- Modern hover and interaction effects

---

## ⚡ JavaScript Features

The application is built with Vanilla JavaScript and focuses on practical frontend concepts such as:

- Array methods
  - `filter()`
  - `find()`
  - `map()`
  - `sort()`
  - `includes()`
  - `forEach()`
- Dynamic DOM rendering
- Event delegation
- State management
- Template literals
- Dataset attributes
- Conditional rendering
- Clipboard API
- Local Storage
- Keyboard events
- Smooth scrolling
- Dynamic class manipulation

---

## 🔎 Search & Filtering

Users can search through snippets using their:

- Title
- Description
- Category

Snippets can also be filtered by category:

- JavaScript
- CSS
- HTML
- Git
- React

Search and category filters work together, allowing users to quickly narrow down the available snippets.

---

## ↕️ Sorting

Snippets can be sorted by:

- **Popular** — highest popularity first
- **Newest** — newest snippets first
- **A-Z** — alphabetical order by title

Sorting works together with the current search and category filters.

---

## ❤️ Favorites

Users can mark snippets as favorites by clicking the heart button.

The interface automatically updates:

- Favorite state
- Favorite icon
- Favorite snippets statistic

Favorites are handled using snippet IDs and dynamic re-rendering.

---

## 📋 Copy Code

Every snippet includes a **Copy** button.

The Clipboard API is used to instantly copy the snippet code:

```js
navigator.clipboard.writeText(snippet.code);
```

After copying, the button temporarily changes to a **Copied** state to provide visual feedback.

The featured code snippet in the hero section can also be copied directly.

---

## 🎨 Dark & Light Mode

The application supports both dark and light themes.

The selected theme is saved in `localStorage`, so the preferred theme remains active after refreshing or reopening the page.

```js
localStorage.setItem("codeSnippetsTheme", currentTheme);
```

---

## ⌨️ Keyboard Shortcut

Press:

```text
Ctrl + K
```

or on macOS:

```text
Cmd + K
```

to instantly focus the snippet search input.

---

## 📊 Dynamic Statistics

The statistics section dynamically displays:

- Total code snippets
- Number of categories
- Favorite snippets
- Free-to-use status

Category statistics are calculated from unique snippet categories.

---

## 💻 Code Categories

### JavaScript

Useful JavaScript utilities and reusable functions.

### CSS

Modern CSS layouts, effects and styling techniques.

### HTML

Common HTML patterns and useful markup snippets.

### Git

Useful Git commands for everyday development.

### React

Simple React examples and common frontend patterns.

---

## 📱 Responsive Design

Code Snippets Library PRO is optimized for:

- Large desktop displays
- Laptops
- Tablets
- Mobile devices

The layout automatically adapts navigation, hero content, statistics, filters, snippet cards and workflow sections for smaller screens.

---

## 🛠 Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap Icons
- Devicon
- Highlight.js
- Local Storage
- Clipboard API

---

## 📁 Project Structure

```text
code-snippets-library-pro/
│
├── index.html
├── style.css
├── script.js
│
├── preview.png
│
├── README.md
└── LICENSE
```

---

## 🎯 Project Purpose

This project was created to practice and strengthen core JavaScript skills through a real interactive frontend application.

The main focus was working with:

- Arrays and objects
- Rendering dynamic content
- Searching and filtering data
- Sorting arrays
- Managing application state
- Event delegation
- Favorites
- Clipboard functionality
- Local Storage
- DOM manipulation

The project is built without JavaScript frameworks in order to strengthen Vanilla JavaScript fundamentals before moving to more advanced frontend technologies.

---

## 👨‍💻 Author

**Samuel Jahn**

Frontend Developer

🌐 Portfolio: [samueljahn.sk](https://samueljahn.sk)

💻 GitHub: [JohnyIsBackk](https://github.com/JohnyIsBackk)

---

## 📄 License

This project is licensed under the MIT License.

Copyright © 2026 Samuel Jahn
