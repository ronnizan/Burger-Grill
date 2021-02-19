import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BestSellersSection, BestSellersContainer, BestSellersTitle, SlideInner, BestSellersImageBox, BestSellersImage, BurgerDescriptionContainer, BurgerTitle, BurgerPrice, BurgerDescription, ArrowsContainer, RightArrow, LeftArrow, Slide, ButtonsContainer, OrderButton, AddToCartButton, VIcon, MenuLink } from './BestSellers-style';
import { addItemToCart } from '../../redux/actions/cartActions';
import { RootState } from '../../redux';
import { MenuItem } from '../../redux/types/productsType';
import { getBestSellersProducts, selectItemForPopup } from './../../redux/actions/productsActions';
import Loader from '../loader/Loader';

const BestSellers = () => {
  const dispatch = useDispatch();
  const { menuItems, loading, error }: { menuItems: MenuItem[], loading: boolean, error: string } = useSelector((state: RootState) => state.bestSellers);

  const [current, setCurrent] = useState(0);
  const [showVIcon, setShowVIcon] = useState(false);
  const [stopSlider, setStopSlider] = useState(false);
  const length = menuItems.length;
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide()
      setShowVIcon(false)
    }, 8000);
    return () => {
      clearTimeout(timeout);
    }
  })

  useEffect(() => {
    dispatch(getBestSellersProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextSlide = () => {
    if (stopSlider) {
      return
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    setShowVIcon(false)

  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setShowVIcon(false)

  };

  return (
    <BestSellersSection>
      <BestSellersTitle>Our Best Sellers:</BestSellersTitle>
      <BestSellersContainer id="best-sellers" className="best-sellers">
        <ArrowsContainer >
          <LeftArrow onClick={prevSlide} />
          <RightArrow onClick={nextSlide} />
        </ArrowsContainer>
        {loading && <Loader />}
        {menuItems && menuItems.map((menuItem, index) => {
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
                  <BestSellersImageBox><BestSellersImage src={menuItem.image} alt={menuItem.title} /></BestSellersImageBox>

                  <BurgerDescriptionContainer><BurgerTitle>
                    {menuItem.title}
                  </BurgerTitle>
                    <br />
                    <BurgerDescription>
                      {menuItem.description}
                    </BurgerDescription>
                    <br />
                    <BurgerPrice>
                      ${menuItem.price}
                    </BurgerPrice>

                    <ButtonsContainer>
                      <OrderButton onClick={() => {
                        if (menuItem.type === 'meals' || menuItem.type === 'burgers') {
                          dispatch(selectItemForPopup(menuItem));
                        } else {
                          dispatch(addItemToCart(menuItem));
                          setShowVIcon(true)
                        }
                      }}>ADD TO CART</OrderButton>
                      {showVIcon && <VIcon></VIcon>}
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
