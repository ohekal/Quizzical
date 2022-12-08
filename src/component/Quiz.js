import React from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const [quizAnswers, setQuizAnswers] = React.useState(getAnswers());

  function getAnswers() {
    const allAnswers = props.answers.map((ans) => {
      return {
        value: ans,
        id: nanoid(),
        isHeld: false,
      };
    });
    return allAnswers;
  }

  function holdAnswer(id) {
    setQuizAnswers((prev) =>
      prev.map((ans) => {
        return ans.id === id
          ? {
              ...ans,
              isHeld: !ans.isHeld,
            }
          : { ...ans, isHeld: false };
      })
    );
  }

  React.useEffect(() => {
    quizAnswers.forEach((element) => {
      if (element.isHeld && element.value === props.correctAnswer) {
        // props.setCount((prev) => prev + 1);
        console.log("ok");
      }
    });
    console.log("ok");
    // eslint-disable-next-line
  }, [props.checked]);

  return (
    <div className="quiz" id={props.id}>
      <h2>{props.question}</h2>
      <Answer quizAnswers={quizAnswers} handleClick={holdAnswer} />
    </div>
  );
}
