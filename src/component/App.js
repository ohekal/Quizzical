import React from "react";
import "../App.css";
import Start from "./Start";
import Quiz from "./Quiz";
import Data from "./Data";
import { nanoid } from "nanoid";

function App() {
  const [Quizzical, setQuizzical] = React.useState(Data.results);
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [checked, setCheck] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function getQuiz() {
    setStartQuiz(true);
  }

  const quizzicalElement = Quizzical.map((quiz) => {
    return (
      <Quiz
        key={nanoid()}
        question={quiz.question}
        answers={[...quiz.incorrect_answers, quiz.correct_answer].sort()}
        Quizzical={Quizzical}
        checkAnswers={checkAnswers}
        count={count}
        checked={checked}
        setCount={setCount}
      />
    );
  });

  function checkAnswers() {
    setCheck((prev) => !prev);
  }

  return (
    <main className="App">
      <img className="bob1" src={require("../bob1.png")} alt="" />
      <img className="bob2" src={require("../bob2.png")} alt="" />
      {startQuiz ? (
        <section>
          {quizzicalElement}
          <button onClick={checkAnswers}>
            {!checked ? " Check answers" : "playagain"}
          </button>
          {checked && <p>You scored {count} /5 correct answers</p>}
        </section>
      ) : (
        <Start handleClick={getQuiz} />
      )}
    </main>
  );
}

export default App;
