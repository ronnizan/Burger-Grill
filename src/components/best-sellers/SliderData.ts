import BurgerClassicImage from '../../images/classic-burger.jpg';
import ImpossibleBurgerImage from '../../images/impossible-burger.jpg';
import ChickenTenderImage from '../../images/chicken-tender.jpg';
import BeefBurgerImage from '../../images/beef-burger.jpg'
import OldSmokyBurgerImage from '../../images/old-smoky.jpg'


export const sliderData = [
  {
    id:'1',
    image: BurgerClassicImage,
    price: 7.99,
    title: 'BurgerGrill Classic',
    description: 'House Beef Patty, Classic Sauce, Pickles, Tomato, Lettuce.',
  },
  {
    id:'2',
    image: ImpossibleBurgerImage,
    price: 11.99,
    title: 'The Impossible Burger',
    description: 'Double Impossible Patty, American Cheese, Pickles, Lettuce, Tomato, Classic Sauce (Vegetarian).',
  },
  {
    id:'3',
    image:
    ChickenTenderImage,
    price: 8.99,
    title: 'Chicken Tenders and Fries',
    description: 'Crispy chicken tenders and fries served with a side of truffle ketchup.',
  },
  {
    id:'4',
    image:
    BeefBurgerImage,
    price: 15.30,
    title: 'Beef & Cheese',
    description: 'grass-fed beef patty (170g), pickles, aged cheddar, mustard, tomato jam, mayo.',
  },
  {
    id:'5',
    image:
    OldSmokyBurgerImage,
    price: 18.00,
    title: 'OLD SMOKEY',
    description: 'ass-fed beef patty (170g), bacon, caramelised onions, smoked aged cheddar, BBQ sauce, mayo.',
  },
];
