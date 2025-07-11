# Product Requirements Document: Supr Surge Website

## 1. Introduction

This document outlines the product requirements for the "Supr Surge" website. The goal is to build a highly creative, interactive, and professional website for a digital and meme marketing agency. The site should reflect a unique brand identity that is sleek, stylish, playful, and intuitive, inspired by modern web experiences like creativefuel.io but with a distinct and unique feel.

## 2. Vision & Core Principles

-   **Creative & Playful:** The design should be vibrant, incorporating memes, interactive stickers, and bold animations to reflect the agency's focus.
-   **Professional & Polished:** While playful, the site must maintain a high level of professionalism, with a clean layout, clear typography, and seamless user experience.
-   **Interactive & Engaging:** Micro-interactions, scroll-based animations, and dynamic content should be used to keep users engaged and enhance the experience.
-   **Data-Driven:** The website should effectively communicate the agency's reliance on data analytics and AI through its content and design elements.

## 3. High-Level Requirements

### 3.1. Pages

-   `/` (**Homepage**): A single-page layout integrating all the primary sections outlined below.
-   `/about` (**About Us**): A page to showcase the team with avatars and profiles.
-   `/services` (**Services**): A dedicated page detailing the services offered.
-   `/contact` (**Contact Us**): Can be a separate page or a link to the form section on the homepage.

### 3.2. Global Features

-   **Header**: A sticky header containing navigation links (`Home`, `About Us`, `Services`, `Contact Us`).
-   **Responsive Design**: The website must be fully responsive across desktop, tablet, and mobile devices.
-   **Dynamic Theming**: Background themes and colors should change as the user scrolls to different sections.
-   **Animations & Effects**: Consistent use of animations for component loading, hover states, and scroll events.

## 4. Homepage Section Breakdown & Implementation Plan

This section details the requirements and implementation tasks for each part of the homepage.

---

### 4.1. Section 1: Hero Viewport

-   **Objective**: To immediately capture user attention with a bold headline and interactive visuals that communicate the brand's core message.

-   **Functional Requirements**:
    -   **Layout**: 55/45 split screen (left: copy, right: interactive graphic). Stacks on mobile.
    -   **Headline**: "From Meme to Mainstream — Your Brand, Our Playground" with a dynamic word swap ("Meme" -> "Trend" -> "Viral Moment" -> "Story") every 3 seconds.
    -   **Subtitle**: "Crafty digital campaigns that stop scrolls and spark conversations."
    -   **CTAs**:
        -   Primary Button: "Make Memes, Make Impact" with a neon-green glow and 3D push on hover.
        -   Secondary Link: "See Our Viral Lab →" with an animated underline on hover.
    -   **Graphic**: Interactive Lottie animation of a "meme generator" with a parallax tilt effect (±5°) on mouse move.
    -   **Background**: Angled gradient (charcoal → purple → neon green) with faint, looping particles.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Build Layout & Styling**
        -   [x] *Step*: Use Flexbox or CSS Grid with Tailwind CSS to create the split-screen and responsive stacking.
        -   [x] *Step*: Apply the specified padding, fonts (`Montserrat`, `Open Sans`), and colors from the Design Spec.
        -   [ ] *Step*: Implement the background gradient and particle effect (e.g., using `particles.js` or a custom canvas animation).
    2.  **Task: Implement Dynamic Headline**
        -   [x] *Step*: Use React state (`useState`) and a timer (`useEffect` with `setInterval`) to cycle through the dynamic words.
        -   [x] *Step*: Use a library like `Framer Motion` (`AnimatePresence`) for the smooth crossfade and slide animation.
    3.  **Task: Implement CTAs**
        -   [x] *Step*: Create a reusable `Button` component.
        -   [x] *Step*: Use CSS transitions and transforms for the hover effects (glow, 3D push, underline animation).
    4.  **Task: Implement Interactive Graphic**
        -   [x] *Step*: Install and use a Lottie player library for React to embed the animation.
        -   [x] *Step*: Add a mouse move event listener to the section and use `requestAnimationFrame` to update the graphic's transform (rotateX, rotateY) for a smooth parallax effect.
    5.  **Task: Implement Entrance Animations**
        -   [x] *Step*: Use an intersection observer (e.g., via `react-intersection-observer` or Framer Motion's `whileInView`) to trigger the slide-up and fade-in animations on the headline and CTAs when the section becomes visible.

---

### 4.2. Section 2: "What We Do" / Our Process

-   **Objective**: To clearly explain the agency's three-phase workflow in a visually engaging way.

-   **Functional Requirements**:
    -   **Layout**: Three-column horizontal layout on desktop, stacking into cards on mobile.
    -   **Content**: Each column represents a phase (`Ideate & Strategize`, `Create & Amplify`, `Analyze & Optimize`) with a title, description, and an animated icon.
    -   **Micro-interactions**:
        -   Cards have hover effects (glow, icon animation).
        -   `Create & Amplify` card has an "AI-Powered" badge.
        -   `Analyze & Optimize` card has a "Live ticker" that animates on scroll.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Create the Card Component**
        -   [x] *Step*: Build a reusable `Card` component with slots for an icon, title, and description.
        -   [x] *Step*: Apply styling from the Design Spec (padding, border, background).
    2.  **Task: Implement Layout**
        -   [x] *Step*: Use CSS Grid to create the three-column layout with specified gaps, ensuring it collapses correctly on smaller screens.
        -   [ ] *Step*: Add the diagonal SVG dividers for section transitions.
    3.  **Task: Implement Card Content & Animations**
        -   [x] *Step*: Populate each card with the specified text and icons.
        -   [x] *Step*: Implement the hover effects using CSS transitions (background color change, icon spin/pop).
        -   [x] *Step*: For the live ticker, use an intersection observer to trigger a counting animation (e.g., with `react-spring` or `framer-motion`).
        -   [x] *Step*: Use an intersection observer to trigger the staggered fade-in + slide-up entrance animation for each card.

---

### 4.3. Section 3: "Why We’re Different"

-   **Objective**: To highlight the agency's unique selling propositions: omni-channel approach, AI integration, and expert team.

-   **Functional Requirements**:
    -   **Layout**: Two-column split (60% text, 40% animated graphic). Dark theme.
    -   **Content**: Headline, subhead, and four detailed points with icons and text.
    -   **Graphic**: Interactive SVG "mind map" where nodes expand and show tooltips on hover.
    -   **Micro-interactions**: Icons have hover effects, graph points pulse, and particle bursts appear on hover.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Build Layout & Dark Theme**
        -   [x] *Step*: Implement the two-column layout.
        -   [x] *Step*: Apply the charcoal background color and update text colors for contrast.
        -   [ ] *Step*: Add the animated gradient wave effect behind the graphic.
    2.  **Task: Create the Feature Map Graphic**
        -   [x] *Step*: Design the SVG mind map.
        -   [x] *Step*: Use React state to manage the hover/click state of each node.
        -   [x] *Step*: Apply CSS transforms to scale nodes and JS to show/hide tooltips on interaction.
        -   [x] *Step*: Animate the drawing of lines and appearance of nodes on section load.
    3.  **Task: Implement Detailed Points**
        -   [x] *Step*: Create a component for the feature points (icon + text).
        -   [ ] *Step*: Implement the specified hover effects and micro-interactions (color cycling, pulsing, particle bursts).

---

### 4.4. Section 4: Metrics

-   **Objective**: To showcase key performance indicators in a fun, sticker-like format.

-   **Functional Requirements**:
    -   **Layout**: Four equal-width cards in a row (desktop), 2x2 grid (tablet), single column (mobile).
    -   **Card Design**: Rounded cards with a dashed "sticker outline" and playful icon.
    -   **Content**: Each card has an icon, a metric number, and a label.
    -   **Animations**: Numbers are animated counters. Cards have a shake effect and border animation on hover.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Design the Metric Card**
        -   [x] *Step*: Create a component for the metric card, applying the sticker-like styling (rounded corners, dashed border, shadow).
    2.  **Task: Implement Layout**
        -   [x] *Step*: Use a responsive grid to arrange the cards correctly across different screen sizes.
    3.  **Task: Implement Animations**
        -   [x] *Step*: Use an intersection observer to trigger the live counter for each metric.
        -   [x] *Step*: Implement the CSS keyframe animation for the card shake on hover.
        -   [x] *Step*: Animate the dashed border morphing into a solid line on hover, potentially by animating properties of an SVG border.

---

### 4.5. Section 5: Showcases (Top Works)

-   **Objective**: To display portfolio pieces in an interactive and memorable 3D carousel.

-   **Functional Requirements**:
    -   **Layout**: A 3D-like card carousel.
    -   **Cards**: Each card represents a project with a background image, title, and a metric badge.
    -   **Interaction**: Cards flip on hover to reveal a description. The carousel is swipeable/draggable and snaps into place.
    -   **Navigation**: Arrow buttons and pagination dots.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Select and Implement a Carousel Library**
        -   [x] *Step*: Choose a library that supports 3D effects and dragging, such as `Swiper.js` or `Framer Motion`.
    2.  **Task: Build the Project Card**
        -   [x] *Step*: Create the card component with its content (image, title, badge).
        -   [x] *Step*: Implement the 3D flip effect on hover using CSS `transform` with `rotateY(180deg)` and `backface-visibility: hidden`.
    3.  **Task: Configure the Carousel**
        -   [x] *Step*: Set up the carousel with the specified options (3 slides per view on desktop, responsiveness, navigation arrows, pagination).
        -   [x] *Step*: Implement the spring-like snap animation on drag release, a feature often configurable in modern carousel libraries.

---

### 4.6. Section 6: Brands & Testimonials

-   **Objective**: To build credibility by showcasing client logos and positive feedback.

-   **Functional Requirements**:
    -   **Layout**: Two stacked sub-sections: a filterable brand gallery and a testimonials carousel. Dark theme.
    -   **Brand Gallery**: A grid of client logos that can be filtered by category. Logos have a hover effect.
    -   **Testimonials**: A carousel displaying one testimonial at a time in a speech-bubble-shaped card.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Implement the Filterable Logo Gallery**
        -   *Step*: Use React state to manage the active filter.
        -   *Step*: Create the logo grid and apply a fade-in/out animation when the filter changes. Use a library like Framer Motion for easy animated filtering.
        -   *Step*: Implement the hover overlay effect on each logo.
    2.  **Task: Implement the Testimonials Carousel**
        -   *Step*: Use a simple carousel library (`Swiper.js` or build a custom one).
        -   *Step*: Style the testimonial card as a speech bubble, likely using a custom SVG for the shape or CSS `clip-path`.
        -   *Step*: Implement the auto-rotation and micro-interactions (pop-in animation, sparkle effect).

---

### 4.7. Section 7: "Talk to Us" Form

-   **Objective**: To provide a user-friendly and encouraging way for potential clients to get in touch.

-   **Functional Requirements**:
    -   **Layout**: Split-screen (left: intro text/illustration, right: form).
    -   **Content**: Headline with dynamic text swap, subtext, and an animated illustration.
    -   **Form**: Fields for Name, Email, URL, Goals, and Budget.
    -   **Interactions**: Real-time validation, focus states, and a thank-you message on successful submission.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Build Form Layout and Components**
        -   *Step*: Create the split-screen layout.
        -   *Step*: Build styled input, textarea, and select components.
    2.  **Task: Implement Form Logic and Validation**
        -   *Step*: Use a form management library like `React Hook Form` for state management and validation.
        -   *Step*: Display error messages based on the validation state.
    3.  **Task: Implement Submission Flow**
        -   *Step*: Handle the form submission, showing a loading state.
        -   *Step*: On success, implement the card flip animation to show the thank-you message.
    4.  **Task: Add Illustrations and Micro-interactions**
        -   *Step*: Integrate the animated SVG illustration.
        -   *Step*: Implement the hover and focus effects on the headline and form fields.

---

### 4.8. Section 8: FAQs

-   **Objective**: To proactively answer common questions in a clean, accordion-style interface.

-   **Functional Requirements**:
    -   **Layout**: Two-column accordion on desktop, single column on mobile. Dark theme.
    -   **Functionality**: Clicking a question expands to show the answer.
    -   **Styling**: Questions have a chevron icon that rotates when the item is open.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Create an Accordion Component**
        -   *Step*: Build a reusable accordion component that manages its own open/closed state.
        -   *Step*: Use CSS transitions on `max-height` or a library like `Framer Motion` to animate the expand/collapse.
    2.  **Task: Populate with Content**
        -   *Step*: Use the component to build the list of FAQs with the provided questions and answers.
        -   *Step*: Lay them out in a responsive two-column grid.

---

### 4.9. Section 9: Footer

-   **Objective**: To provide standard footer information like social links, navigation, and contact details.

-   **Functional Requirements**:
    -   **Layout**: Three columns on desktop, stacking on mobile.
    -   **Content**: Logo and social links; quick navigation links; contact info.
    -   **Bottom Bar**: Copyright notice and a scroll-to-top button.

-   **Micro-Tasks & Implementation Steps**:
    1.  **Task: Build Footer Layout**
        -   *Step*: Use Flexbox or CSS Grid to create the three-column layout.
    2.  **Task: Add Content and Links**
        -   *Step*: Populate the footer with all required information and links.
        -   *Step*: Style the social icons and quick links with their specified hover effects.
    3.  **Task: Implement Scroll-to-Top Button**
        -   *Step*: Create the button and use a scroll event listener or intersection observer to show/hide it based on scroll position.
        -   *Step*: Implement a smooth scroll-to-top behavior on click.

## 5. Design System

This section is based on the Developer Design Spec provided.

### 5.1. Color Palette

| Token Name      | Hex       | Usage                                        |
| --------------- | --------- | -------------------------------------------- |
| Primary Purple  | `#8B5CF6` | Primary highlights, icon fills               |
| Accent Green    | `#22C55E` | CTA backgrounds, badges, hover glows         |
| Highlight Pink  | `#EC4899` | Dynamic words, pill badges, secondary accents|
| Neutral Dark    | `#1F2937` | Section backgrounds, text on light           |
| Neutral Medium  | `#4B5563` | Secondary text, form sub-labels            |
| Neutral Light   | `#F9FAFB` | Main backgrounds, cards, forms               |
| Neutral Gray    | `#D1D5DB` | Subtitles, inactive filters, borders         |
| Error Red       | `#EF4444` | Form validation messages                     |

### 5.2. Typography

-   **Font Families**:
    -   Headings & UI: `Montserrat`
    -   Body & Forms: `Open Sans`
-   **Scale**: Refer to the detailed scale in the brief for H1-H4, Body, Small, and Italic styles.

### 5.3. Spacing & Layout

-   **Base Unit**: 8px.
-   **Spacing Scale**: 8, 16, 24, 32, 40, 48, 64, 80, 120 px.
-   **Container Widths**: `max-w-screen-sm` (640px), `max-w-screen-md` (960px), `max-w-screen-lg` (1200px).
-   **Grid**: 12-column grid with a 24px gutter.

### 5.4. Components

-   **Buttons**: Styles for Primary and Secondary Link buttons are defined in the brief, including hover states and transitions.
-   **Cards**: Base styles plus variations for Process, Metrics, and Carousel cards are defined with specific borders, shadows, and hover effects.
-   **Forms**: Styles for inputs and textareas, including focus and error states, are clearly defined.

### 5.5. Animations & Effects

| Effect                    | Trigger            | Duration | Easing                                            |
| ------------------------- | ------------------ | -------- | ------------------------------------------------- |
| Fade + Slide Up           | Scroll-into-view   | 600ms    | `ease-out`                                        |
| Dynamic Word Swap         | Interval (3s)      | 400ms    | crossfade + `translateY(-10px)`                   |
| Hover Glow (Buttons)      | Hover              | 150ms    | `ease-in-out`                                     |
| Card Shake                | Hover (Metrics)    | 600ms    | keyframes `±3°`                                   |
| 3D Carousel Snap          | Drag release       | 400ms    | spring-like bounce (mass=1, tension=170)          |
| SVG Path Draw             | Section load       | 400ms    | `linear`                                          |
| Accordion Expand/Collapse | Click              | 400ms    | `ease`                                            |
| Live Counter              | Scroll-into-view   | 1.5s     | `ease-out`                                        |
| Parallax Tilt             | Mouse move         | real-time| `lerp` to target angle (max 5°)                   |

## 6. Technology Stack

-   **Framework**: Next.js
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion (recommended), CSS Transitions/Animations
-   **Form Management**: React Hook Form (recommended)

## 7. Accessibility

-   Respect `prefers-reduced-motion` by disabling or reducing animations.
-   Ensure text contrast ratios are at least 4.5:1.
-   Use semantic HTML and provide ARIA labels for all interactive elements.
-   Ensure all functionality is accessible via keyboard. 