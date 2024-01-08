import styles from './styles.module.scss';
import { Fragment, useState } from 'react';

const CardSorting = () =>  {

  const sortiСategories = ['Популярности', 'Цене', 'Рейтингу'];
  const [selectSortCategories, setSelectSortCategories] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return<Fragment>
    <div className={styles.sort}>
      <p className={styles.sort__p}>Сортировка по:</p>
      <p onClick={()=>setIsOpen(!isOpen)} className={styles.sort__p_active}>{sortiСategories[selectSortCategories]}</p>

      { isOpen && (
            <ul className={styles.sort__drop}>
            {sortiСategories.map((item, index) =>
              <li
              key = {index}
              onClick={() => setSelectSortCategories(index)}
              className={sortiСategories === index ? sort__active : ''}>
                {item}
              </li>
            )}
            </ul>
      )}

      
     
     
    </div>
  </Fragment>
};

export default CardSorting;