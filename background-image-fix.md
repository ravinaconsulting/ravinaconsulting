# Background Image Fix Required

## Issue
The hero section background image is not displaying because the image file `bg_blue.jpg` is missing from the project root directory.

## How to Fix
1. Obtain a suitable background image file (preferably a professional business-themed image)
2. Name the file `bg_blue.jpg`
3. Place the file in the root directory of the project (same level as index.html)
4. The image should be:
   - High resolution (recommended minimum 1920x1080px)
   - In JPG format
   - Named exactly "bg_blue.jpg"
   - Placed in the root directory

## Current CSS Configuration
The CSS is correctly configured to use the background image with:
```css
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("bg_blue.jpg");
```

This setup will work once a proper image file is added. The linear gradient overlay will remain to ensure text readability.