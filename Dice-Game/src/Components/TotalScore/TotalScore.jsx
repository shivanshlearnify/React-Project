import styles from "./TotalScore.module.css";

const TotalScore = ({score}) => {
  return (
    <div className={styles.container}>
      <h1>{score}</h1>
      <p>Total Score </p>
    </div>
  );
};

export default TotalScore;
