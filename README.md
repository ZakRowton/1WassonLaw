# Wasson Law

Professional dark-themed website for Kyle B. Wasson, Criminal Defense Attorney.

## Overview

A modern, single-page attorney website featuring a luxurious dark theme with gold accents. Designed to convey trust, professionalism, and authority in criminal defense law.

## Features

- **Dark Luxury Theme**: Deep black backgrounds with elegant gold (#D4AF37) accents
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered fade-in animations and hover effects
- **Mobile Navigation**: Hamburger menu with smooth toggle animation
- **Professional Sections**:
  - Navigation bar with scroll-aware background
  - Hero section with attorney introduction
  - About section with professional background
  - Practice Areas (8 criminal defense specialties)
  - Why Choose Us highlights
  - Client Testimonials
  - Contact Form
  - Footer with contact information

## Tech Stack

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Custom properties, Flexbox, Grid, backdrop-filter, animations
- **JavaScript**: Vanilla JS for interactions and animations
- **Google Fonts**: Cinzel (headings), Playfair Display (body)
- **Font Awesome**: Professional icons throughout

## File Structure

```
1WassonLaw/
├── index.html          # Main single-page website
├── css/
│   └── styles.css      # All styles, variables, animations, responsive breakpoints
├── js/
│   └── main.js         # Mobile menu, smooth scroll, scroll animations, form handler
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ZakRowton/1WassonLaw.git
   cd 1WassonLaw
   ```

2. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - Or serve with a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (npx)
     npx serve .
     ```

3. **No build step required**:
   - This is a static website with no dependencies to install
   - All external resources (fonts, icons) are loaded via CDN

## Customization

- **Colors**: Edit CSS variables in `css/styles.css` under `:root`
- **Content**: Update text and attorney information directly in `index.html`
- **Practice Areas**: Modify the 8 card sections in the Practice Areas grid
- **Contact Info**: Update email, phone, and address in the Contact and Footer sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and created for Wasson Law.
