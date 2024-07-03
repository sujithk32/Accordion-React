import { useState } from "react";

function Accordion({ question, answer }) {
  const [click, setClick] = useState(false);
  function clicker() {
    console.log(answer);
    setClick(!click);
  }
  return (
    <div onClick={clicker} className={click ? "noncontainer" : "container"}>
      <div className="ques">
        <div className="question">{question}</div>
        <div className="plus">{click ? "-" : "+"}</div>
      </div>
      {click && <div className="answer">{answer}</div>}
    </div>
  );
}
export default Accordion;
