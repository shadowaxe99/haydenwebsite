# Hayden Flynn Graham - Personal Portfolio

A professional, modern, and responsive personal portfolio website for Hayden Flynn Graham, a legal scholar and advocate at the University of North Carolina School of Law.

## 🌟 Features

- **Modern & Clean Design**: A sophisticated aesthetic utilizing a navy, gold, and cream color palette, reflecting professionalism and academic rigor.
- **Fully Responsive**: Optimized for all devices, from large desktop monitors to mobile phones.
- **Interactive Animations**: Smooth scroll animations and hover effects powered by Framer Motion (`motion/react`).
- **Curriculum Vitae Modal**: A beautifully formatted, printable CV accessible directly from the site.
- **Article Reader**: An integrated modal for reading full-text articles and publications without leaving the site.
- **SEO Optimized**: Includes comprehensive meta tags, Open Graph data, and semantic HTML for optimal search engine indexing.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 📁 Project Structure

- `/src/components`: Contains all React components (Hero, About, Experience, etc.).
- `/src/constants.ts`: Centralized data file containing all the content (Experience, Education, Publications, etc.) for easy updating.
- `/src/App.tsx`: The main application component that orchestrates the layout.
- `/src/index.css`: Global styles and Tailwind configuration.
- `/public`: Static assets including the favicon.

## 📝 Content Management

To update the content of the website (e.g., adding a new job, updating education, or adding a new publication), simply edit the `src/constants.ts` file. The website is designed to dynamically render the content based on the data structures defined in this file.

## 📄 License

This project is proprietary and confidential. All rights reserved.
