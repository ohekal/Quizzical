/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  response_code: 0,
  results: [
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the capital of Australia?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Brisbane"],
    },
    {
      category: "Politics",
      type: "multiple",
      difficulty: "easy",
      question: "The largest consumer market in 2015 was...",
      correct_answer: "The United States of America",
      incorrect_answers: ["Germany", "Japan", "United Kingdom"],
    },

    {
      category: "Geography",
      type: "boolean",
      difficulty: "easy",
      question: "Ottawa is the capital of Canada.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },

    {
      category: "Mythology",
      type: "multiple",
      difficulty: "easy",
      question:
        "What mytological creatures have women&#039;s faces and vultures&#039; bodies?",
      correct_answer: "Harpies",
      incorrect_answers: ["Mermaids", "Nymph", "Lilith"],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "In the game Enter the Gungeon, which one of these is not a playable character?",
      correct_answer: "The Wizard",
      incorrect_answers: ["The Bullet", "The Robot", "The Cultist"],
    },
  ],
};
