🐄 QurbaniHat
Purpose
QurbaniHat is a full-stack livestock booking web application built for the Eid-ul-Adha season. It allows users to browse verified cattle and animals, view detailed profiles, and place bookings online — eliminating the need to physically visit a hat (market). The platform supports user authentication, protected routes, and a smooth booking experience with payment method selection.

🌐 Live URL
🔗 qurbani-hatt.vercel.app

 Key Features

Animal Listings — Browse all available animals in a responsive grid with category badges (Large / Medium / Small)
Price Sorting — Sort animals by price low-to-high or high-to-low using URL search params
Animal Detail Page — View full details including breed, age, weight, location, and description
Booking Form — Validated form with name, email, Bangladeshi phone number, delivery address, and payment method (Cash / Mobile Banking / Card)
User Authentication — Email & password signup/login plus Google OAuth via Better Auth
Protected Routes — Middleware redirects unauthenticated users away from /Allanimals, /animals/:id, and /Profile
User Profile — View and update display name and avatar photo URL
Responsive Navbar — Mobile hamburger menu, active link highlighting, and logout button
Featured Animals — Homepage showcases top 4 animals with staggered entrance animations
Top Breeds — Homepage section highlighting the 4 highest-priced animals
Qurbani Tips — Informational section with livestock selection advice
Toast Notifications — Success and error feedback for all auth and form actions
404 Page — Custom not-found page with a home redirect button

 NPM Packages Used
PackagePurposenextReact framework with App Router, SSR, and file-based routingreact / react-domUI library and DOM renderingbetter-authAuthentication — email/password + Google OAuth, session managementmongodbMongoDB driver for database connectionreact-hook-formForm state management and client-side validationreact-toastifyToast notification system for success and error messagesreact-iconsIcon library (FaEye, FaPhone, FaArrowDown, FaLocationPin, etc.)@heroui/reactUI components — Spinner, Modal, Form, Input, Button@gravity-ui/iconsAdditional icon set (Envelope, User icons)@gravity-ui/uikitGravity UI toolkit componentstailwindcssUtility-first CSS frameworkdaisyuiTailwind CSS plugin — badges, cards, dropdowns, stats, buttonsanimate.cssCSS animation library for hero banner and featured section transitions

 Getting Started
1. Clone & Install
bashgit clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
