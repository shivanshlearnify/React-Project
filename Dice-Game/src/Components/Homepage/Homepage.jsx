import ButtonKey from "../ButtonKey/ButtonKey";
import styles from "./Homepage.module.css";

const Homepage = ({toggle}) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/Images/dices1.png" alt="Dice_Image" />
      </div>

      <div className={styles.content}>
        <h1>DICE GAME</h1>
        <ButtonKey toggle={toggle} name={"Play Now"} />
      </div>
    </div>
  );
};

export default Homepage;
