
# TA05 – Web HTML/CSS/JS – Cyber Portfolio (ASIXC · ITB)

Static personal portfolio website for **Pin Quan Lu** (ITB · ASIXC – Administració de Sistemes Informàtics en Xarxa / Ciberseguretat).

**Live site (GitHub Pages):**  
https://pinquanlu7e9-ctrl.github.io/TA05-Web-HTML-CSS/

---

## Pages

- `index.html` — **Portada / Home** (general profile + 2 featured projects)
- `project1.html` — **Project 1 · Online Bookstore** (detail page)
- `project2.html` — **Project 2 · Weather Forecast UI** (detail page)
- `projects.html` — **All projects list** (20 ASIXC-related project ideas; first 2 link to detail pages)
- `contact.html` — **Contact form** (validation + success message)

---

## Tech stack

- **HTML** (semantic structure: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- **CSS** (`style.css`) – responsive layout + light/dark themes
- **Vanilla JavaScript** (`script.js`) – UI interactions + form validation

---

## JavaScript features

- Dark / Light mode toggle (stored in `localStorage`)
- Back-to-top button
- Scroll reveal animation (`IntersectionObserver`)
- Mouse tilt effect (`[data-tilt]`)
- Contact form validation (name/email/message + success message)

---

## Project structure

- `index.html`
- `project1.html`
- `project2.html`
- `projects.html`
- `contact.html`
- `style.css`
- `script.js`
- `README.md`
- (Optional supporting files) design sketch / canva screenshots + main page tag tree structure

---

## Run locally

1. Download / clone this repo
2. Open the folder in **VS Code**
3. Use **Live Server** (recommended) or open `index.html` directly

---

## TA05 requirements checklist (from teacher PDF)

### 1) Design preview
- [x] Initial page sketch / design (Canva or similar)
- [x] HTML tag hierarchy tree using `<main>` as the root (homepage structure)

### 2) Content (minimum)
- [x] At least **one main page** with general info + **2 featured projects**
- [x] Each featured project links to a **separate detail page**
- [x] A **projects list page** that lists **all projects**  
  - [x] The **first two** items link to their corresponding detail pages
- [x] **Contact form** with data control/validation (email format, required fields)
- [x] At least **3 JavaScript functionalities** (see “JavaScript features” above)

### 3) HTML structure
**Homepage**
- [x] `<head>` with META data (`charset`, `viewport`, `description`, `title`)
- [x] `<header>` with logo + navigation menu
- [x] `<main>` containing semantic tags (`section`, `article`, `aside`)
- [x] `<footer>` with copyright / links

**Other pages**
- [x] Same header as the homepage
- [x] Same footer as the homepage

### 4) CSS
- [x] Separate CSS file (`style.css`)
- [x] Styles for titles, paragraphs, buttons, forms, etc.
- [x] Links styled as buttons + hover effect
- [x] Responsive design (desktop + mobile)

### 5) Delivery
- [x] Published on **GitHub Pages**
- [x] Repository includes a coherent **README**
- [x] Required supporting materials included (sketch + tag tree)

---

## Notes

This project is fully static (HTML + CSS + JS), easy to present in class and deploy on GitHub Pages.
