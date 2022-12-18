import React, { useState } from 'react'
import { sliderInfo } from '../data/sliderInfo'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import '../css/Slider.css'

function Slider() {
const [review, setReview] = useState(0);
const { id, name, quote } = sliderInfo[review];

const previousQuote = () => {
    setReview((review) => {
        review--;
        if (review < 0) {
            return sliderInfo.length -1;
        }
        return review;
    })
}

const nextQuote = () => {
    setReview((review) => {
        review++;
        if (review > sliderInfo.length -1) {
            review = 0;
        }
        return review;
    })
}

  return (
    <main>
        <div className='slider-title'>
            <h1>Coffee quotes for coffee lovers</h1>
        </div>

        <div className='slider'>

            <FaQuoteRight className='quote-icon' />
            <h2 className='quote'>{quote}</h2>
            <p className='author'>{name}</p>

            <button className='prev' onClick={previousQuote}>
            <FiChevronLeft/>
        </button>

        <button className='next' onClick={nextQuote}>
            <FiChevronRight/>
        </button>
        </div>


    </main>
  )
}

export default Slider