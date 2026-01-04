# Bolu Automations - Landing Page

Professional, modern landing page for Bolu Automations - a home services automation business serving Allen, TX.

![Bolu Automations](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Overview

A fully responsive, modern one-page website designed for Bolu Automations, offering automation solutions for plumbers and HVAC contractors in Allen, TX. The site features smooth animations, a functional contact form, and a clean professional design.

## ✨ Features

- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎨 Modern Design** - Purple/blue gradient theme with smooth animations
- **📧 Contact Form** - Integrated with Web3Forms API for reliable message delivery
- **⚡ Fast Loading** - Pure HTML/CSS/JavaScript with no heavy frameworks
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML structure
- **♿ Accessible** - ARIA labels and keyboard navigation support
- **🎭 Smooth Animations** - Intersection Observer for scroll-triggered animations

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Fork or clone this repository**

2. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select the branch you want to deploy (usually `main` or `master`)
   - Select the root folder `/` as the source
   - Click "Save"
   - Your site will be live at: `https://[your-username].github.io/[repository-name]/`

3. **Configure the contact form** (see below)

### Option 2: Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bluxio/bolu-automation.git
   cd bolu-automation
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **View the site:**
   - Navigate to `http://localhost:8000` in your browser

## 📧 Contact Form Setup (Web3Forms)

The contact form uses [Web3Forms](https://web3forms.com/) - a free, serverless form backend.

### Setup Instructions:

1. **Get your free access key:**
   - Visit [web3forms.com](https://web3forms.com/)
   - Enter your email address
   - Verify your email
   - Copy your access key

2. **Add your access key to the site:**
   - Open `index.html`
   - Find the contact form section (search for `YOUR_WEB3FORMS_ACCESS_KEY_HERE`):
     ```html
     <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
     ```
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key

3. **Test the form:**
   - Fill out the contact form on your site
   - Submit a test message
   - Check your email for the submission

### Form Features:
- ✓ Name, email, phone, business type, and message fields
- ✓ Client-side validation with visual feedback
- ✓ Loading state during submission
- ✓ Success/error messages
- ✓ Automatic email formatting for phone numbers
- ✓ Spam protection via Web3Forms

## 🎨 Customization Guide

### Colors

Edit the CSS variables in `styles.css` (lines 7-13):

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #06b6d4;  /* Secondary accent */
    --accent-color: #8b5cf6;     /* Accent highlights */
    --dark-color: #1e293b;       /* Text and dark elements */
    --light-color: #f8fafc;      /* Background */
}
```

### Content

All content can be edited directly in `index.html`:

- **Business Name**: Line 32 - `.logo` section
- **Hero Section**: Lines 47-53
- **Services**: Lines 58-104
- **About Section**: Lines 110-148
- **Testimonials**: Lines 153-187
- **Contact Information**: Lines 235-257

### Typography

The site uses the **Inter** font family from Google Fonts. To change:

1. Replace the Google Fonts link in `index.html` (line 12)
2. Update the `--font-family` variable in `styles.css` (line 26)

### Logo/Branding

- Current logo: `⚡ Bolu Automations` (emoji + text)
- To use an image logo, replace line 32 in `index.html`:
  ```html
  <a href="#hero"><img src="logo.png" alt="Bolu Automations" /></a>
  ```

## 📁 File Structure

```
bolu-automation/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and form handling
└── README.md           # This file
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no dependencies
- **Web3Forms API** - Contact form backend
- **Google Fonts** - Inter font family

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 968px (adjusted layouts)
- **Mobile**: 480px - 768px (stacked sections)
- **Small Mobile**: < 480px (optimized spacing)

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security & Privacy

- No user data is stored on the client side
- Contact form submissions are handled securely by Web3Forms
- No third-party tracking or analytics included
- HTTPS recommended for production deployment

## 📝 License

© 2026 Bolu Automations. All rights reserved.

## 🤝 Support

For issues or questions about this landing page:

- **Location**: Allen, TX
- **Response Time**: Within 24 hours
- **Services**: Automation for Plumbers & HVAC Contractors

---

**Built with ❤️ for local home service businesses in Allen, TX**
