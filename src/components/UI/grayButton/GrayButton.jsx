import styles from './styles.module.scss';

const GrayButton = (props) =>  {
  return(
    <button className={styles.button}>
      {props.title}
    </button>
  );

};

export default GrayButton;