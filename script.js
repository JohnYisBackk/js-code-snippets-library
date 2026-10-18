"use strict";

// ======================================================
// SELECTED ELEMENTS
// ======================================================

// HEADER
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");
const themeBtn = document.getElementById("themeBtn");

// HERO
const exploreBtn = document.getElementById("exploreBtn");
const browseCategoriesBtn = document.getElementById("browseCategoriesBtn");
const heroCopyBtn = document.getElementById("heroCopyBtn");
const heroCode = document.querySelector(".code-box-content code");

// STATS
const codeSnippetsValue = document.getElementById("codeSnippetsValue");
const categoriesValue = document.getElementById("categoriesValue");
const favoriteSnippetsValue = document.getElementById("favoriteSnippetsValue");
const freeToUseValue = document.getElementById("freeToUseValue");

// SEARCH & CATEGORIES
const searchInput = document.getElementById("searchInput");
const searchShortcut = document.querySelector(".search-shortcut");
const categoryButtons = document.querySelectorAll(".category-button");

// POPULAR SNIPPETS
const sortSelect = document.getElementById("sortSelect");
const snippetsGrid = document.getElementById("snippetsGrid");
const viewAllSnippetsBtn = document.getElementById("viewAllSnippetsBtn");
const viewAllSnippetsText = viewAllSnippetsBtn.querySelector("span");

// WORKFLOW
const workflowExploreBtn = document.getElementById("workFlowBtn");
const viewCategoriesBtn = document.getElementById("viewCategoriesBtn");

// ======================================================
// STATE
// ======================================================

let searchTerm = "";

let activeCategory = "all";

let activeSort = "popular";

let favoriteSnippets = [];

let isShowingAll = false;

let currentTheme = "dark";

// ======================================================
// SNIPPETS DATA
// ======================================================

const snippets = [
  {
    id: 1,
    title: "Remove Duplicates",
    description: "Remove duplicate values from an array using Set.",
    category: "javascript",
    language: "JavaScript",
    icon: "devicon-javascript-plain colored",
    popularity: 98,
    code: `const uniqueItems = (array) => {
  return [...new Set(array)];
};`,
  },

  {
    id: 2,
    title: "Random Number",
    description: "Generate a random number between two values.",
    category: "javascript",
    language: "JavaScript",
    icon: "devicon-javascript-plain colored",
    popularity: 92,
    code: `const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};`,
  },

  {
    id: 3,
    title: "Capitalize String",
    description: "Capitalize the first letter of a string.",
    category: "javascript",
    language: "JavaScript",
    icon: "devicon-javascript-plain colored",
    popularity: 89,
    code: `const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};`,
  },

  {
    id: 4,
    title: "Center With Flexbox",
    description: "Center an element vertically and horizontally.",
    category: "css",
    language: "CSS",
    icon: "devicon-css3-plain colored",
    popularity: 95,
    code: `.container {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
  },

  {
    id: 5,
    title: "Text Gradient",
    description: "Create a modern gradient effect on text.",
    category: "css",
    language: "CSS",
    icon: "devicon-css3-plain colored",
    popularity: 87,
    code: `.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
  },

  {
    id: 6,
    title: "Line Clamp",
    description: "Limit text content to a specific number of lines.",
    category: "css",
    language: "CSS",
    icon: "devicon-css3-plain colored",
    popularity: 82,
    code: `.text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
  },

  {
    id: 7,
    title: "Responsive Image",
    description: "Create a responsive image with accessible alt text.",
    category: "html",
    language: "HTML",
    icon: "devicon-html5-plain colored",
    popularity: 86,
    code: `<img
  src="image.jpg"
  alt="Description"
  loading="lazy"
/>`,
  },

  {
    id: 8,
    title: "Meta Viewport",
    description:
      "Add the standard viewport configuration for responsive pages.",
    category: "html",
    language: "HTML",
    icon: "devicon-html5-plain colored",
    popularity: 80,
    code: `<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>`,
  },

  {
    id: 9,
    title: "Create New Branch",
    description: "Create a new Git branch and switch to it immediately.",
    category: "git",
    language: "Git",
    icon: "devicon-git-plain colored",
    popularity: 91,
    code: `git checkout -b feature-name`,
  },

  {
    id: 10,
    title: "Undo Last Commit",
    description: "Undo the latest commit while keeping your changes.",
    category: "git",
    language: "Git",
    icon: "devicon-git-plain colored",
    popularity: 84,
    code: `git reset --soft HEAD~1`,
  },

  {
    id: 11,
    title: "React State",
    description: "Create and update local state with the useState hook.",
    category: "react",
    language: "React",
    icon: "devicon-react-original colored",
    popularity: 96,
    code: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};`,
  },

  {
    id: 12,
    title: "React Conditional Render",
    description: "Render an element only when a condition is true.",
    category: "react",
    language: "React",
    icon: "devicon-react-original colored",
    popularity: 88,
    code: `{isLoggedIn && (
  <p>Welcome back!</p>
)}`,
  },
];

// ======================================================
// RENDER SNIPPETS
// ======================================================

function escapeHTML(code) {
  return code
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getHighlightLanguage(category) {
  const languages = {
    javascript: "javascript",
    css: "css",
    html: "xml",
    git: "bash",
    react: "javascript",
  };

  return languages[category] || "plaintext";
}

function renderSnippets(snippetsToRender = snippets) {
  snippetsGrid.innerHTML = "";

  const visibleSnippets = isShowingAll
    ? snippetsToRender
    : snippetsToRender.slice(0, 6);

  if (visibleSnippets.length === 0) {
    snippetsGrid.innerHTML = `
      <div class="empty-state">
        <p>No snippets found.</p>
      </div>  
      `;
    return;
  }

  visibleSnippets.forEach((snippet) => {
    const isFavorite = favoriteSnippets.includes(snippet.id);

    const snippetCard = `
  <article class="snippet-card">
    <div class="snippet-card-header">
      <div class="snippet-language">
        <i class="${snippet.icon}"></i>
        <span>${snippet.language}</span>
      </div>

    <button
      class="snippet-favorite ${isFavorite ? "active" : ""}"
      type="button"
      data-id="${snippet.id}" 
      aria-label="Add to favorites"
    >
      <i class="bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}"></i> 
    </button>
  </div>

 <div class="snippet-card-content">
  <div class="snippet-info-row">
    <div class="snippet-main-icon">
      <i class="${snippet.icon}"></i>
    </div>

    <div class="snippet-info-text">
      <h3>${snippet.title}</h3>
      <p>${snippet.description}</p>
    </div>
  </div>

  <div class="snippet-code-box">
    <pre><code class="language-${getHighlightLanguage(snippet.category)}">${escapeHTML(snippet.code)}</code></pre>
  </div>
</div> 

  <div class="snippet-card-footer">
    <span class="snippet-category">${snippet.category}</span> 

    <button class="copy-snippet-btn" type="button" data-id="${snippet.id}">
      <i class="bi bi-copy"></i>
      <span>Copy</span>
    </button>
  </div>
</article> 
    `;

    snippetsGrid.insertAdjacentHTML("beforeend", snippetCard);
  });

  if (window.hljs) {
    document.querySelectorAll(".snippet-code-box code").forEach((codeBlock) => {
      hljs.highlightElement(codeBlock);
    });
  }
}

// ======================================================
// SEARCH SNIPPETS
// ======================================================

function searchSnippet() {
  searchTerm = searchInput.value.toLowerCase().trim();

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchTerm) ||
      snippet.description.toLowerCase().includes(searchTerm) ||
      snippet.category.toLowerCase().includes(searchTerm);

    const matchesCategory =
      activeCategory === "all" || snippet.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedSnippets = sortSnippets(filteredSnippets);

  renderSnippets(sortedSnippets);
}

// ======================================================
// FILTER BY CATEGORY
// ======================================================

function filterByCategory(event) {
  activeCategory = event.currentTarget.dataset.category;

  if (!activeCategory) return;

  categoryButtons.forEach((button) => {
    button.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  searchSnippet();
}

// ======================================================
// SORT SNIPPETS
// ======================================================

function sortSnippets(snippetsToSort) {
  const sortedSnippets = [...snippetsToSort];

  if (activeSort === "popular") {
    snippets.sort((a, b) => b.popularity - a.popularity);
  }

  if (activeSort === "newest") {
    snippets.sort((a, b) => b.id - a.id);
  }

  if (activeSort === "alphabetical") {
    sortedSnippets.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sortedSnippets;
}

// ======================================================
// FAVORITES
// ======================================================

function handleFavoriteSnippets(event) {
  const favoriteButton = event.target.closest(".snippet-favorite");

  if (!favoriteButton) return;

  const snippetId = Number(favoriteButton.dataset.id);

  if (favoriteSnippets.includes(snippetId)) {
    favoriteSnippets = favoriteSnippets.filter((id) => id !== snippetId);
  } else {
    favoriteSnippets.push(snippetId);
  }

  updateStats();
  renderSnippets();
}

// ======================================================
// COPY SNIPPET
// ======================================================

async function copySnippet(event) {
  const copyButton = event.target.closest(".copy-snippet-btn");

  if (!copyButton) return;

  const snippetId = Number(copyButton.dataset.id);

  const snippet = snippets.find((snippet) => snippet.id === snippetId);

  if (!snippet) return;

  const originalContent = copyButton.innerHTML;

  try {
    await navigator.clipboard.writeText(snippet.code);

    copyButton.innerHTML = `
     <i class="bi bi-check2"></i>
      <span>Copied</span> 
    `;

    copyButton.classList.add("copied");

    setTimeout(() => {
      copyButton.innerHTML = originalContent;
      copyButton.classList.remove("copied");
    }, 1500);
  } catch (error) {
    console.error("Failed to copy snippet:", error);
  }
}

// ======================================================
// HERO COPY CODE
// ======================================================

async function heroCopyCode(event) {
  const originalContent = heroCopyBtn.innerHTML;

  try {
    await navigator.clipboard.writeText(heroCode.textContent);

    heroCopyBtn.innerHTML = `
     <i class="bi bi-check2"></i> 
    `;

    heroCopyBtn.classList.add("copied");

    setTimeout(() => {
      heroCopyBtn.innerHTML = originalContent;
      heroCopyBtn.classList.remove("copied");
    }, 1500);
  } catch (error) {
    console.error("Failed to copy hero code:", error);
  }
}

// ======================================================
// UPDATE STATS
// ======================================================

function updateStats() {
  codeSnippetsValue.textContent = snippets.length;

  categoriesValue.textContent = new Set(
    snippets.map((snippet) => snippet.category),
  ).size;

  favoriteSnippetsValue.textContent = favoriteSnippets.length;

  freeToUseValue.textContent = "100%";
}

// ======================================================
// VIEW ALL SNIPPETS
// ======================================================

function toggleViewAllSnippets() {
  isShowingAll = !isShowingAll;

  viewAllSnippetsText.textContent = isShowingAll
    ? "Show Less"
    : "View All Snippets";

  const icon = viewAllSnippetsBtn.querySelector("i");

  icon.className = isShowingAll ? "bi bi-chevron-up" : "bi bi-chevron-down";

  searchSnippet();
}

// ======================================================
// KEYBOARD SEARCH SHORTCUT
// ======================================================

function handleSearchShortcut(event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();

    searchInput.focus();
    searchInput.select();
  }
}

// ======================================================
// HERO ACTIONS
// ======================================================

function handleToSnippets() {
  document.getElementById("snippetsSection").scrollIntoView({
    behavior: "smooth",
  });
}

function handleToCategories() {
  document.getElementById("categoriesSection").scrollIntoView({
    behavior: "smooth",
  });
}

// ======================================================
// HEADER SCROLL
// ======================================================

function handleHeaderScroll() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

// ======================================================
// NAVIGATION
// ======================================================

function handleNavigation(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (!targetSection) return;

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  targetSection.scrollIntoView({
    behavior: "smooth",
  });
}

// ======================================================
// THEME
// ======================================================

function loadTheme() {
  const storedTheme = localStorage.getItem("codeSnippetsTheme");

  if (storedTheme) {
    currentTheme = storedTheme;
  }

  applyTheme();
}

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme;
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme();

  localStorage.setItem("codeSnippetsTheme", currentTheme);
}

// ======================================================
// EVENT LISTENERS
// ======================================================

window.addEventListener("scroll", handleHeaderScroll);

searchInput.addEventListener("input", searchSnippet);

categoryButtons.forEach((button) => {
  button.addEventListener("click", filterByCategory);
});

sortSelect.addEventListener("change", () => {
  activeSort = sortSelect.value;

  searchSnippet();
});

snippetsGrid.addEventListener("click", handleFavoriteSnippets);
snippetsGrid.addEventListener("click", copySnippet);

viewAllSnippetsBtn.addEventListener("click", toggleViewAllSnippets);

document.addEventListener("keydown", handleSearchShortcut);

exploreBtn.addEventListener("click", handleToSnippets);

heroCopyBtn.addEventListener("click", heroCopyCode);

browseCategoriesBtn.addEventListener("click", handleToCategories);

workflowExploreBtn.addEventListener("click", handleToSnippets);

viewCategoriesBtn.addEventListener("click", handleToCategories);

navLinks.forEach((link) => {
  link.addEventListener("click", handleNavigation);
});

themeBtn.addEventListener("click", toggleTheme);

// ======================================================
// INIT APP
// ======================================================

function initApp() {
  loadTheme();

  activeSort = sortSelect.value;

  searchSnippet();
  handleHeaderScroll();
  updateStats();
}

initApp();
