import React from 'react'
import {Card} from './Card'

export function CardsList  ({cards})  {
return (
    <div className='card-grid'>
        {cards.map(card => {
            return <Card card={card} key ={card.id}/>
        })}
    </div>
)
}