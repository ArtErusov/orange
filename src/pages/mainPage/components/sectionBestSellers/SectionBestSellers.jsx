import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

import CardSorting from './components/CardSorting';
import CardCategory from './components/CardCategory';
import CardItemUI from '../../../../components/UI/cardItemUI/CardItemUI';
import CardSceleton from '../../../../components/UI/cardSceleton/CardSceleton';
import Pagination from './components/Pagination';



const SectionBestSellers = (props) =>  {
//----------работа с  pagination-----------------------
  const [currentPage, setCurrentPage ] = useState(1)
//----------работа с  Category-----------------------
  const platformsCategory = ['Все платформы', 'PC', 'PS4', 'PS5', 'Xbox', 'Switch']
  const [selectCategory, setsSelectCategory ] = useState(0)

//----------работа с  Sorting-----------------------
  const sortСategories = [
    {name: 'Популярности по возростанию', sort: 'rating'},
    {name: 'Популярности по убыванию', sort: '-rating'},
    {name: 'Цене по убыванию', sort: 'price'},
    {name: 'Цене по возростанию', sort: '-price'}, 
    {name: 'Рейтингу по убыванию', sort: 'title'},
    {name: 'Рейтингу по возростанию', sort: '-title'}
  ];
  const [selectSortCategories, setSelectSortCategories] = useState(0);

//----------работа с  backend-----------------------
const [isLoadingSceleton, setIsLoadingSceleton] = useState(true) // прогрузка скелетона
const [itemCard, setItemCard] = useState([]) // хранение массива из бэка

useEffect(()=>{
  const orderSort = sortСategories[selectSortCategories].sort;
  const orderSortMinus = orderSort.includes('-') ? `asc` : `desc`;
  const orderCategory = selectCategory === 0 ? `` : `&platforms=${platformsCategory[selectCategory]}`;

  setIsLoadingSceleton(true);
  fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/items?page=${currentPage}&limit=5&${orderCategory}&sortBy=${orderSort.replace('-', '')}&order=${orderSortMinus}`)
      .then((res) => res.json())
      .then((json) => {
    setItemCard(json); 
    setIsLoadingSceleton(false); 
    console.log(`https://65523e2c5c69a7790329c0eb.mockapi.io/items?${orderCategory}&sortBy=${orderSort}&`) 
  });
}, [selectCategory, selectSortCategories, currentPage]);

//---------CardItemUI render------------------------------------------
const sceleton = [...new Array(10)].map((_, index)=><CardSceleton key={index}/>);
// поиск работает только с статикой- убрать его
const itemRender = itemCard
.filter((item) => {
    if (item.text.toLowerCase().includes(props.searchValue.toLowerCase())) {
      return true;
    }
    return false;
  })
.map((item) => 
    <CardItemUI 
      key={item.id}
      text={item.text}
      src={item.src}
      label={item.label}
      discount={item.discount}
      price={item.price}
      platforms={item.platforms}   
  />)
//---------------------------------------------------

  return(
  <div className={styles.container + ' ' + styles.margin}>
    
    <div className={styles.display}>
      <CardCategory platformsCategory={platformsCategory} selectCategory={selectCategory} onClickCategory={(index) => setsSelectCategory(index)}/>
      <CardSorting sortСategories={sortСategories} selectSortCategories={selectSortCategories} onClickSort={(index) => setSelectSortCategories(index)}/>
    </div>

    <div className={styles.card__grid}> 
      {isLoadingSceleton ? sceleton : itemRender}
    </div> 

      <Pagination/>   
  </div>
  );
};

export default SectionBestSellers;