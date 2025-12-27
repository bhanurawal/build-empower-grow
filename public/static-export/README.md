# Triverge Static HTML Export

This folder contains a complete static HTML export of the Triverge website, ready for import into WordPress or any static hosting service.

## Contents

```
static-export/
├── index.html          # Home page
├── services.html       # Services page
├── case-studies.html   # Case Studies page
├── philosophy.html     # Philosophy page
├── blog.html           # Blog page
├── contact.html        # Contact page
├── styles.css          # All CSS styles
├── images/             # Required images (you need to create this folder)
│   ├── triverge-logo.png
│   └── hero-consulting.jpg
└── README.md           # This file
```

## Required Images

Before using, copy these images to the `images/` folder:
1. `triverge-logo.png` - from the React app's `src/assets/`
2. `hero-consulting.jpg` - from the React app's `src/assets/`

## WordPress Import Options

### Option 1: Simply Static Plugin
1. Install the "Simply Static" plugin in WordPress
2. Upload all files to a WordPress subdirectory or use as static site
3. Configure the plugin to serve static pages

### Option 2: HTML Import 2 Plugin
1. Install "HTML Import 2" plugin
2. Upload the static-export folder to your server
3. Use the plugin to convert HTML pages to WordPress posts/pages

### Option 3: Manual Import
1. Create each page manually in WordPress
2. Copy the HTML content between `<main>` tags
3. Use a WordPress page builder (Elementor, Divi, etc.) to recreate the layout
4. Import the `styles.css` as a custom stylesheet

### Option 4: Custom Theme
1. Convert this static HTML into a WordPress theme
2. Create `header.php`, `footer.php`, `page.php`, etc.
3. Enqueue `styles.css` in `functions.php`

## Features Included

- ✓ Responsive design (mobile-friendly)
- ✓ Modern CSS with CSS custom properties
- ✓ Semantic HTML5 structure
- ✓ SEO meta tags
- ✓ Google Fonts (Playfair Display + Inter)
- ✓ SVG icons (inline)
- ✓ Mobile navigation menu
- ✓ Contact form (requires backend for actual submission)

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary: hsl(230 45% 25%);
    --accent: hsl(12 85% 60%);
    /* ... other colors */
}
```

### Fonts
Replace the Google Fonts link in each HTML file's `<head>` section.

### Contact Form
The contact form uses JavaScript for basic validation. For actual form submission, you'll need to:
1. Set up a WordPress form plugin (Contact Form 7, WPForms, etc.)
2. Or connect to an email service (Formspree, Netlify Forms, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- All pages are fully functional as standalone HTML files
- The design matches the original React app exactly
- No JavaScript frameworks required - just vanilla JS for mobile menu toggle
