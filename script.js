// Mobile Navigation
document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonials Data
const testimonials = [
    {
        name: "John Doe",
        company: "Tech Solutions Ltd",
        text: "The consultation with Ravina was incredibly helpful. Her insights helped us streamline our operations and increase profits.",
        image: "images/testinomial.webp"
    },
    {
        name: "Jane Smith",
        company: "Creative Studios",
        text: "Thanks to Ravina's guidance, we were able to transform our business model and achieve sustainable growth.",
        image: "images/testinomial.webp"
    },
    {
        name: "Mike Johnson",
        company: "Global Traders",
        text: "The Leadership Funnel Program was eye-opening. It provided practical strategies that we implemented immediately.",
        image: "images/testinomial.webp"
    }
];

// Populate Testimonials
function populateTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial-item';
        testimonialDiv.innerHTML = `
            <div class="testimonial-content" data-aos="fade-up">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <p>${testimonial.text}</p>
                <h4>${testimonial.name}</h4>
                <p class="company">${testimonial.company}</p>
            </div>
        `;
        testimonialSlider.appendChild(testimonialDiv);
    });
}

// Blog Posts Data
const blogPosts = [
    {
        title: "Essential Tips for MSME Growth",
        excerpt: "Learn the key strategies that can help your MSME thrive in today's competitive market.",
        date: "March 15, 2024",
        image: "images/blog.webp"
    },
    {
        title: "Financial Management for Small Businesses",
        excerpt: "Effective financial management techniques to ensure sustainable business growth.",
        date: "March 10, 2024",
        image: "images/blog.webp"
    },
    {
        title: "Leadership Skills for Entrepreneurs",
        excerpt: "Develop the essential leadership qualities needed to guide your business to success.",
        date: "March 5, 2024",
        image: "images/blog.webp"
    }
];

// Populate Blog Posts
function populateBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    blogPosts.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <div class="blog-card" data-aos="fade-up">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-content">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <span class="date">${post.date}</span>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        `;
        blogGrid.appendChild(blogPost);
    });
}

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateTestimonials();
    populateBlogPosts();
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});