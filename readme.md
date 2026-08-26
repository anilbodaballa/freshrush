<div align="center">

# ⚡ FreshRush

**An Ultra-Fast, Full-Stack Grocery Delivery Platform** built on Node.js, Express, React, TypeScript, and PostgreSQL — complete with a customer storefront, an admin operations console, and a real-time delivery partner dashboard.

[![GitHub Repo](https://img.shields.io/badge/GitHub-anilbodaballa%2Ffreshrush-181717?style=for-the-badge&logo=github)](https://github.com/anilbodaballa/freshrush)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](#-license)
[![Made with TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](#)

[Repository](https://github.com/anilbodaballa/freshrush) · [Report Bug](https://github.com/anilbodaballa/freshrush/issues) · [Request Feature](https://github.com/anilbodaballa/freshrush/issues)

</div>

---

## 📸 Overview & Preview

**FreshRush** is an end-to-end, multi-role grocery delivery application designed to deliver fresh groceries, produce, daily essentials, and beverages in record time. It models the full lifecycle of modern hyper-local delivery — from browsing and instant cart management to automated driver dispatch and live OTP-verified drop-offs.

<table>
  <tr>
    <td width="50%"><img src="./screenshots/home.png" alt="FreshRush Storefront" /><p align="center"><sub>Customer Storefront</sub></p></td>
    <td width="50%"><img src="./screenshots/products.png" alt="Product Catalog" /><p align="center"><sub>Product Catalog & Category Filtering</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="./screenshots/checkout.png" alt="Checkout Flow" /><p align="center"><sub>Stripe Checkout & Address Management</sub></p></td>
    <td width="50%"><img src="./screenshots/singleOrder.png" alt="Order Tracking" /><p align="center"><sub>Live Order Tracking Map</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="./screenshots/adminDashboard.png" alt="Admin Dashboard" /><p align="center"><sub>Admin Console & Sales Metrics</sub></p></td>
    <td width="50%"><img src="./screenshots/adminOrders.png" alt="Admin Orders" /><p align="center"><sub>Fulfillment & Rider Assignment</sub></p></td>
  </tr>
  <tr>
    <td colspan="2"><img src="./screenshots/deliveryPartner.png" alt="Delivery Partner Dashboard" /><p align="center"><sub>Delivery Partner Live Rider Dashboard</sub></p></td>
  </tr>
</table>

---

## 👥 Three Roles, One Platform

| Role | Operational Scope | Key Functionalities |
|---|---|---|
| 🛒 **Customer** | Mobile & Desktop Web | Browse fresh items, category filter, flash deals, cart sidebar, Stripe payments, live order map tracking |
| 🛠️ **Admin** | Business Management | Real-time sales metrics, inventory management (CRUD), order status transitions, delivery partner assignment |
| 🚴 **Delivery Partner** | Delivery Operations | Accept/reject delivery requests, broadcast real-time GPS location, verify drop-off via secure OTP code |

---

## 🏗️ Architecture

```mermaid
flowchart LR
    subgraph Clients["FreshRush Clients (Vite + React)"]
        A[Customer Storefront]
        B[Admin Console]
        C[Delivery Partner Dashboard]
    end

    subgraph Backend["FreshRush API (Express + TypeScript)"]
        D[Auth & Middleware]
        E[Controllers & Routes]
        F[Prisma ORM]
    end

    subgraph Infrastructure["Services & Database"]
        G[(PostgreSQL Database)]
        H[Cloudinary Media Storage]
        I[Inngest Event Pipeline]
        J[Stripe Payments API]
    end

    A -->|REST + JWT| D
    B -->|REST + JWT| D
    C -->|REST + JWT| D
    D --> E --> F --> G
    E --> H
    E --> J
    E -.Events.-> I
    I -.Callback.-> E
```

---

## ✨ Key Features

### 🛒 Storefront Experience
- **Instant Product Search & Filter**: Real-time filtering by category, price, and flash deal status.
- **Dynamic Shopping Cart**: Slide-out cart drawer with live subtotal calculation and quantity adjustments.
- **Saved Address & Geolocation**: Store multiple delivery addresses with automated coordinate resolution.
- **Stripe Payment Gateway**: Secure card payments with webhook status callbacks.

### 🚴 Delivery Partner Ecosystem
- **Interactive Map Tracking**: Live delivery location streaming.
- **OTP Verification**: Multi-factor delivery validation to prevent incorrect drop-offs.
- **Status Controls**: Toggle availability status and handle active orders effortlessly.

### 👨‍💼 Operations & Administration
- **Analytics Dashboard**: High-level sales revenue summaries, total orders, and active users.
- **Catalog Management**: Add, update, and manage inventory stock levels with Cloudinary image upload.
- **Automated Dispatch**: Event-driven background jobs to assign idle delivery partners to new orders.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, Lucide Icons, Leaflet / React-Leaflet, React Hot Toast
- **Backend**: Node.js, Express.js, TypeScript, Prisma ORM, JSON Web Tokens (JWT), Nodemailer, Multer
- **Infrastructure**: PostgreSQL, Cloudinary, Inngest, Stripe, Vercel

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js `v18+`
- PostgreSQL database URL
- Cloudinary & Stripe API credentials

### 1. Clone Repository
```bash
git clone https://github.com/anilbodaballa/freshrush.git
cd freshrush
```

### 2. Setup Server
```bash
cd server
npm install
cp .env.example .env # Update credentials
npx prisma generate
npx prisma db push
npm run seed # Populate initial FreshRush catalog
npm run server
```

### 3. Setup Client
```bash
cd ../client
npm install
cp .env.example .env
npm run dev
```

Visit `http://localhost:5173` to explore **FreshRush**!

---

## 📄 License
This project is open source and released under the [MIT License](LICENSE).
