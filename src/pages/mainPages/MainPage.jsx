import styles from './styles.module.css';
import SectionBestSellers from './components/sectionBestSellers/SectionBestSellers';
import { Fragment } from 'react';

const MainPage = (props) =>  {

  return( <Fragment>
  <SectionBestSellers itemCard = {props.itemCard}/>
  </Fragment>
  );
};

export default MainPage;