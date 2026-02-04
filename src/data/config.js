// Contact Information
export const contactInfo = {
    email: "team.ouba@gmail.com",
    phone: "+216 XX XXX XXX", // Update with actual phone if available
    address: "Tunis, Tunisia",
    social: {
        instagram: "https://www.instagram.com/interact_club_tunis_amilcar/",
        facebook: "", // Add if available
        linkedin: ""  // Add if available
    }
};

// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Add an email service (Gmail recommended)
// 4. Create an email template
// 5. Copy your credentials below
export const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};
