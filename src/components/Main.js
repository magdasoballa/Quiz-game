import React from 'react';
import {Card} from './Card'


export const Main = () => {
    return (
        <>
            <h1 className='title'>Truth or false ?</h1>
            <div className='buttons'>
                <div>
                <label htmlFor="category">Choose category:</label>
                <select id="category">
                    <option value="entertainment">Entertainment</option>
                    <option value="history">History</option>
                    <option value="geography">Geography</option>
                    <option value="sports">Sports</option>
                    <option value="general">General</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="science">Science</option>
                    <option value="politics">Politics</option>
                </select>
                </div>
                <div>
                <label htmlFor="difficulty">Choose difficulty:</label>
                <select id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                </div>

            </div>
            <Card/>
            <button className='next'>Next question</button>
        </>
    )
}