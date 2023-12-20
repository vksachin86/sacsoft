import React from "react"
import {v4 as uuidv4} from 'uuid'
import Header from "./component/Header"
import Feedbackitem from "./component/Feedbackitem"
import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./component/FeedbackList"
import Card from "./component/shared/Card"
import FeedbackStats from "./component/FeedbackStats"
import FeedbackForm from "./component/FeedbackForm"

function App() {
    const [feedback, setfeedback] = useState(FeedbackData)
    const addFeedback=(newFeedBack) => {
        newFeedBack.id = uuidv4()
        setfeedback([newFeedBack,...feedback])
        console.log(newFeedBack)
    }
    const deletefeedback = (id) => {
        if (window.confirm('Are you sure, you want to delete?'))
            setfeedback(feedback.filter((item) => item.id !== id))
    }

    return (
    <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deletefeedback} />
            </div>
            </>  
    )
}
export default App