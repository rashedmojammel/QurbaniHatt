# 🐄 QurbaniHat

##  Purpose
**QurbaniHat** is a full-stack livestock booking web application built for the **Eid-ul-Adha** season.  
It allows users to browse verified cattle and animals, view detailed profiles, and place bookings online — eliminating the need to physically visit a hat (market).

The platform includes authentication, protected routes, and a smooth booking experience with payment method selection!

---

##  Live URL
🔗 https://qurbani-hatt.vercel.app

---

##  Homepage 

<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/049e834f-84b9-4737-a76c-8abdf2759d3f" />
<img width="1919" height="716" alt="image" src="https://github.com/user-attachments/assets/38af58c6-bd5a-43f0-975b-b05a8498ae0d" />
<img width="1914" height="530" alt="image" src="https://github.com/user-attachments/assets/0acd196a-a211-4c23-b5e0-ccca99f386bc" />
<img width="1919" height="853" alt="image" src="https://github.com/user-attachments/assets/86052066-d250-4433-9d00-1e1d12584716" />

##  AllAnimal page 
<img width="1919" height="837" alt="image" src="https://github.com/user-attachments/assets/989aa95a-8e86-4486-9d5a-7f8be2f91775" />
##  Details Page

<img width="1918" height="795" alt="image" src="https://github.com/user-attachments/assets/eef89564-69c8-4add-a775-9003583d9916" />


##  Key Features
### 📄 Animal Details Page :
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

### User Authentication
- Email & password login/signup
- Google OAuth login
- Session management using Better Auth

###  Protected Routes
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

###  Featured Animals
- Homepage section
- Displays top 4 animals.
- Staggered animation effects

###  Top Breeds
- Highlights highest-priced animals

###  Qurbani Tips
- Informational section for livestock selection

###  Toast Notifications
- Success & error feedback for:
  - Authentication
  - Form submissions

###  404 Page
- Custom not-found page
- Redirect button to homepage

---

##  NPM Packages Used

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


###  Clone & Install

```bash
git clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
