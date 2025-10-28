### 🗂️ About This Project Series

This application was built as part of the HNG Internship Stage 2 task, which required implementing the same application across three different frontend technologies.

**This repository contains the React version.**

You can view the other implementations here:

- **Live Demo (Vue.js Version):** `https://hng-vue-ticket-app-phi.vercel.app/`
- **GitHub Repo (Vue.js Version):** `https://github.com/Solataiwo-15/hng-vue-ticket-app`

- **Live Demo (Twig/JS Version):** `https://hng-twig-ticket-app.vercel.app/`
- **GitHub Repo (Twig/JS Version):** `https://github.com/Solataiwo-15/hng-twig-ticket-app`

---

### ✨ Live URL

**The deployed application can be viewed here:**

**[https://hng-react-ticket-app-gilt.vercel.app/](https://hng-react-ticket-app-gilt.vercel.app/)**

---

### ✅ Core Features Implemented

- **Modern UI/UX:** A clean, attractive, and "cute" user interface with a consistent design language, responsive layouts, and subtle animations.
- **Landing Page:** A welcoming hero section with a custom SVG wave background, decorative elements, and clear calls-to-action.
- **Authentication:** Fully functional Login and Signup pages with client-side validation.
- **Simulated User Sessions:** User authentication is simulated using `localStorage`, with sessions that expire after one hour.
- **Protected Routes:** The Dashboard and Ticket Management pages are secure and only accessible to authenticated users. Unauthorized access results in a redirect to the login page.
- **Dashboard:** A "smart" dashboard that displays key statistics (Total, Open, Resolved tickets) in visually appealing cards.
- **Full CRUD Functionality:** A complete Ticket Management system allowing users to:
  - **C**reate new tickets via a modal form.
  - **R**ead all existing tickets in a responsive grid.
  - **U**pdate ticket details (title, description, status) via an edit modal.
  - **D**elete tickets with a confirmation step.
- **Responsive Design:** The entire application is fully responsive, featuring a slide-in sidebar menu for a polished mobile experience.

---

### 🛠️ Tech Stack & Libraries

- **Framework:** React
- **Build Tool:** Vite
- **Routing:** React Router DOM (`react-router-dom`)
- **Styling:** Plain CSS with variables for theming.
- **Icons:** Font Awesome

---

### 🚀 Setup and Execution Steps

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Solataiwo-15/hng-react-ticket-app.git
    ```
2.  **Navigate into the directory:**
    ```sh
    cd hng-react-ticket-app
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Start the development server:**
    ```sh
    npm run dev
    ```
5.  Open your browser and navigate to the local URL provided (e.g., `http://localhost:5173`).

---

### 👤 Example Test User Credentials

Since this is a simulated authentication, you can use any of the following to test:

- **Login:** Enter any non-empty email and password.
- **Signup:** Fill out all fields with valid information (email format, password length) to create a new "session."

---
