# 🚀 Shortify - URL Shortener

**Shrink your links with style!**

Shortify is a modern, user-friendly URL shortening application that converts long URLs into short, manageable links. Built with a sleek React frontend, a robust Django backend, and MongoDB for storage, this project demonstrates a full-stack web application with a focus on simplicity and performance.

---

## ✨ Features

✅ **Shorten URLs** - Convert long URLs into concise, unique short codes.  
✅ **Responsive Design** - A visually appealing UI that works seamlessly on both desktop and mobile devices.  
✅ **Copy to Clipboard** - Easily copy shortened URLs with a single click.  
✅ **Loading Feedback** - Smooth user experience with loading states and toast notifications.  
✅ **MongoDB Storage** - Persistent storage of URLs using a NoSQL database.  
✅ **API-Driven** - RESTful API backend for scalability and flexibility.  

---

## 🎯 How It Works

1️⃣ **User Input** - Enter a long URL into the input field on the frontend.  
2️⃣ **Frontend Request** - The React app sends a POST request to the Django backend API (`/api/shorten/`) with the original URL.  
3️⃣ **Backend Processing** - The Django backend:
   - Generates a unique short code using a random string generator.
   - Stores the original URL and short code in MongoDB.
   - Returns the short code to the frontend.  
4️⃣ **Display** - The frontend displays the shortened URL (e.g., `http://localhost:8000/api/abc123/`).  
5️⃣ **Redirection** - Clicking the shortened URL sends a GET request to the backend (`/api/<short_code>/`), which retrieves the original URL and redirects the user.  

---

## 🛠 Tech Stack

### **Frontend (UI)**
- ⚛ **React** - JavaScript library for building a dynamic single-page application.
- 🎨 **CSS** - Custom styles with animations and a gradient background.
- 🔔 **react-toastify** - Toast notifications for success, error, and copy actions.
- 🔗 **Axios/Fetch** - For making HTTP requests to the backend API.

### **Backend**
- 🐍 **Django** - Python web framework for rapid development and clean design.
- ⚡ **Django REST Framework** - For building a RESTful API to handle URL shortening and retrieval.
- 🗄 **PyMongo** - Direct interaction with MongoDB, bypassing Django’s ORM.
- 🔓 **django-cors-headers** - To enable CORS and allow frontend-backend communication.

### **Database**
- 🛢 **MongoDB** - NoSQL database for flexible, document-based storage.
- 📂 **Collection:** `urls` in `url_shortener_db`
- 📌 **Fields:** `original_url`, `short_code`, `created_at`

---

## 🚀 Future Enhancements

🔹 **URL Redirection** - Implement HTTP 301 redirects for short URLs.  
🔹 **Analytics** - Track clicks on shortened URLs.  
🔹 **Custom Short Codes** - Allow users to define their own short codes.  
🔹 **Deployment** - Host the backend on Heroku and the frontend on Netlify.  

---

## 💡 Contributing

We welcome contributions! If you'd like to contribute, feel free to:

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m 'Add some feature'`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Open a Pull Request.  

For major changes, please open an issue first to discuss what you would like to change. 😊  

---

🚀 **Start shortening your URLs with Shortify today!**
