# Taha Almohamed - Portfolio

Personal portfolio website.

**Live:** [taljamri.com](https://taljamri.com)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **3D:** [Three.js](https://threejs.org/), [@react-three/fiber](https://github.com/pmndrs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Content:** MDX with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Deployment:** [Nginx](https://www.nginx.com/) & [Docker](https://www.docker.com/)

## Features

- Custom 3D lanyard component in the hero section
- Shader-based aurora background effect
- Scroll-driven reveal animations
- MDX-driven content architecture
- Responsive layout with conditional rendering for performance
- Light and dark theme support

## Project Structure

```
app/         - Next.js App Router (components, layouts, pages)
content/     - MDX files for About, Work, and Projects sections
lib/         - Content loaders and utilities
public/      - Static assets
nginx.conf   - Nginx configuration for production
Dockerfile   - Container configuration
```

## Getting Started

```bash
git clone https://github.com/taljamri/personal-portfolio-v2.git
cd personal-portfolio-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

```bash
docker build -t portfolio-v2 .
docker run -p 3000:80 portfolio-v2
```

## License

This project is open-source under the MIT License. If you use it as a template, a credit or mention would be appreciated!

Created with ❤️ by [Taha Almohamed](https://taljamri.com).
