# Taha Almohamed - Personal Portfolio

This is my personal portfolio website, where I showcase my journey as a SWE.

🌐 **Live Demo:** [taljamri.com](https://taljamri.com)

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **UI & Styling:** [React](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), Framer Motion
- **3D & Graphics:** [Three.js](https://threejs.org/), [@react-three/fiber](https://github.com/pmndrs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Content:** MDX with [gray-matter](https://github.com/jonschlinkert/gray-matter) for project and work data
- **Deployment:** [Nginx](https://www.nginx.com/) & [Docker](https://www.docker.com/)

## ✨ Key Features

- **Dynamic Interactive UI:** High-performance animations and 3D elements powered by Three.js and Framer Motion.
- **Interactive Lanyard:** A custom 3D interactive lanyard component (pinned to the Hero section on desktop).
- **Aurora Background:** Custom shader-based background effect for an immersive experience.
- **Content-Driven:** MDX-based architecture for easy project and work experience updates.
- **Responsive Design:** Fully optimized for mobile and desktop, including heavy conditional rendering for performance.
- **Modern Performance:** Leveraging Next.js Server Components and the latest Tailwind CSS 4 features.

---

## 🛠️ Project Structure

- `app/`: Next.js App Router source (components, layouts, and page)
- `content/`: MDX files containing the data for About, Work, and Projects sections
- `lib/`: Utility functions and content loaders using `fs` and `gray-matter`
- `public/`: Static assets (images, icons, robots.txt, sitemap.xml)
- `nginx.conf` & `Dockerfile`: Infrastructure as code for production deployment

---

## 🚦 Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/taljamri/personal-portfolio-v2.git
   cd personal-portfolio-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗️ Deployment

The project is dockerized and can be deployed using the provided `Dockerfile` and `nginx.conf`.

### Using Docker

```bash
docker build -t portfolio-v2 .
docker run -p 3000:80 portfolio-v2
```

---

## 📄 License

This project is open-source and available under the MIT License. Feel free to use it as a template for your own portfolio!

Created with ❤️ by [Taha Almohamed](https://taljamri.com).

