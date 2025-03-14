# Dansetu

Dansetu is a web application designed to bridge the gap between donors, institutes (such as orphanages and elderly homes), and shopkeepers. The platform facilitates the donation process by allowing donors to contribute essential goods, ensuring that the items reach the intended institutes via verified shopkeepers.

## 🚀 Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS,Axios 
- **Backend**: Spring Boot, MySQL
- **Authentication**: JWT-based authentication
- **Payments**: Razorpay Integration
- **Image Upload**: Cloudinary (for profile photos)

## Features Implemented ✅
### 1. Authentication System
- Secure login and registration using JWT authentication.
- Role-based access control (Donor, Institute, Shopkeeper, and Admin).

### 2. Donor Portal
- View available institutes in need of donations.
- Make monetary contributions to trusted shopkeepers for supplying goods to institutes.

### 3. Institute Management
- Institutes can list the items they need.
- Raise requests for donations from donors.
- View and accept donations from registered donors.

### 4. Shop Listing & Transactions
- Shops can register and list available goods.
- Donors can transfer funds to shopkeepers who then provide goods to institutes.
- Transparent tracking of fund utilization and goods distribution.

## 📌 Features Implemented Till Date
✔️ User authentication (JWT-based authentication)   
✔️ Donor raising funds and providing goods  
✔️ Secure payment integration using **Razorpay** for transactions  
✔️ Listing Shops & Products they have  
✔️ Cloudinary Integration for profile photo uploads  

---  

## 🚀 Features Under Development  
🔄 Dashboard for shopkeepers  
🔄 Enhanced tracking for donation distribution  
🔄 Admin panel for monitoring activities  
🔄 Email & notification system for transactions and updates  
🔄 Many more...
---

## 🛠 Tech Stack  
- **Frontend**: React.js, React Router, Tailwind CSS  
- **Backend**: Java, Spring Boot, Spring Security, JPA  
- **Database**: MySQL  
- **Payment Gateway**: Razorpay  
- **Cloud Storage**: Cloudinary (for storing images)  
- **Tools & Platforms**: Postman, GitHub, VS Code, Eclipse IDE

---

## 🔧 Installation Guide  
### Backend Setup  
1. Clone this repository:  
   ```sh
   git clone <your-repo-url>
   cd dansetu-backend
   npm i
   npm i tailwindcss @tailwindcss/vite
   npm i @mui/material @emotion/react @emotion/styled
   npm react-router-dom
   npm i flowbite
   ```
2. **Configure Database:** Update `application.properties` in the Spring Boot project with your MySQL credentials.  
3. **Run the Spring Boot Server**  
   ```sh
   mvn spring-boot:run
   ```

---

## 🎯 Features Breakdown  
### **1. User Authentication & Role Management**  
- Secure authentication using JSON Web Tokens (JWT).  
- Role-based access control for Donors, Institutes & Shopkeepers.  

### 2. **Donor Module**  
- User registration & authentication.  
- Browse and view listed institutes.

- Donate food items or funds to institutes.  

### 3. **Institute Management**  
- Institutes can register & create profiles.  
- Ability to list required items.
- Track received donations.  

### 4. **Shop Management**  
- Shopkeepers can register and list available goods.  
- Accept payments from donors and supply goods to institutes.  

--


  
## 🔒 Payment Gateway (Razorpay Integration)  
- Implemented seamless payment gateway using **Razorpay**.  
- Allows donors to transfer funds directly to trusted shopkeepers.  
- Integrated secure transactions with unique receipts for tracking.  

---

## 📩 Contact & Contribution  
This project is currently under development. I’m open to suggestions and contributions!  

👨‍💻 **Author**: Abhishek Gorde 
🔗 **LinkedIn**: https://www.linkedin.com/in/abhishek-gorde-5b849b2a0/
📧 **Email**: abhishekgorde777@gmail.com  

🚀 *Stay tuned for more updates as we continue building the platform!* 🚀  

