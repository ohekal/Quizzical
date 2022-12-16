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
        isTrue: false,
      };
    });
    return allAnswers;
  }
  console.log(quizAnswers);

  function holdAnswer(id) {
    if (!props.checked) {
      setQuizAnswers((prev) =>
        prev.map((ans) => {
          const heldAnswer = ans.id === id;
          const trueAnswer = ans.value === props.correctAnswer;
          return heldAnswer && trueAnswer
            ? { ...ans, isHeld: true, isTrue: true }
            : heldAnswer && !trueAnswer
            ? { ...ans, isHeld: true, isTrue: false }
            : { ...ans, isHeld: false, isTrue: false };
        })
      );
    }
  }

  return (
    <div className="quiz" id={props.id}>
      <h2>{props.question}</h2>
      <Answer
        quizAnswers={quizAnswers}
        handleClick={holdAnswer}
        checked={props.checked}
      />
    </div>
  );
}
