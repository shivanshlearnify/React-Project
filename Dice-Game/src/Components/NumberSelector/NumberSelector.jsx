import { useState } from "react";
import styled from "styled-components";
import styles from "./NumberSelector.module.css";

const NumberSelector = ({setError ,err, selectedNum, setSelectedNum}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const handleNumberSelector = (value)=>{
    setSelectedNum(value);
    setError("");
  }
  return (
    <div>
      <p className={styles.Select} style={{color:"red"}}>{err}</p>
      <div className={styles.numberSelectorContainer}>
        {arrNum.map((value, i) => (
          <Box
            className={styles.box}
            isselected={value === selectedNum}
            key={i}
            onClick={() => handleNumberSelector(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className={styles.Select}>Select Number </p>
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
