import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            icon={<MdMessage fontSize={"24px"} />}
            name={"VIA SUPPORT CHAT"}
          />
          <Button
            icon={<IoCallOutline fontSize={"24px"} />}
            name={"VIA CALL"}
          />
        </div>
        <div>
          <Button
            isOutLine={true}
            icon={<IoIosMail fontSize={"24px"} />}
            name={"VIA EMAIL FORM"}
          />
          <form action="">
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows={8} id="text" />
            </div>
            <div style={{display: 'flex', justifyContent: 'end', marginTop: '17px'}}>
              <Button name={"SUBMIT"} />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.contactImg}>
        <img src="/Images/contact.svg" alt="contact img" />
      </div>
    </section>
  );
};

export default ContactForm;
