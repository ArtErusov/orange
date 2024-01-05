import styles from './styles.module.css';
import { Fragment } from 'react';

const Header = () =>  {
  return<Fragment>
    <div className={styles.first + ' ' + styles.container}>
        <p>Logotype</p>
        <p>Filling</p>
    </div>
  </Fragment>

};

export default Header;