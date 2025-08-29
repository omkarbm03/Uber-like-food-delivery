# 🍕 Uber-like Food Delivery App

A **React project** that simulates a food delivery platform similar to UberEats/Swiggy/Zomato.  
It includes restaurant listings, cart management, order simulation, and responsive UI design.

---

## 🚀 Features

- 📋 **Restaurant Listings** – View restaurants with cuisine, rating, and SLA details.
- 🛒 **Cart Management** – Add/remove items with live cart updates.
- 🌐 **Real API integration** (Uber/Swiggy clone)
- 🔐 **User authentication & order history**
- 💳 **Checkout & payment simulation**
- ⭐ **Restaurant reviews & ratings**
- 🔍 **Search & Filters** – Filter restaurants by cuisines and categories.
- 📱 **Responsive UI** – Works across desktop & mobile with CSS/Tailwind support.
- 🔧 **Production-Ready Setup** – Babel transpilation, modular components, util functions.

---

## 🛠️ Tech Stack

- **Frontend:** React  
- **Styling:** CSS / TailwindCSS (optional)  
- **Bundler:** Parcel (easy development builds)  
- **Testing:** Jest + React Testing Library (if configured)  
- **APIs:** Mock data & local API simulation  

---

## 📂 Project Structure

```bash
├── src
│   ├── components/       # UI components (Body, Header, etc.)
│   ├── util/             # Utility functions, constants
│   ├── app.js            # Root React app
│   ├── error.js          # Error boundary/page
│   ├── contact.js        # Contact page
│   ├── about.js          # About page
│   ├── Body.js           # Main restaurant listing page
├── public/               # Static assets
├── index.html            # Root HTML file
├── index.css             # Global styles
├── package.json          # Dependencies & scripts
└── README.md


# Clone the repo
git clone https://github.com/omkarbm03/Uber-like-food-delivery.git
cd Uber-like-food-delivery

# Install dependencies
npm install

# Run development server
npm start

npm start     # Run dev server
npm run build # Build for production
npm test      # Run tests (if configured)
```
