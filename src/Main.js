import React, {useState, useEffect} from 'react'
import {CardsList} from './components/CardsList'
import './index.css'
import axios from 'axios'


export function Main() {
    const [cards, setCards] = useState(SAMPLE)

    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=10')
            .then(res=>{
                setCards(res.data.results.map((questionItem,index) => {
                    return {
                        id: `${index} - ${Date.now()}`,
                        question:decodeString(questionItem.question),
                        answer: decodeString(questionItem.correct_answer),
                        options:
                            [...questionItem.incorrect_answers.map(a =>decodeString(a))
                                , questionItem.correct_answer].sort(() => Math.random() - 0.5)
                    }
                }))
            })
    }, [])

    function decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML=str
        return textArea.value
    }



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