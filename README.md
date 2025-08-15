# URL Shortener Web Application

A full-stack URL shortener built with **Spring Boot**, **MySQL**, **React.js**, and **Tailwind CSS**.  
This application allows users to register, log in, shorten URLs with a fixed expiration period, and view click analytics for each shortened link.

---

## 🚀 Features

- **User Authentication**
  - Secure registration and login system
  - Passwords stored securely with encryption

- **URL Shortening**
  - Create shortened URLs that expire after a fixed time period
  - Simple, clean interface for adding and managing links

- **Click Analytics**
  - Track daily clicks for each shortened URL
  - View historical usage patterns in a dashboard

- **Seamless Redirection**
  - Accessing a shortened URL (e.g., `localhost:8080/{shortUrl}`) automatically redirects to the original target

- **Responsive UI**
  - Styled with **Tailwind CSS** for a modern and mobile-friendly design

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios for API requests

**Backend**
- Spring Boot
- Spring Security (JWT-based authentication)
- MySQL (Persistent storage)
- JPA/Hibernate for database interactions

---

## 📊 How It Works

**Register & Login**
- Create an account and authenticate via JWT.

**Shorten a URL**
- Enter a long URL; the system generates a shortened version with a fixed expiration.

**Share the Link**
- Send the shortened link to others.

**Track Clicks**
- View daily click counts and total clicks in the analytics dashboard.

## 🔮 Future Improvements

- Customizable expiration times

- User-defined short link aliases

- Public API for programmatic URL shortening

- Email notifications before link expiration

## Screeshots

<img width="1912" height="865" alt="url-shorten-login" src="https://github.com/user-attachments/assets/f80fb68c-9d6c-4105-aa94-e1a245f4f8a9" />

<img width="1888" height="847" alt="url-shorten-createurl" src="https://github.com/user-attachments/assets/2fd436ef-e715-49ea-8150-d05deb7192f8" />

<img width="1901" height="851" alt="url-shorten-analytic" src="https://github.com/user-attachments/assets/70e849e6-1a26-4e7a-bbe5-6f645088b904" />
