# Oricle Hearing – Webpage Optimization & Security

## Task Overview
This repository contains an optimized, secure, and locally-deployable version of the live webpage:[https://article.oriclehearing.com/clearhearing](url)

---

## Project Structure
- `/index.html`
- `/css/` – All stylesheets
- `/js/` – Moved external scripts, optimized logic
- `/images/` – All image assets

---

## Tasks Completed

### 1. Local Deployment Setup
- **1.1** Downloaded complete HTML, images, CSS, JS
- **1.2** Fixed broken JS references and made all paths relative
- **1.3** Ensured images/resources load correctly (tested offline)
- **1.4** Verified layout, responsiveness.
  
### 2. Performance Optimization
- **2.1** Added `defer` for script tags
- **2.2** Removed unused CSS and JS 
- **2.3** Minimized render-blocking resources

### 3. Link Management
- **3.1** Replaced outbound product/affiliate links with `https://www.click.example.com/click`
- **3.2** Left social/contact/legal links unchanged (as required)

### 4. Security Improvements
- **4.1** Added JS-based clickjacking protection
- **4.2** Removed unused iframes and tracking scripts (VWO, GTM, Mixpanel, etc.)
- **4.3** Moved inline JavaScript into dedicated external `.js` files
- **4.4** Verified form security and non-iframe embedding

---

## Decisions & Notes
- **Fonts**: Used webfont.js to load Google Fonts dynamically. This approach was retained for compatibility and appearance matching with the live site.
             If full offline functionality is required, fonts can be downloaded and served locally.
- **Rendering**: Deferred all DOM-interactive scripts and removed unnecessary inline tracking tools (e.g., GTM, VWO).
                Scripts loaded with `defer` attributes to avoid blocking page render. 
- **Testing**: Verified full responsiveness, hover/animations, and mobile behavior via Chrome DevTools.Used DevTools, VSC extention 'Unused CSS Finder' and manual testing to identify unused scripts.             
- **Security**: Frame-busting tested locally with custom `attacker.html` and 'index.js', which ensures that the site cannot be loaded inside an iframe.
- **Common Function**: Moved repeated date-rendering logic into a centralized date rendering logic (index.js) to improve maintainability and reducing redundant loading.

---

## How to Run
1. Clone the repo
2. Open `index.html` in any browser
3. All resources are local — no internet connection required

---

## Author
**Ancy Sano**

---
