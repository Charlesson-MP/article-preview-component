# 📰 Article Preview Component

## 📖 About the Project

A responsive article preview component developed as part of a [Frontend Mentor](https://www.frontendmentor.io/) challenge. The project features an article card with an interactive social sharing menu, focusing on responsive layouts, CSS positioning techniques, and DOM manipulation with JavaScript.

---

## ✨ Features

- Responsive layout optimized for mobile and desktop screens.
- Article preview card featuring an image, author information, publication date, and description.
- Interactive social sharing menu that can be toggled by clicking the share button.
- Different menu positioning and presentation depending on the screen size.
- Click-outside behavior to close the sharing menu.

---

## 🛠️ Built With

- **HTML5** – Semantic markup and document structure.
- **CSS3**
  - CSS custom properties.
  - Flexbox and CSS Grid.
  - Positioning (`relative` and `absolute`).
  - Pseudo-elements.
  - Media queries and mobile-first workflow.
- **JavaScript (ES6+)** – DOM manipulation and interactive menu behavior.

---

## 🎯 Main Challenge

One of the main challenges was positioning the social sharing menu consistently across different screen sizes.

The component required different positioning strategies for desktop and mobile layouts:

- **Desktop:** The sharing menu appears as a floating element positioned relative to the article card, with a small arrow pointing toward the share button.
- **Mobile:** The sharing menu occupies the bottom area of the card, adapting its layout to the available screen space.

To achieve this, CSS positioning properties such as `position: absolute`, `top`, `left`, and `inset` were combined with the `::after` pseudo-element to create the menu's visual arrow.

---

## 📂 Project Structure

```text
article-preview-component/
│
├── index.html
├── LICENSE
├── README.md
│
└── src/
    ├── css/
    │   ├── style.css
    │   └── media.css
    │
    ├── images/
    │   ├── avatar-michelle.jpg
    │   ├── drawers.jpg
    │   ├── favicon-32x32.png
    │   └── preview.png
    │
    └── script/
        └── script.js
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

**1. Clone the repository**

```bash
git clone https://github.com/Charlesson-MP/article-preview-component.git
```

**2. Navigate to the project directory**

```bash
cd article-preview-component
```

**3. Open the project**

Open the `index.html` file in your preferred browser.

No additional dependencies or installation steps are required.

---

## 🔮 Future Improvements

- Improve accessibility by adding appropriate ARIA attributes to the share button and menu.
- Implement keyboard navigation and support for closing the menu with the `Escape` key.
- Improve focus and hover states for interactive elements.
- Make social sharing options fully functional with their respective sharing URLs.
- Review and refine the JavaScript interaction logic for better maintainability.

---

## 🌐 Live Demo

[View Live Project](https://charlesson-mp.github.io/article-preview-component/)

---

## 👨‍💻 Author

**Charlesson Mendes Pereira**

- GitHub: [@Charlesson-MP](https://github.com/Charlesson-MP)

---

## 📄 License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
