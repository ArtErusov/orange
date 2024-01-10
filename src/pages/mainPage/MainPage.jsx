import styles from './styles.module.css';
import SectionBestSellers from './components/sectionBestSellers/SectionBestSellers';
import { Fragment } from 'react';

const MainPage = (props) =>  {

  return( <Fragment>
  <SectionBestSellers searchValue={props.searchValue} />
  </Fragment>
  );
};

export default MainPage;