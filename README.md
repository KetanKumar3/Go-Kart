# 🛒 Go-Kart — MERN E-Commerce Platform

Go-Kart is a **full-stack MERN-based e-commerce platform** for browsing accessories.  
It includes **user authentication, product management with image uploads, a responsive UI, and an admin dashboard** — all built with modern web technologies.

---

## 🌐 Live Demo

**Frontend:** https://dulcet-tarsier-efe749.netlify.app  
**Backend API:** https://go-kart-u90x.onrender.com  

---

## ✨ Features

### 👤 User Features
- 🔐 JWT + Cookie-based authentication  
- 🛍 Browse products  
- 📄 Product details page  
- 🆕 Latest products section  
- 📱 Fully responsive UI  
- 🙋 User profile  

### 🛠 Admin Features
- 🔑 Admin login  
- ➕ Add products  
- ❌ Delete products  
- 🖼 Image uploads via Multer  
- 📦 Manage product inventory  

### ⚙ System Features
- REST API with Express.js  
- MongoDB Cloud database  
- Secure cookies  
- Proper CORS config  
- TailwindCSS modern UI  
- Error handling  

---

## 🧰 Tech Stack

### 🖥 Frontend
- React.js  
- React Router  
- TailwindCSS  
- React Icons  
- Toast Notifications  

### 🛠 Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- Multer  
- JWT Auth  
- Cookie Parser  

### ☁ Deployment
- Netlify (Frontend)  
- Render (Backend)  

---

## 🗄 Database Schema

### 👤 Users Collection
| Field     | Type     | Description      |
|----------|----------|------------------|
| _id      | ObjectId | Primary Key      |
| name     | String   | Full name        |
| email    | String   | Unique email     |
| password | String   | Hashed password  |
| role     | String   | `user` / `admin` |
| createdAt| Date     | Timestamp        |

### 🛒 Products Collection
| Field       | Type     | Description             |
|------------|----------|-------------------------|
| _id        | ObjectId | Primary Key             |
| name       | String   | Product name            |
| price      | Number   | Product price           |
| description| String   | Product details         |
| image      | String   | Uploaded image filename |
| createdAt  | Date     | Timestamp               |

---

## 🧱 Architecture (Conceptual)

```
React (Frontend)  --->  Express API  ---> MongoDB Atlas
      |                       ^
      |                       |
      ------ Cookies & JWT ----
```

---

## 📦 Project Setup

### 🔹 Clone Repository
```bash
git clone https://github.com/KetanKumar3/Go-Kart
cd Go-Kart
```

---

## 🚀 Backend Setup

```bash
cd backend
npm install
```

### 🧾 Create `.env`
```env
MONGO_URL=your_connection_string
JWT_SECRET=your_secret
PORT=3000
```

### ▶ Start Server
```bash
node server.js
```

Backend runs at:
```
http://localhost:3000
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173   (Vite)
```
or
```
http://localhost:3000   (CRA)
```

---

## 📁 File Uploads (Multer)

Stored in:
```
/uploads
```

Served as:
```
/uploads/<filename>
```

---

## 🔐 Authentication Flow

1️⃣ User logs in  
2️⃣ Credentials verified  
3️⃣ JWT generated  
4️⃣ Token stored in cookies/localStorage  
5️⃣ Protected API validates token  

---

## 🌍 CORS Configuration

Backend allows only:
```
https://dulcet-tarsier-efe749.netlify.app
```

---

## 🖥 App Screens

✔ Home Page  
✔ Shop Page  
✔ Admin Dashboard  
✔ Login / Signup  

---

## 🛡 Security Practices

✔ Password hashing  
✔ JWT protection  
✔ Cookie-based auth  
✔ Admin-only protected routes  

---

## 🙋 Author

**👨‍💻 Ketan Kumar**  
B.Tech CSE | MERN Stack Developer  

🚀 Passionate about full-stack development  
