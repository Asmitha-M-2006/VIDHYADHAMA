/**
 * Vidhyadhama Website - Main JS
 * Handling form submissions and general interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Admission Enquiry Form Handling
    const admissionForm = document.getElementById('admissionEnquiryForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(admissionForm);
            const name = formData.get('studentName');
            const phone = formData.get('contactNumber');
            const email = formData.get('emailAddress');
            const stream = formData.get('selectedStream');
            const message = formData.get('messageText');
            
            const subject = encodeURIComponent('Admission Enquiry');
            const body = encodeURIComponent(
                `Admission Enquiry Details:\n\n` +
                `Student Name: ${name}\n` +
                `Phone Number: ${phone}\n` +
                `Email Address: ${email}\n` +
                `Preferred Stream: ${stream}\n\n` +
                `Message / Enquiry:\n${message}`
            );
            
            window.location.href = `mailto:achuth.s@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // 2. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('fullName');
            const phone = formData.get('phoneNumber');
            const email = formData.get('email');
            const userSubject = formData.get('subject');
            const message = formData.get('message');
            
            const subject = encodeURIComponent(`Contact Enquiry: ${userSubject}`);
            const body = encodeURIComponent(
                `General Enquiry Details:\n\n` +
                `Name: ${name}\n` +
                `Phone Number: ${phone}\n` +
                `Email Address: ${email}\n` +
                `Message:\n${message}`
            );
            
            window.location.href = `mailto:achuth.s@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
