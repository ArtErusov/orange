import styles from './styles.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = () =>  {
  return(
     <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      );
  };

export default Pagination;


