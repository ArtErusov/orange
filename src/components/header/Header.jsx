import styles from './styles.module.scss';
import { Fragment, useContext } from 'react';
import { SearchContext } from '../../App'

const Header = () =>  {

  const {searchValue, SetSearchValue} = useContext(SearchContext);

  return<Fragment>
    <div className={styles.first + ' ' + styles.container}>
        <p>Logotype</p>

        <input className={styles.input} 
        value={searchValue}
        onChange={(event) => SetSearchValue(event.target.value)}
        type="text" 
        placeholder='Найдем все...'/>
        {searchValue &&(
          <div onClick={() => SetSearchValue('')} className={styles.clearIcon} ></div>
        )}    

        <p>Filling</p>

    </div>
  </Fragment>

};

export default Header;