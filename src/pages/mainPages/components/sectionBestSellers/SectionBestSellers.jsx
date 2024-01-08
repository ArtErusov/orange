import styles from './styles.module.scss';

import CardSorting from './components/CardSorting';
import CardCategory from './components/CardCategory';
import CardItem from './components/CardItem';
import Pagination from './components/Pagination';

const SectionBestSellers = () =>  {
  return(
  <div className={styles.container + ' ' + styles.margin}>
    <div className={styles.display}>
      <CardCategory/>
      <CardSorting/>
    </div>
    <CardItem/>
    <Pagination/>
  </div>
  );
};

export default SectionBestSellers;