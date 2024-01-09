import styles from './styles.module.scss';

import CardSorting from './components/CardSorting';
import CardCategory from './components/CardCategory';
import CardItemUI from '../../../../components/UI/cardItemUI/CardItemUI';
import CardSceleton from '../../../../components/UI/cardSceleton/CardSceleton';
import Pagination from './components/Pagination';

const SectionBestSellers = (props) =>  {
  return(
  <div className={styles.container + ' ' + styles.margin}>
    
    <div className={styles.display}>
      <CardCategory/>
      <CardSorting/>
    </div>

    <div className={styles.card__grid}> 
    {props.isLoadingSceleton 
    ? [...new Array(10)].map((_, index)=><CardSceleton key={index}/>)
    : props.itemCard.map((item) =>
        <CardItemUI 
          key={item.id}
          text={item.text}
          src={item.src}
          label={item.label}
          discount={item.discount}
          price={item.price}
          platforms={item.platforms}  />)
    }
  
    </div>  

      <Pagination/>
    
  </div>
  );
};

export default SectionBestSellers;