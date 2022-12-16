import React, { useEffect } from "react";
import "../App.css";
import Start from "./Start";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";

function App() {
  const [Quizzical, setQuizzical] = React.useState([]);
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [checked, setCheck] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function getQuiz() {
    setStartQuiz(true);
  }

  React.useEffect(() => {
    async function getData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await res.json();
      setQuizzical(data.results);
    }
    getData();
  }, []);

  console.log("app");
  const quizzicalElement = Quizzical.map((quiz) => {
    return (
      <Quiz
        key={nanoid()}
        question={quiz.question}
        answers={[...quiz.incorrect_answers, quiz.correct_answer].sort()}
        correctAnswer={quiz.correct_answer}
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
          {checked && <p>You scored {count} /5 correct answers</p>}
          <button onClick={checkAnswers}>
            {!checked ? " Check answers" : "playagain"}
          </button>
        </section>
      ) : (
        <Start handleClick={getQuiz} />
      )}
    </main>
  );
}

export default App;
