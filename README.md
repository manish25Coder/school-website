# School Website Portal 🏫

A full-stack, state-of-the-art school web application featuring a public-facing website and an administrative dashboard. Built with a modern tech stack consisting of an Angular frontend, an Express/Node.js backend, and a MongoDB database.

## 🚀 Live Deployments

*   **Live Website (Frontend):** [https://school-website-3iex.vercel.app/](https://school-website-3iex.vercel.app/)
*   **Alternative Frontend Link:** [https://school-website-3iex-k1beftvo3-manishs-projects-d3b3a879.vercel.app/](https://school-website-3iex-k1beftvo3-manishs-projects-d3b3a879.vercel.app/)
*   **API Server (Backend):** [https://school-website-navy-three.vercel.app/api](https://school-website-navy-three.vercel.app/api)

---

## ✨ Features

### 🌐 Public Website (Frontend)
*   **Interactive Landing Page:** Clean UI with quick navigation links.
*   **Notice Board:** Real-time updates on notices and announcements.
*   **Events Calendar & Gallery:** View past and upcoming school events, festivals, and activities.
*   **Teachers Roster:** Full profiles of teachers, including subjects, designations, and bios.
*   **Contact Us:** Integrated contact form for admission inquiries and feedback.

### 🛡️ Admin Dashboard (Protected)
*   **Secure Authentication:** JWT-based login and signup.
*   **Notice Management:** Create, update, and delete notice postings.
*   **Teacher Management:** Add profiles, upload images, and edit teacher information.
*   **Event & Gallery Management:** Organize and manage event images and data.
*   **Inquiry Desk:** Read and manage contact form submissions.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | Angular 20, Bootstrap, RxJS | Modern SPA framework, clean styling, and responsive layout |
| **Backend** | Node.js, Express.js | Fast, unopinionated, minimalist web framework |
| **Database** | MongoDB Atlas, Mongoose | NoSQL database with strict schema modeling |
| **Security** | JWT, bcryptjs | Stateless token authentication & hashed passwords |
| **Deployment** | Vercel | Seamless serverless deployment for both frontend and backend |

---

## 💻 Local Development Setup

### Prerequisites
*   Node.js (v18 or higher recommended)
*   MongoDB Atlas Account or local MongoDB server

### Step 1: Clone the Repository
```bash
git clone https://github.com/manish25Coder/school-website.git
cd school-website
```

### Step 2: Configure Environment Variables
Create a `.env` file inside the `Backend/` directory:
```env
PORT=8001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_secret
```

### Step 3: Run the Backend
```bash
cd Backend
npm install
npm run dev
```
The backend server runs locally on `http://localhost:8001`.

### Step 4: Run the Frontend
```bash
cd ../frontend
npm install
npm start
```
The frontend application will open on `http://localhost:4200`.

---

## 📦 Deployment Configuration (Vercel)

The project is structured as a monorepo and configured to deploy smoothly on Vercel:
*   **Frontend:** Set Vercel's **Root Directory** to `frontend`. It builds using Angular presets and uses `frontend/vercel.json` to handle SPA path rewrites.
*   **Backend:** Deployed as a separate Vercel project with the **Root Directory** set to `Backend`. It uses `Backend/vercel.json` to route incoming serverless function requests natively.
