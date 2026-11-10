# PostCraft 📝

A full-stack CRUD web application built with **Node.js**, **Express.js**, and **EJS** demonstrating RESTful architecture principles. Users can create, view, edit, and delete posts with dynamic routing and unique identifier generation.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Website-success?style=for-the-badge&logo=render)](https://postcraft-l8mu.onrender.com)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

🔗 **Live Deployment:** [https://postcraft-l8mu.onrender.com](https://postcraft-l8mu.onrender.com)

---

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete posts following RESTful conventions.
- **RESTful Architecture**: Follows standard HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`).
- **Method Override**: Enables `PATCH` and `DELETE` requests directly from standard HTML forms using `method-override`.
- **Dynamic Views**: Server-side templating powered by **EJS** (Embedded JavaScript).
- **Unique Identifiers**: Unique ID generation for each post using `uuid` (v4).
- **Custom Styling**: Clean, responsive layout styled with custom CSS.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Template Engine**: [EJS](https://ejs.co/)
- **Utility Libraries**:
  - `uuid` - Generating unique IDs for posts
  - `method-override` - Simulating PUT/PATCH/DELETE requests from HTML forms
  - `path` - Managing filesystem paths

---

## 📋 RESTful Routing Table

| HTTP Method | Endpoint | CRUD Operation | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/posts` | **Read** (Index) | Displays all posts |
| **GET** | `/posts/new` | — | Renders form to create a new post |
| **POST** | `/posts` | **Create** | Adds a new post to the posts list |
| **GET** | `/posts/:id` | **Read** (Show) | Displays details of a specific post by ID |
| **GET** | `/posts/:id/edit` | — | Renders edit form for a specific post |
| **PATCH** | `/posts/:id` | **Update** | Updates the content of an existing post |
| **DELETE** | `/posts/:id` | **Delete** (Destroy) | Deletes a post by ID |

---

## 📂 Project Structure

```text
REST/
├── public/
│   └── style.css          # Static stylesheets
├── views/
│   ├── index.ejs          # All posts view
│   ├── new.ejs            # Form to create new post
│   ├── show.ejs           # Detailed view of a single post
│   └── edit.ejs           # Form to update post content
├── index.js               # Main server file with routes & middleware
├── package.json           # Project metadata & dependencies
└── README.md              # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/theraghavbansal/postcraft.git
   cd postcraft
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```
   *(Or with nodemon if installed globally: `npx nodemon index.js`)*

4. **Open in browser:**
   ```
   http://localhost:8080/posts
   ```

---

## 👤 Author

- **Raghav Bansal**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

