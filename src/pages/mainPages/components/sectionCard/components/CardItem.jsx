import GrayButton from '../../../../../components/UI/grayButton/GrayButton';
import styles from './styles.module.scss';
import { Fragment } from 'react';

const CardItem = () =>  {
  return<Fragment>
    <div className={styles.card}>
      <a href="" ><img className={styles.card__img} src='https://img.mvideo.ru/Pdb/small_pic/480/400076052b.jpg'/></a>
      <div className={styles.card__label}>44%</div>
      <div className={styles.card__plataorm}>
        <div className={styles.card__plataorm_item}>PS 5</div>
      </div>

      <div className={styles.card__price}>
        <div className={styles.card__price_main}>2 950 ₽</div>    
        <div className={styles.card__price_sale}>4 950 ₽</div>
      </div>


      <div className={styles.card__rating}>
        <p className={styles.card__rating_star}></p>
        <div className={styles.card__rating_review}></div>
      </div>
      
      <p className={styles.card__title}>Игра для PlayStation 4/5 Ubisoft Assassin's Creed: Вальгалла</p>

      <div className={styles.card__btn}>
        <GrayButton title={"Купить"}/>
      </div>
    </div>

  </Fragment>
};

export default CardItem;