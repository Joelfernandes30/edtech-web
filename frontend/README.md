
---

````markdown
# Techmiya Website

A modern web application built with **Vite**, **React**, **TypeScript**, **shadcn-ui**, and **Tailwind CSS**.  
Originally generated with Lovable, now fully configured as a standard NPM project for local development and deployment to Cloud Run or any static hosting.

---

## 🚀 Features
- **Vite + React + TypeScript** for fast builds and development
- **Tailwind CSS** for styling
- **shadcn-ui** components
- **Lovable component tagger** for enhanced UI building
- Ready for **Cloud Run** deployment with production build

---

## 🛠 Prerequisites
- **Node.js** and **npm** installed  
  Install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for convenience.

---

## 📦 Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>
cd techmiya-website

# Step 2: Install dependencies
npm install
````

---

## 💻 Development

```sh
npm run dev
```

This starts the development server at `http://localhost:8080` with hot reloading.

---

## 🏗 Build for Production

```sh
npm run build
```

Builds the app into the `dist/` folder.

---

## 👀 Preview Production Build

```sh
npm run preview
```

---

## 🐳 Deploy to Cloud Run

1. **Dockerfile** example:

   ```dockerfile
   FROM node:18-alpine

   WORKDIR /app

   COPY package*.json ./
   RUN npm install

   COPY . .

   RUN npm run build
   RUN npm install -g serve

   EXPOSE 8080
   CMD ["serve", "-s", "dist", "-l", "8080"]
   ```

2. **Deploy with gcloud**:

   ```sh
   gcloud run deploy techmiya-website \
     --image=gcr.io/<YOUR_PROJECT_ID>/techmiya-website \
     --platform=managed \
     --region=us-central1 \
     --allow-unauthenticated
   ```

---

## 📂 Project Structure

```
techmiya-website/
├── src/                # Application source code
├── public/             # Static assets
├── dist/               # Production build output
├── package.json        # Project metadata and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── README.md           # Project documentation
```

---

## 🛠 Technologies Used

* [Vite](https://vitejs.dev/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn-ui](https://ui.shadcn.com/)
* [Lovable Tagger](https://lovable.dev/)

---

## 📄 License

This project is licensed under the MIT License.

```

---

If you want, I can also **embed the Cloud Run Jenkins pipeline instructions** directly into this `README.md` so your CI/CD flow is fully documented. That way, anyone can deploy it straight from Jenkins.  
Do you want me to add that section?
```
