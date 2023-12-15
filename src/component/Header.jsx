import React from 'react'
import PropTypes from 'prop-types'


function Header({ text, bgcolour, textcolor }) {

    const Headerstyle = {
        backgroundColor: bgcolour,
        color: textcolor
    }
    

    return (
        <header style={Headerstyle}>
            <div className='container'>
                <h2 >{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgcolour: "rgb(38 21 135)",
    textcolor: "red"
}
Header.propTypes = {
    text: PropTypes.string,
    bgcolour: PropTypes.string,
    textcolor: PropTypes.string
}

export default Header
