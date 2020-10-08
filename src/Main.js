import React, {useState} from 'react'
import {CardsList} from './components/CardsList'
import './index.css'


export function Main() {
    const [cards, setCards] = useState(SAMPLE)
    return (
        <CardsList cards={cards}/>
    )
}

const SAMPLE = [
    {
        id: 1,
        question: 'What is 3 + 2 ?',
        answer: '4',
        options: [
            '2',
            '3',
            '4',
            '5'
        ]
    },
    {
        id: 2,
        question: 'Question 2 ?',
        answer: 'Answer',
        options: [
            'Answer 1',
            'Answer 2',
            'Answer 3',
        ]
    },
]