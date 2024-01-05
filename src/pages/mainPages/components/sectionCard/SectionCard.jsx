import styles from './styles.module.css';

import CardSelect from './components/CardSelect';
import CardCategory from './components/CardCategory';
import CardItem from './components/CardItem';
import Pagination from './components/Pagination';

const SectionCard = () =>  {
  return(
  <div className={styles.container}>
    <div className={styles.display}>
      <CardSelect/>
      <CardCategory/>
    </div>
    <CardItem/>
    <Pagination/>
  </div>
  );
};

export default SectionCard;