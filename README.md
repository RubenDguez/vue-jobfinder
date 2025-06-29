# Vue JobFinder

Vue JobFinder is a job board application built with Vue 3 and Vite. It enables developers to browse job postings and employers to create, update, and manage job listings. The backend is powered by Firebase Firestore, providing CRUD operations for jobs.

## Features

- Browse a list of job postings with details like type, title, description, salary, location, and company info.
- Add new job postings with company details.
- Edit and delete existing job postings.
- Responsive, clean UI built with Vue 3 and Tailwind CSS.
- Real-time data interaction with Firebase Firestore.

## Demo

> _Add a deployed link or screenshot here if available._

## Tech Stack

- **Frontend:** Vue 3, Vite, Tailwind CSS
- **Backend:** Firebase Firestore
- **Icons:** PrimeIcons

## Project Structure

- `src/components/`: UI components (JobForm, JobListings, Navbar, etc.)
- `src/hooks/useFirebase.js`: Firebase CRUD logic
- `src/routes/`: Vue Router configuration
- `src/views/`: Page views (Home, Jobs, AddJob, Job Detail, UpdateJob)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/RubenDguez/vue-jobfinder.git
   cd vue-jobfinder
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Firebase Configuration:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore.
   - Create a `.env` file in the root directory and add your Firebase config:
     ```
     VITE_FB_API_KEY=your_api_key
     VITE_FB_AUTH_DOMAIN=your_auth_domain
     VITE_FB_PROJECT_ID=your_project_id
     VITE_FB_STORAGE_BUCKET=your_storage_bucket
     VITE_FB_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FB_APP_ID=your_app_id
     ```

### Running the App

- **Development server:**
  ```sh
  npm run dev
  ```

- **Production build:**
  ```sh
  npm run build
  ```

## Usage

- Visit the homepage to see options for developers and employers.
- Browse jobs or add a new job via the navigation bar.
- Edit or delete jobs from their detail page if needed.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.
