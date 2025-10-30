## Project Knowledge and Guidelines

This document provides context and guidelines for working on this project. It serves as a journal, brand kit, and technical guide.

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

### Branding

The brand identity is "SecureConnect", which is reflected in the design system. The core themes are security, technology, and a modern aesthetic.

#### Colors

The color palette is defined in `src/brand.css` and is based on a "Greens Gradient System".

- **Primary Greens**:
  - `--salad-green`: `#A8CF45`
  - `--june-bud`: `#BAD96B`
  - `--green-onion`: `#7D9C33`
  - `--verdan-green`: `#455C08`
- **Base Colors**:
  - `--mine-shaft`: `#000000`
  - `--white`: `#FFFFFF`
- **Neon Green Ramp (for accents)**:
  - `--neonA`: `#1FFF00`
  - `--neonB`: `#4FFF00`
  - `--neonC`: `#6FFF00`
  - `--neonD`: `#8FFF00`
  - `--neonE`: `#9FFF00`

#### Typography

The project uses the "Inter" font. The main typography classes are defined in `src/brand.css`:

- `.text-heading`: For headings.
- `.text-body`: For body text.
- `.text-accent`: For text with a glowing effect.

### Styling

- **Tailwind CSS**: The primary styling approach is using Tailwind CSS utility classes.
- **Global Styles**: Global styles and Tailwind directives are located in `src/index.css`.
- **Component Styles**: Some components have their own CSS module files (e.g., `CardFX.module.css`).
- **Button Styles**: The file `src/styles/buttons.css` contains custom button styles.
- **Branding**: The file `src/brand.css` contains brand-specific styles, including colors, typography, and a responsive grid system.

### Button System

The project has a comprehensive button system with various styles and effects, defined in `src/styles/buttons.css`.

- **`.btn-neon`**: The primary button style with a neon glow effect.
- **`.btn--neon`**: A button with a pulsing neon effect.
- **`.btn--mag`**: A button with a magnetic tilt effect on hover.
- **`.btn--shimmer`**: A button with a shimmer effect on hover.
- **`.btn--dust`**: A button with a "dust" effect on hover.
- **`.btn--ripple`**: A button with a ripple effect on click.
- **`.btn-blue`**: A blue button variant.
- **`.btn--neon-animated`**: A button with an animated neon border.

### Scripts

The file `src/scripts/buttons.ts` contains scripts for button interactions.

- `initMagneticTilt()`: Initializes the magnetic tilt effect for buttons with the `.btn--mag` class.
- `initRippleEffect()`: Initializes the ripple effect for buttons with the `.btn--ripple` class.
- `initButtonEffects()`: Initializes all button effects, with a check for the user's preference for reduced motion.

### Development

To run the project locally, follow these steps:

1.  Install dependencies: `npm i`
2.  Start the development server: `npm run dev`

### Deployment

This project is deployed via the Lovable platform. Pushing to the main branch will trigger a new deployment.

### Project History

- **Initial Setup**: The project was set up with Vite, React, and TypeScript.
- **Styling**: Tailwind CSS was chosen for its utility-first approach.
- **UI Components**: shadcn-ui was added for a collection of re-usable UI components.
- **Branding and Design**: A design system was developed with a focus on a "SecureConnect" theme, including a green color palette, neon effects, and interactive buttons.
- **Challenges and Resolutions**:
  - **Challenge**: The initial button styles were not visually distinct enough.
  - **Resolution**: A comprehensive button system was created with multiple styles and interactive effects to provide clear visual hierarchy.
  - **Challenge**: The project lacked a centralized place for brand guidelines.
  - **Resolution**: The `src/brand.css` file was created to store all brand-related styles, and this `lovable.dev_knowledge.md` file was created to document them.
