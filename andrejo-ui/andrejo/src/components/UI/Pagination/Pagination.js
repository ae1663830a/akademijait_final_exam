import React from 'react';
import './Pagination.css'

const Pagination = (props) => (
    <ul id='pagination' className="pagination">
        <li className={props.currentPage === 1 ? 'disabled' : ''}>
            <a id='paginationFirstPage' onClick={props.first}>Pirmas</a>
        </li>
        <li className={props.currentPage === 1 ? 'disabled' : ''}>
            <a id='paginationPreviousPage' onClick={props.previous}>Ankstesnis</a>
        </li>
        <li>
          <a id='paginationSetPage'> <input id='paginationSetPageInput' min='1' value={props.currentPage} max={props.lastPage} type='number' style={{width: '65px', textAlign: 'center'}} onChange={props.setPage}/></a>
        </li>
        <li className={props.currentPage >= props.lastPage ? 'disabled' : ''}>
            <a id='paginationNextPage' onClick={props.next}>Kitas</a>
        </li>
        <li className={props.currentPage >= props.lastPage ? 'disabled' : ''}>
            <a id='paginationLastPage' onClick={props.last}>Paskutinis</a>
        </li>
    </ul>
);

export default Pagination;
