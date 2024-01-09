import styles from './styles.module.scss';
import { useState } from 'react';

const CardSorting = ({sortСategories, selectSortCategories, onClickSort}) =>  {

const [isOpen, setIsOpen] = useState(false);

const handlerClick = (i) => {
  onClickSort(i)
  setIsOpen(false)
};

  return(
    <div className={styles.sort}>
      <p className={styles.sort__p}>Сортировка по:</p>
      <p onClick={()=>setIsOpen(!isOpen)} className={styles.sort__p_active}>{sortСategories[selectSortCategories].name}</p>

      { isOpen && (
            <ul className={styles.sort__drop}>
            {sortСategories.map((item, index) =>
              <li
              key = {index}
              onClick={() => handlerClick(index)}
              className={selectSortCategories === index ? styles.sort__drop_active : ' '}>
                {item.name}
              </li>
            )}
            </ul>
      )} 
    </div>
  );
};

export default CardSorting;
