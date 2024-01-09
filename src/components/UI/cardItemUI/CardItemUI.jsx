import GrayButton from '../grayButton/GrayButton';
import styles from './styles.module.scss';
import { Fragment } from 'react';


const CardItemUI = (props) =>  {
  //Недоработанная логика рассчета процента
  // const discountCalculation = (item) =>{
  //   if (item === undefined){
  //     return
  //   }else{
     
  //     }
  //     console.log(item.replace('%', ''));
  //   }



  return<Fragment>

  
    <div className={styles.card}>
        {/* {discountCalculation(props.label)} */}
      <a href="" ><img className={styles.card__img} src={props.src}/></a>

      
      <div className={ props.label? styles.card__label : styles.card__label_none}>{props.label}</div>

      <div className={styles.card__plataorm}>
        {props.platforms.map((item, index) =>
        <div key={index} className={styles.card__plataorm_item}>{item}</div>
        )}
      </div>
      

      <div className={styles.card__price}>
        <div className={styles.card__price_main}>{props.price}</div>    
        <div className={props.discount ? styles.card__price_sale : ''}>{props.discount}</div>
      </div>


      {/* <div className={styles.card__rating}>
        <p className={styles.card__rating_star}></p>
        <div className={styles.card__rating_review}></div>
      </div> */}
      
      <p className={styles.card__title}>{props.text}</p>
      <div className={styles.card__btn}>
        <GrayButton title={"Купить"}/>
      </div>
    </div>

  </Fragment>
};

export default CardItemUI;