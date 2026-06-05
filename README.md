# 1WassonLaw

**Kyle B. Wasson — Criminal Defense Attorney**

A premium, dark-themed single-page website for criminal defense attorney Kyle B. Wasson. Built with a luxury aesthetic featuring gold accents, glassmorphism panels, and smooth scroll-triggered animations.

---

## Live Demo

🌐 [https://zakrowton.github.io/1WassonLaw](https://zakrowton.github.io/1WassonLaw) *(GitHub Pages — enable in repo settings)*

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic sections) |
| Styling | CSS3 (CSS variables, flexbox, grid, backdrop-filter) |
| Fonts | Google Fonts — Cinzel (display/headings), Playfair Display (body) |
| Icons | Font Awesome 6 (CDN) |
| Animation | CSS keyframes + Intersection Observer API |
| Interactivity | Vanilla JavaScript (ES6+) |
| Hosting | GitHub Pages |

---

## File Tree

```
1WassonLaw/
├── index.html          # Main single-page website
├── css/
│   └── styles.css      # Complete dark luxury theme
├── js/
│   └── main.js         # Interactivity & scroll animations
└── README.md           # Project documentation
```

---

## Website Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navigation** | Fixed glassmorphism navbar with gold-accented links and mobile hamburger menu |
| 2 | **Hero** | Full-screen dark gradient with attorney name, tagline, and CTA button |
| 3 | **About** | Attorney biography placeholder with circular photo placeholder |
| 4 | **Practice Areas** | 8-card responsive grid (DUI/DWI, Drug Crimes, Violent Crimes, White Collar, Theft, Weapons, Domestic Violence, Juvenile) |
| 5 | **Why Choose Us** | 4-pillar feature grid (Experience, Personalized Attention, Proven Results, 24/7 Availability) |
| 6 | **Testimonials** | 3 placeholder client review cards with star ratings |
| 7 | **Contact** | Functional contact form + office info placeholder |
| 8 | **Footer** | Quick links, copyright, legal disclaimer |

---

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Gold | `#D4AF37` | Primary accent, headings, borders, buttons |
| Gold Light | `#F9F1D8` | Body text, secondary accents |
| Gold Dim | `#8a7326` | Muted elements, placeholders |
| Black | `#030303` | Page background |
| Panel BG | `rgba(10,10,10,0.6)` | Glass panels |

### Typography
- **Display / Headings**: Cinzel (400, 700, 900)
- **Body / UI**: Playfair Display (400, 600; italic 400)

### Effects
- Glassmorphism: `backdrop-filter: blur(12px)` + gold-tinted borders
- Hero gradient: `radial-gradient(circle at top center, #1F1512 0%, #000000 100%)`
- Animations: fadeInUp, pulseSlow, shine

---

## Placeholder Content Notes

> ⚠️ The following items contain placeholder data and **must be updated** before launch:

| Item | Current Placeholder | Action Needed |
|------|---------------------|---------------|
| Attorney Bio | Lorem ipsum text | Replace with Kyle B. Wasson's real biography |
| Attorney Photo | CSS-generated placeholder circle | Add professional headshot |
| Office Address | "123 Main St, City, ST 12345" | Update to real office address |
| Phone Number | "(555) 123-4567" | Update to real business phone |
| Email | "info@wassonlaw.com" | Confirm and update if needed |
| Testimonials | Fictional client names & quotes | Replace with real client testimonials (with permission) |
| Practice Area Descriptions | Generic placeholder copy | Customize to reflect actual case experience |
| Social Media Links | `#` placeholders | Add real profile URLs |
| Google Maps Embed | Placeholder coordinates | Embed real office location |
| Meta Description | Generic SEO text | Write custom meta description for SEO |
| Favicon | Default | Add custom favicon |

---

## Future Enhancements

- [ ] Add real attorney biography and professional headshot
- [ ] Integrate live Google Maps embed with office location
- [ ] Connect contact form to backend (Formspree, Netlify Forms, or custom PHP)
- [ ] Add blog / legal insights section
- [ ] Implement case results / verdicts showcase
- [ ] Add schema.org structured data for local SEO
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance optimization (image lazy loading, critical CSS)

---

## License

© 2026 Kyle B. Wasson. All rights reserved.

---

*Built for 1WassonLaw — aggressive criminal defense when it matters most.*
