import React from "react"
import Header from "./component/Header"
import Feedbackitem from "./component/Feedbackitem"
import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./component/FeedbackList"
import Card from "./component/shared/Card"

function App() {
    const [feedback, setfeedback] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}
export default App