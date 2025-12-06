# 📝 BlogWebsite

[![React](https://img.shields.io/badge/React-19.2.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.6-646CFF.svg)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.6.0-orange.svg)](https://firebase.google.com/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093.svg)](https://styled-components.com/)

A modern, responsive blog platform built with React and powered by Firebase. Share your thoughts, connect with readers, and create an engaging blogging experience.

## ✨ Features

- 🚀 **Fast & Responsive**: Built with Vite for lightning-fast development and optimized builds
- 📱 **Mobile-First Design**: Fully responsive design that looks great on all devices
- 🔍 **Smart Search**: Real-time search functionality to find posts instantly
- 🏷️ **Category Navigation**: Organized content with category-based browsing
- 👤 **User Authentication**: Secure signup and login system with Firebase Auth
- 📝 **Rich Blog Posts**: Detailed article pages with clean, readable layouts
- 🎨 **Modern UI**: Beautifully designed with Styled Components and FontAwesome icons
- ⚡ **Lazy Loading**: Optimized performance with React.lazy and Suspense
- 🔄 **Real-time Updates**: Live data synchronization with Firebase Realtime Database

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern UI library with hooks and concurrent features
- **Vite** - Next-generation frontend tooling for fast development
- **React Router DOM** - Declarative routing for React applications
- **Styled Components** - CSS-in-JS styling with theme support
- **FontAwesome** - Rich icon library for enhanced UI

### Backend & Database

- **Firebase** - Backend-as-a-Service platform
  - Realtime Database for live data synchronization
  - Authentication for user management

### Development Tools

- **ESLint** - Code linting and formatting
- **Vite Plugin React SWC** - Fast React compilation

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mashrafimahin/BloggingSite.git
   cd BlogWebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Realtime Database
   - Create a `.env` file in the root directory:
     ```
     VITE_API_KEY=your_api_key
     VITE_AUTH_DOMAIN=your_auth_domain
     VITE_PROJECT_ID=your_project_id
     VITE_STORAGE_BUCKET=your_storage_bucket
     VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_APP_ID=your_app_id
     VITE_MEASUREMENT_ID=your_measurement_id
     ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Project Structure

```
BlogWebsite/
├── public/                    # Static assets
├── src/
│   ├── Assets/               # Images and media files
│   ├── Components/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── SearchBox.jsx
│   │   └── ...
│   ├── Contexts/             # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── DataContext.jsx
│   │   └── PostContext.jsx
│   ├── Pages/                # Main application pages
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Post.jsx
│   │   ├── Profile.jsx
│   │   └── SignUp.jsx
│   ├── Server/               # Firebase configuration
│   │   └── FireBase.jsx
│   ├── Styles/               # Styling files
│   │   ├── Component/        # Styled Components
│   │   └── Module/           # CSS Modules
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎯 Usage

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Key Features Usage

- **Browse Posts**: Visit the home page to see latest blog posts
- **Search Posts**: Use the search box to find specific articles
- **Navigate Categories**: Click category links to filter posts
- **Read Full Articles**: Click on any post title to read the complete article
- **User Authentication**: Sign up or log in to access additional features

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open sourced. Use it to practice as real world projects and not forget to fork this repository.

## 🙋‍♂️ Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact us through the website's contact page

---

**Made with ❤️ by [Mashrafi Mahin](https://github.com/mashrafimahin)**

_Star this repo if you find it useful!_ ⭐
