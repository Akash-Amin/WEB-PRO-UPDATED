import React from "react";

const MECH=()=>{
    return<> <h1>hshh</h1>
    <br/>
    <br/><h1> hello MECH</h1>
    <h1>hshh</h1>
    <br/>
    <br/><h1> hello MECHsssssssssssssssssssssssssssssssssssssssS</h1>
    </>;
};

export default MECH;








/*import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid"
import './MECH.css'

export default function MECH() {
	const questionsList = [
		{
			question: 'What is the capital of France?',
			answerList: [
				{ answer: 'New York', isCorrect: false },
				{ answer: 'London', isCorrect: false },
				{ answer: 'Paris', isCorrect: true },
				{ answer: 'Dublin', isCorrect: false },
			],
		},
		{
			 question: 'Who is CEO of Tesla?',
			answerList: [
				{ answer: 'Jeff Bezos', isCorrect: false },
				{ answer: 'Elon Musk', isCorrect: true },
				{ answer: 'Bill Gates', isCorrect: false },
				{ answer: 'Tony Stark', isCorrect: false },
			],
		},
		{
			 question: 'The iPhone was created by which company?',
			answerList: [
				{ answer: 'Apple', isCorrect: true },
				{ answer: 'Intel', isCorrect: false },
				{ answer: 'Amazon', isCorrect: false },
				{ answer: 'Microsoft', isCorrect: false },
			],
		},
		{
			 question: 'How many Harry Potter books are there?',
			answerList: [
				{ answer: '1', isCorrect: false },
				{ answer: '4', isCorrect: false },
				{ answer: '6', isCorrect: false },
				{ answer: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [clicked, setClicked] = useState(false);
	const [score, setScore] = useState(0);
    const [showScore,setShowScore]=useState(false);

	const handleCorrectAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		setClicked(true);
		
	};

    const handleNextQuestion=()=>
    {
        setClicked(false);
        if(currentQuestion<questionsList.length -1)
        {
            setCurrentQuestion(currentQuestion+1);
        }
        else 
        {
        setShowScore(true);
        }
    }

	return (
		<div className='app-wrapper'>
			{showScore ? (
                <div> 
				<div className='completed'>COMPLETED</div>
                <div className="score-section">
					You scored {score} out of {questionsList.length}
				</div>
                </div>
			) : (
                <div>
					<div className='question-section-wrapper'>
						<div className='question-count'>
							Question {currentQuestion + 1}/{questionsList.length}
						</div>
						<div className='question'>{questionsList[currentQuestion].question}</div>
					</div>
					<div className='answer-section-wrapper'>
						{questionsList[currentQuestion].answerList.map((answerOption) => (
							<li className="answer-list" key={uuidv4()}>
                               
                                <button  className={'answer-button ${clicked && answerOption.isCorrect ? "correct" : " "}'}
                                onClick={()=>handleCorrectAnswer(answerOption.isCorrect)} > {answerOption.answer}</button>
                            </li>
                            	))}
					</div>
                    <div>
                        <button className="next-button" onClick={handleNextQuestion}>NEXT</button>
                    </div>
                    </div>
				
			)}
		</div>
	);
}
*/
