import React, {useState} from 'react'

export function Card  ({card})  {
    const [flip,setFlip] =useState(false)

return (
    <div
        className={`card ${flip ? `flip` : ``}`}
        onClick={() => setFlip(!flip)}>

        <div className="front">
            {card.question}
            <div className="flashcard-options">
                {card.options.map(option => {
                    return <div className='flashcard-option'>{option}</div>
                })}
            </div>
        </div>
        <div className='back'>{card.answer}</div>
    </div>
)
}