import React, {useState, useRef, useEffect} from 'react'

export function Card  ({card})  {
    const [flip,setFlip] =useState(false)
    const [height,setHeight] =useState('initial')

    const frontEl=useRef()
    const backEl=useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight,backHeight, 100))
    }

    useEffect(setMaxHeight,
    [card.question, card.answer, card.options])

    useEffect(() => {
        window.addEventListener('resize',setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    },[])


return (
    <div
        className={`card ${flip ? `flip` : ``}`}
        style={{height: height}}
        onClick={() => setFlip(!flip)}>

        <div className="front" ref={frontEl}>
            {card.question}
            <div className="flashcard-options">
                {card.options.map(option => {
                    return <div className='flashcard-option'>{option}</div>
                })}
            </div>
        </div>
        <div className='back' ref={backEl}>{card.answer}</div>
    </div>
)
}