import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { PaginateConfig } from '../../../const';

import './paginate.scss';

interface Props {
  pageCount: number,
  onPageClick: (page: number) => void,
}

const Paginate: React.FC<Props> = ({ pageCount, onPageClick }) => {
  type OnPageChangeCallback = ReactPaginateProps['onPageChange'];

  const handlePageClick: OnPageChangeCallback = (selectedItem) => {
    onPageClick(selectedItem.selected);
  };

  return (
    <div className="paginate__wrapper">
      <ReactPaginate
        previousLabel={PaginateConfig.PREVIOUS_LABEL}
        nextLabel={PaginateConfig.NEXT_LABEL}
        breakLabel={PaginateConfig.BREAK_LABEL}
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={PaginateConfig.MARGIN_PAGES}
        pageRangeDisplayed={PaginateConfig.PAGE_RANGE}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Paginate;
