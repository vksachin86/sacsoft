import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackForm() {
    const [text,setText] = useState('')

    const handleTextChange = (a) => {
        setText(a.target.value)
    }

  return (
    <Card>
        <h2>how would you rate service with us</h2>
        {/* @todo rating select component */}
        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
            <button type='submit'>send</button>
        </div>
    </Card>
  )
}

FeedbackForm.propTypes = {}

export default FeedbackForm
