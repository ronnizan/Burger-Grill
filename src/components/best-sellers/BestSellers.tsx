import React, { useEffect, useState } from 'react';
import { sliderData } from './SliderData';        
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { BestSellersSection, BestSellersContainer, BestSellersTitle, SlideInner, BestSellersImageBox, BestSellersImage, BurgerDescriptionContainer, BurgerTitle, BurgerPrice, BurgerDescription, ArrowsContainer, RightArrow, LeftArrow, Slide, ButtonsContainer, OrderButton, AddToCartButton, MenuLink } from './BestSellers-style';

const BestSellers = () => {
  const [current, setCurrent] = useState(0);
  const [stopSlider, setStopSlider] = useState(false);
  const length = sliderData.length;
  useEffect(() => {   
    const timeout = setTimeout(() => {
      nextSlide()
    }, 8000);
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

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <BestSellersSection>  
      <BestSellersTitle>Our Best Sellers:</BestSellersTitle>
      <BestSellersContainer id="best-sellers" className="best-sellers">
        <ArrowsContainer >
          <LeftArrow onClick={prevSlide} />
          <RightArrow onClick={nextSlide} />
        </ArrowsContainer>
        {sliderData.map((slide, index) => {
          return (

            <Slide
              currentSlide={index === current ? true : false}
              key={index}
            >
              {index === current && (
                <SlideInner onMouseOver={() => {
                  setStopSlider(true)
                }}
                  onMouseOut={() => {
                    setStopSlider(false)
                  }}
                >
                  <BestSellersImageBox><BestSellersImage src={slide.image} alt={slide.title} /></BestSellersImageBox>

                  <BurgerDescriptionContainer><BurgerTitle>
                    {slide.title}
                  </BurgerTitle>
                    <br />
                    <BurgerDescription>
                      {slide.description}
                    </BurgerDescription>
                    <br />
                    <BurgerPrice>
                      {slide.price}
                    </BurgerPrice>

                    <ButtonsContainer>
                      <OrderButton>ORDER NOW</OrderButton>
                      <AddToCartButton>ADD TO CART</AddToCartButton>
                    </ButtonsContainer>
                  </BurgerDescriptionContainer>

                </SlideInner>
              )}

            </Slide>

          );
        })}

        <MenuLink to='/menu' className="menu-btn">Explore Our Full Menu</MenuLink>
      </BestSellersContainer>
    </BestSellersSection>
  );
};

export default BestSellers;
