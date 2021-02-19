import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuHero, MenuSectionWrapper, MenuSection, MenuTitle, MenuSubTitle, MenuItemCard, MenuItemImageBox, MenuItemImage, DescriptionContainer, MenuItemTitle, MenuItemPrice, MenuItemDescription, CategoriesContainer, Category, MenuItemsContainer, ButtonsContainer, AddToCartButton, RightArrow, VIcon, SummaryLink } from './Menu-style';
import { addItemToCart } from '../../redux/actions/cartActions';
import { RootState } from '../../redux';
import { MenuItem } from '../../redux/types/productsType';
import { getAllProducts, getBestSellersProducts, selectItemForPopup } from './../../redux/actions/productsActions';
import Loader from '../loader/Loader';

const Menu = () => {
  const dispatch = useDispatch();
  const { menuItems, loading, error }: { menuItems: MenuItem[], loading: boolean, error: string } = useSelector((state: RootState) => state.allProducts);
  const [currentCategory, setCurrentCategory] = useState('meals');
  const [showVIcon, setShowVIcon] = useState({ index: null, showVIcon: false });

  return (
    <>
      <MenuHero>
        <MenuTitle>Menu</MenuTitle>
        <MenuSubTitle>Our Delicious Menu</MenuSubTitle>
      </MenuHero>
      <MenuSectionWrapper>
        <MenuSection>
          <CategoriesContainer>
            <Category onClick={() => {
              setCurrentCategory("meals")
              setShowVIcon({ index: null, showVIcon: false })

            }} currentCategory={currentCategory === "meals"}>Meals</Category>
            <Category onClick={() => {
              setCurrentCategory("burgers")
              setShowVIcon({ index: null, showVIcon: false })

            }} currentCategory={currentCategory === "burgers"}>Burgers</Category>
            <Category onClick={() => {
              setCurrentCategory("sideDishes")
              setShowVIcon({ index: null, showVIcon: false })

            }} currentCategory={currentCategory === "sideDishes"}>Side Dishes</Category>
            <Category onClick={() => {
              setCurrentCategory("drinks")
              setShowVIcon({ index: null, showVIcon: false })

            }} currentCategory={currentCategory === "drinks"}>Drinks</Category>
            <Category onClick={() => {
              setCurrentCategory("desserts")
              setShowVIcon({ index: null, showVIcon: false })

            }} currentCategory={currentCategory === "desserts"}>Desserts</Category>
          </CategoriesContainer>
          <MenuItemsContainer>
            {loading && <Loader />}
            {menuItems && menuItems.map((menuItem, index) => {
              if (menuItem.type === currentCategory) {
                return <MenuItemCard key={menuItem.id}>
                  <MenuItemImageBox><MenuItemImage src={menuItem.image} alt={menuItem.title} /></MenuItemImageBox>

                  <DescriptionContainer><MenuItemTitle>
                    {menuItem.title}
                  </MenuItemTitle>
                    <br />
                    <MenuItemDescription>
                      {menuItem.description}
                    </MenuItemDescription>
                    <br />
                    <ButtonsContainer>
                      <AddToCartButton onClick={() => {
                        if (menuItem.type === 'meals' || menuItem.type === 'burgers') {
                          dispatch(selectItemForPopup(menuItem));
                        } else {
                          dispatch(addItemToCart(menuItem));
                          setShowVIcon({ index: index, showVIcon: true })
                        }
                      }}></AddToCartButton>
                      {showVIcon.showVIcon && showVIcon.index === index && <VIcon></VIcon>}
                      <MenuItemPrice>
                        ${menuItem.price}
                      </MenuItemPrice>
                    </ButtonsContainer>
                  </DescriptionContainer>
                </MenuItemCard>
              }
              return null

            })}
          </MenuItemsContainer>
          <SummaryLink to="/cart">Cart Summary <RightArrow></RightArrow></SummaryLink>

        </MenuSection>
      </MenuSectionWrapper>
    </>
  );
};

export default Menu;
