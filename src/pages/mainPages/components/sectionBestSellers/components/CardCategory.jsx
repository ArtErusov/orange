import styles from './styles.module.scss';
import { useState } from 'react';

const CardCategory = () =>  {

  const [selectCategory, setsSelectCategory ] = useState(0)

  const bestSellersCategory = ['Все платформы', 'PC', 'PS 4', 'PS 5', 'Xbox', 'Switch']

  return(
      <ul className={styles.select}>
      {bestSellersCategory.map((item, index) =>
        <li onClick={() => setsSelectCategory(index)}  key={index} 
          className={ selectCategory === index ? (styles.select__item + ' ' + styles.select__active) : styles.select__item}>
          {item}
        </li>
      )
      }
      </ul>
  );
};

export default CardCategory;