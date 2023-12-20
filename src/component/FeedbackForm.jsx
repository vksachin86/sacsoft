import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState('true')
    const [message, setMessage] = useState('')

    const handleTextChange = (a) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be atleast 10 character')
            setBtnDisabled(true)

        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(a.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newfeedback = {
                text,
                rating
            }

            handleAdd(newfeedback)
            setText('')
        }
    }



    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>how would you rate service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
