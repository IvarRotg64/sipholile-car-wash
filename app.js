// app.js

// Smooth scroll for "Learn More" button
document.querySelector('#learn-more').addEventListener('click', () => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

// Subscription Button - Trigger Modal
document.querySelector('#subscribe-btn').addEventListener('click', () => {
    document.querySelector('#subscription-modal').style.display = 'flex';
});

// Close the modal when clicking outside of it
document.querySelector('#subscription-modal').addEventListener('click', (e) => {
    if (e.target === document.querySelector('#subscription-modal')) {
        document.querySelector('#subscription-modal').style.display = 'none';
    }
});

// Contact Form Validation
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Subscription Form Validation
document.querySelector('#subscription-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const subscriberName = document.querySelector('#subscriber-name').value;
    const subscriberEmail = document.querySelector('#subscriber-email').value;

    if (subscriberName && subscriberEmail) {
        alert('Thank you for subscribing!');
        document.querySelector('#subscription-modal').style.display = 'none';
    } else {
        alert('Please fill in all fields.');
    }
});
