# CreativeFuel Website Clone

A clone of the [creativefuel.io](https://creativefuel.io) website built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates how to create a modern, responsive website with a sleek, dark theme design.

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS transitions (Framer Motion to be added)

## Features

- Responsive design
- Modern UI components
- Smooth scrolling navigation
- Static site generation for performance

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd creativefuel-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
creativefuel-clone/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Main layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── ui/             # Basic UI elements (Button, Card, etc.)
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── sections/       # Page sections (Hero, Services, etc.)
│   └── lib/                # Utility functions
└── public/                # Static assets
    └── videos/            # Video assets
```

## Todo

- Add remaining section components (Work, About, Testimonials, Contact)
- Add Framer Motion for enhanced animations
- Improve accessibility
- Add form functionality for the contact section

## License

MIT 