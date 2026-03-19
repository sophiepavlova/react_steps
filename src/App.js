import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const arr = useState(1);
  // console.log(arr);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Sophie" });
  function handlePrevious() {
    // setStep(step - 1);
    // setStep(step > 1 ? step - 1 : step)
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // setStep(step + 1);
    // setStep((step) => (step < 3 ? step + 1 : step));
    if (step < 3) setStep(step + 1);
    // setTest({ name: "Michelle" });
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div> */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("Previous!")}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              // onMouseEnter={() => alert("Test")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
