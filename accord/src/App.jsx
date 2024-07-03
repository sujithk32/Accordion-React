import Accordion from "./accordion";

const datas = [
  {
    question: "What is React and why is it used?",
    answer:
      "React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
  },
  {
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application's UI. They are reusable, self-contained pieces of code that represent parts of the user interface.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML. JSX is used in React to describe what the UI should look like.",
  },
  {
    question: "What is state in React?",
    answer:
      "State is a built-in object that stores property values that belong to a component. State is mutable and can change over time, usually in response to user actions.",
  },
];

function App() {
  return (
    <div>
      {datas.map((data, index) => (
        <Accordion key={index} question={data.question} answer={data.answer} />
      ))}
    </div>
  );
}

export default App;
