import React from 'react'
import './index.css'
const Option = (props) => {

  const { index, option, selectedAnswer, answerSelected, correctOption } = props;
  const handleClick = (e) => {
    selectedAnswer(index);
  }
  return (
    <>
      <button
        style={{ backgroundColor: 'transparent', marginBottom: '2rem', maxWidth: '40%' }}
        className={`btn btn-option answer ${answerSelected
            ? index === correctOption
              ? "correct"
              : "wrong"
            : ""
          }`}
        key={option}
        disabled={answerSelected}
        onClick={handleClick}
      >
        {option}
      </button>
    </>
  )
}

export default Option