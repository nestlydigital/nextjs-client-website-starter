export function ContactForm() {
  return (
    <form className="contactForm">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@company.com" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="+1 (555) 123-4567" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} placeholder="Tell us about your project." />
      </label>
      <button type="submit" className="buttonPrimary">
        Send Inquiry
      </button>
    </form>
  );
}
