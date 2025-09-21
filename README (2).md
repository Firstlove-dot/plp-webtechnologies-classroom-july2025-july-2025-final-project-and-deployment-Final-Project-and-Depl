# Wk8 Project

A static multi-page website built with **HTML**, **CSS**, and **JavaScript**. It provides a responsive design with a hero section, image carousel, delivery counter, pricing tables, and a contact form.

## Directory Structure

```
Wk8 Project/
 ├─ index.htm          # Main homepage
 ├─ about.html         # About page
 ├─ services.html      # Services page
 ├─ pricing.html       # Pricing page
 ├─ contact.html       # Contact page
 ├─ styles.css         # Global stylesheet
 ├─ script.js          # JavaScript for interactivity
 ├─ img1.jpeg
 ├─ img2.jpg
 ├─ img3.png
 ├─ Logo.png
```

## Features

- Responsive Navigation Bar – collapses to a hamburger menu on mobile.
- Hero Section – large banner with overlay and call-to-action button.
- Image Carousel – previous/next navigation for images.
- Delivery Counter – interactive button to increment delivery count.
- Booking Cost Calculator – calculates delivery cost using distance and rate per km.
- Contact Form – validates input fields and shows confirmation message.

## Styling Highlights

- Gradient backgrounds for navbar, buttons, and footer.
- Animations: `pulse` on buttons, `fadeInUp` for sections.
- Section backgrounds (light blue, green, orange, purple) to differentiate content.

## JavaScript Highlights

- `incrementDeliveries()` increments a counter and updates display.
- `calculateCost(distance, ratePerKm)` returns cost calculation.
- Carousel logic updates slide index and moves slides horizontally.
- Contact form `submit` event prevents default and validates fields.

## How to Run Locally

1. Download or clone the repository.
2. Open `index.htm` in your browser.
3. Ensure `script.js`, `styles.css`, and images are in the same directory.

## Deployment to GitHub Pages

1. Push all files to a GitHub repository.
2. Under **Settings > Pages**, choose the `main` branch and root folder.
3. After saving, your site is live at:

```
https://<username>.github.io/<repo-name>/
```

## Customisation Tips

- Replace `Logo.png` with your own logo.
- Swap out images `img1.jpeg`, `img2.jpg`, `img3.png`.
- Edit gradients and background colours in `styles.css`.
- Adjust `distance` or `rate` in `script.js` for booking cost calculation.

## Limitations

- The contact form currently only shows alerts; it doesn’t actually send emails.
- Delivery counter resets on page reload (no storage).

## Future Enhancements

- Persist delivery count using `localStorage`.
- Replace alerts with inline error messages.
- Make booking cost dynamic based on user input.
- Add accessibility features (ARIA labels, alt text for images).

---

© 2025 Your Name. All rights reserved.
