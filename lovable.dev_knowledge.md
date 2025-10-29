## Project Knowledge and Guidelines

This document provides context and guidelines for working on this project.

### Technology Stack

The project is built with the following technologies:

- **Vite**: A fast build tool that provides a quicker and leaner development experience for modern web projects.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **React**: A JavaScript library for building user interfaces.
- **shadcn-ui**: A collection of re-usable UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Project Structure

The project follows a standard React application structure:

- `src/`: Contains the main source code for the application.
- `src/assets/`: Static assets like images and videos.
- `src/components/`: Reusable React components.
  - `src/components/ui/`: Components from the shadcn-ui library.
  - `src/components/sections/`: Components that represent larger sections of a page.
- `src/data/`: Static data used by the application.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions.
- `src/pages/`: Top-level page components.
- `src/scripts/`: Standalone scripts.
- `src/styles/`: Global and component-specific stylesheets.
- `public/`: Static assets that are not processed by the build tool.

### Styling

- **Tailwind CSS**: The primary styling approach is using Tailwind CSS utility classes.
- **Global Styles**: Global styles and Tailwind directives are located in `src/index.css`.
- **Component Styles**: Some components have their own CSS module files (e.g., `CardFX.module.css`).
- **Button Styles**: The file `src/styles/buttons.css` contains custom button styles. Dynamic button effects are handled by `src/scripts/buttons.ts`.

### Development

To run the project locally, follow these steps:

1.  Install dependencies: `npm i`
2.  Start the development server: `npm run dev`

### Deployment

This project is deployed via the Lovable platform. Pushing to the main branch will trigger a new deployment.
