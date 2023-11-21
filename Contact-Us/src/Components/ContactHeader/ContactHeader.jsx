import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>
        CONNECT WITH US: We're eager to assist and genuinely interested in
        hearing from you! Whether you have inquiries, comments, or simply want
        to engage in conversation, feel free to reach out via the contact form
        on this page. Alternatively, connect with us through phone, email, or on
        our social media platforms. Your thoughts matter to us, and we're here
        to make the interaction seamless and enjoyable. Don't hesitate to get in
        touch – we're ready to respond and make your experience with us as
        positive as possible.{" "}
      </p>
    </div>
  );
};

export default ContactHeader;
