# 🎬 # React Native Movies Tutorial

Build a beautiful, trending movie app with React Native and Appwrite — complete with backend data and metrics tracking.

---

## 🚀 Features

- Browse trending movies  
- Track views and engagement with Appwrite  
- Fully responsive UI built with React Native & Expo  

---

## 🛠 Prerequisites

- Node.js >= 14.x   
- Appwrite account — [Create one here](https://appwrite.io)  
- Android Studio or Xcode (for emulators)  

---

## 🧩 Step 1: Set Up Appwrite

1. Go to [appwrite.io](https://appwrite.io) and **sign up**.  
2. Create a **new project** (e.g., `MoviesApp`).  
3. In your project:  
   - Go to the **Database** section.  
   - Create a **new collection** called `trendingMovies`.  
   - Add fields like `title`, `posterUrl`, `rating`, and `views`.  
4. Enable **permissions** for read/write access as needed.  
5. Set up a **platform** (iOS/Android/web) for your app.  
6. Note your:  
   - **Project ID**  
   - **Database ID**  
   - **Collection ID**  

---

## ⚛️ Step 2: Initialize the React Native App

1. Clone this repo or create a new Expo app:

    ```bash
    npx create-expo-app movies-app
    cd movies-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Add a `.env` file in your root directory:

    ```env
    APPWRITE_PROJECT_ID=your_project_id
    APPWRITE_DATABASE_ID=your_database_id
    APPWRITE_COLLECTION_ID=your_collection_id
    ```

4. (Optional) Follow folder structure inspired by [Adrian Hajdin’s Movie App](https://github.com/adrianhajdin/react-native-movie-app):

    ```
    ├── components/
    ├── constants/
    ├── screens/
    ├── assets/
    └── App.js
    ```

5. Start the app:

    ```bash
    npx expo start
    ```

---