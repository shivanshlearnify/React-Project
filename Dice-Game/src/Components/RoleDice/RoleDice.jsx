import { useState } from "react";
import styles from "./RoleDice.module.css";

const RoleDice = ({ rolseDice, currentDice }) => {
 
  return (
    <div className={styles.role}>
      <div onClick={rolseDice} className={styles.dice}>
        <img src={`/Images/Dice/dice_${currentDice}.png`} alt="dice img" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
