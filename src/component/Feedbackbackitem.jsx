import React from 'react'
import { useState } from 'react'

function Feedbackbackitem() {

    const [rating, setRating] = useState(0)
    const [text, setText] = useState('this is an example of feedback item')


    return (
        <div className='card'>
            <div className='num-display'>{rating}</div>
            <div className="text-display">{text}</div>
        </div>

    )
}

export default Feedbackbackitem
