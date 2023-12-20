import React from 'react'
import { useState } from 'react'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(3)
    const handleChange = (e) => {
      setSelected(+ e.target.value)
      select(+ e.target.value)
    }
  return (
    <ul className='rating'>
        <li>
            <input 
            type="radio" 
            id='num1'
            name='rating'
            value='1'
            onChange={handleChange}
            checked={selected === 1}
             />
             <label htmlFor="num1">1</label>
        </li>
        <li>
            <input 
            type="radio" 
            id='num2'
            name='rating'
            value='2'
            onChange={handleChange}
            checked={selected === 2}
             />
             <label htmlFor="num2">2</label>
        </li>
        <li>
            <input 
            type="radio" 
            id='num3'
            name='rating'
            value='3'
            onChange={handleChange}
            checked={selected === 3}
             />
             <label htmlFor="num3">3</label>
        </li>
        
    </ul>
    
  )
}

export default RatingSelect