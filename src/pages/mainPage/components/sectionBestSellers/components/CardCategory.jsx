import styles from './styles.module.scss';

const CardCategory = ({ onClickCategory, selectCategory, platformsCategory}) =>  {

  return(
      <ul className={styles.select}>
      {platformsCategory.map((item, index) =>
        <li onClick={() => onClickCategory(index)}  key={index} 
          className={selectCategory === index ? (styles.select__item + ' ' + styles.select__active) : styles.select__item}>
          {item}
        </li>
      )
      }
      </ul>
  );
};

export default CardCategory;