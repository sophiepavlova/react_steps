import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>😋</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children props</p>
        <p>🏋️‍♀️</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  // const arr = useState(1);
  // console.log(arr);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Sophie" });
  function handlePrevious() {
    // setStep(step - 1);
    // setStep(step > 1 ? step - 1 : step)
    if (step > 1) setStep(() => step - 1);
  }
  function handleNext() {
    // setStep(step + 1);
    // setStep((step) => (step < 3 ? step + 1 : step));
    if (step < 3) setStep(() => step + 1);
    // setTest({ name: "Michelle" });
  }
  return (
    <div>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div> */}
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className='buttons space-up'>
              <Button
                bgColor='pink'
                textColor='black'
                onClick={() => alert(`Just ${messages[step - 1]}!`)}
              >
                Learn how to {messages[step - 1]}
              </Button>
            </div>
          </StepMessage>

          <div className='buttons'>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next<span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}:</h3> {children}
      {/* {test.name} */}
    </div>
  );
}
