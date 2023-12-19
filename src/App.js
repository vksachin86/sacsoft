import React from "react"
import Header from "./component/Header"
import Feedbackitem from "./component/Feedbackitem"
import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./component/FeedbackList"
import Card from "./component/shared/Card"
import FeedbackStats from "./component/FeedbackStats"

function App() {
    const [feedback, setfeedback] = useState(FeedbackData)
    const deletefeedback = (id) => {
        if (window.confirm('Are you sure, you want to delete?'))
            setfeedback(feedback.filter((item) => item.id !== id))
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deletefeedback} />
            </div>
        </>
    )
}
export default App