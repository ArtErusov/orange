import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

import CardSorting from './components/CardSorting';
import CardCategory from './components/CardCategory';
import CardItemUI from '../../../../components/UI/cardItemUI/CardItemUI';
import CardSceleton from '../../../../components/UI/cardSceleton/CardSceleton';
import Pagination from './components/Pagination';



const SectionBestSellers = () =>  {


const [isLoadingSceleton, setIsLoadingSceleton] = useState(true) // прогрузка скелетона
const [itemCard, setItemCard] = useState([]) // хранение массива из бэка

useEffect(()=>{
  fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
    setItemCard(json); 
    setIsLoadingSceleton(false);  
  });
}, []);


  return(
  <div className={styles.container + ' ' + styles.margin}>
    
    <div className={styles.display}>
      <CardCategory/>
      <CardSorting/>
    </div>

    <div className={styles.card__grid}> 
      {isLoadingSceleton 
        ? [...new Array(10)].map((_, index)=><CardSceleton key={index}/>)
        : itemCard.map((item) =>
            <CardItemUI 
              key={item.id}
              text={item.text}
              src={item.src}
              label={item.label}
              discount={item.discount}
              price={item.price}
              platforms={item.platforms}  
            />)
      }
    </div>  
      <Pagination/>   
  </div>
  );
};

export default SectionBestSellers;