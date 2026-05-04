# 🐄 QurbaniHat

## 📌 Purpose
**QurbaniHat** is a full-stack livestock booking web application built for the **Eid-ul-Adha** season.  
It allows users to browse verified cattle and animals, view detailed profiles, and place bookings online — eliminating the need to physically visit a hat (market).

The platform includes authentication, protected routes, and a smooth booking experience with payment method selection.

---

## 🌐 Live URL
🔗 https://qurbani-hatt.vercel.app

---

## 🚀 Key Features

### 🐄 Animal Listings
- Browse all available animals in a responsive grid
- Category badges (Large / Medium / Small)

### 🔽 Price Sorting
- Sort animals by:
  - Low → High
  - High → Low
- Uses URL search params

### 📄 Animal Details Page
- Full information:
  - Breed
  - Age
  - Weight
  - Location
  - Description

### 📝 Booking Form
- Fully validated form with:
  - Name
  - Email
  - Bangladeshi phone number
  - Delivery address
  - Payment method:
    - Cash
    - Mobile Banking
    - Card

### 🔐 User Authentication
- Email & password login/signup
- Google OAuth login
- Session management using Better Auth

### 🔒 Protected Routes
- Redirects unauthenticated users from:
  - `/Allanimals`
  - `/animals/:id`
  - `/Profile`

### 👤 User Profile
- View and update:
  - Display name
  - Avatar image

### 📱 Responsive Navbar
- Mobile hamburger menu
- Active link highlighting
- Logout functionality

### ⭐ Featured Animals
- Homepage section
- Displays top 4 animals
- Staggered animation effects

### 🏆 Top Breeds
- Highlights highest-priced animals

### 📚 Qurbani Tips
- Informational section for livestock selection

### 🔔 Toast Notifications
- Success & error feedback for:
  - Authentication
  - Form submissions

### ❌ 404 Page
- Custom not-found page
- Redirect button to homepage

---

## 📦 NPM Packages Used

| Package | Purpose |
|--------|--------|
| next | React framework with App Router & SSR |
| react / react-dom | UI rendering |
| better-auth | Authentication & session management |
| mongodb | Database connection |
| react-hook-form | Form handling & validation |
| react-toastify | Toast notifications |
| react-icons | Icon library |
| @heroui/react | UI components |
| @gravity-ui/icons | Additional icons |
| @gravity-ui/uikit | UI toolkit |
| tailwindcss | Utility-first CSS |
| daisyui | Tailwind UI components |
| animate.css | Animations |

---

## ⚙️ Getting Started

### 1️⃣ Clone & Install

```bash
git clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
