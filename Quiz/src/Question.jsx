import React from "react";
import Option from "./Option";
import { useState } from "react";

const Question = (props) => {
    const { index, question } = props;
    const [answer, setAnswer] = useState();
    const selectedAnswer = (idx) => {
        console.log(idx)
        if (question.correctOption == idx) setAnswer(idx);
    };
    return (
        <div>
            <h4>
                {index + 1}.{question.question}
            </h4>
            {question.options.map((option, index) => (
                <Option
                    key={index}
                    option={option}
                    index={index}
                    correctOption={question.correctOption}
                    selectedAnswer={selectedAnswer}
                    answerSelected={answer}
                />
            ))}
        </div>
    );
};

export default Question;
