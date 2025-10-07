// This script makes the accordion work

// Find all the elements with the class 'accordion-header'
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add a click event to each one
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Find the parent accordion item
        const accordionItem = header.parentElement;

        // Toggle the 'active' class to open/close it
        accordionItem.classList.toggle('active');
    });
});