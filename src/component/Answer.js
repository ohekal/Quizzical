import React from "react";
import { nanoid } from "nanoid";

export default function Answer(props) {
  const styles = {
    backgroundColor: "#D6DBF5",
    border: "none",
  };

  const answerElements = props.quizAnswers.map((ans) => {
    return (
      <div
        key={nanoid()}
        onClick={() => props.handleClick(ans.id)}
        style={ans.isHeld ? styles : {}}
      >
        {ans.value}
      </div>
    );
  });

  return <div className="answer-container">{answerElements}</div>;
}
