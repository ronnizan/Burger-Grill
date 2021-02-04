import React, { useEffect, useState } from 'react';
import { reviewsData } from './ReviewsData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ReviewsSection, ReviewsContainer, ReviewsTitle, ReviewerImage, ReviewerNameAndLocation, ReviewDescription, DotsContainer, Dot, Slide, } from './Reviews-style';

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const [stopSlider, setStopSlider] = useState(false);
  const length = reviewsData.length;
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide()
    }, 7000);
    return () => {
      clearTimeout(timeout);
    }
  })

  const nextSlide = () => {
    if (stopSlider) {
      return
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(reviewsData) || reviewsData.length <= 0) {
    return null;
  }

  return (  
    <ReviewsSection>
      <ReviewsContainer id="best-sellers" className="best-sellers">
        <ReviewsTitle>‟</ReviewsTitle>

        {reviewsData.map((review, index) => {
          return (

            <Slide
              currentSlide={index === current ? true : false}
              key={index}
              onMouseOver={() => {
                setStopSlider(true)
              }}
              onMouseOut={() => {
                setStopSlider(false)
              }}
            >
              {index === current && (
                <>
                  <ReviewDescription>
                    {review.content}
                  </ReviewDescription>
                  <br/>
                  <ReviewerNameAndLocation>
                    {review.name}, {review.location}
                  </ReviewerNameAndLocation>
                  <br/>
                  <ReviewerImage src={review.image}></ReviewerImage>
                </>)}

            </Slide>

          );
        })} 
           
        <DotsContainer >
          <Dot current={current === 0? +true: 0} onClick={()=>setCurrent(0)} />
          <Dot current={current === 1 ? +true: 0} onClick={()=>setCurrent(1)} />
          <Dot current={current === 2 ? +true: 0} onClick={()=>setCurrent(2)} />  
        </DotsContainer>
      </ReviewsContainer> 
    </ReviewsSection>
  );
};

export default Reviews;
