import React from "react";
import PaginationButton from "../../atoms/PaginationButton";
import { ReactComponent as ArrowLeft } from "../../../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRigth } from "../../../assets/ArrowRigth.svg";
import "./style.css";

const Pagination = (props = {}) => {
  const { length, first, rowsPerPage, setFirst, ...otherProps } = props;

  const currentPage = Math.floor(first / rowsPerPage) + 1;
  const pages = Math.ceil(length / rowsPerPage);

  const show = () => {
    const arr = [];
    let last = false;
    for (let i = 0; i < pages; i++) {
      if (i <= 3 || i >= pages - 3 || Math.abs(i - pages) <= 1) {
        last = true;
        arr.push(i + 1);
      } else {
        if (last) {
          arr.push(null);
        }
        last = false;
      }
    }
    return arr;
  };

  const changePageTo = (newPage) => () => setFirst((newPage - 1) * rowsPerPage);

  return (
    <div className="pagination" {...otherProps}>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={changePageTo(currentPage - 1)}
      >
        <ArrowLeft></ArrowLeft> Prev
      </PaginationButton>
      <div>
        {show().map((p) =>
          p ? (
            <PaginationButton
              active={p === currentPage}
              onClick={changePageTo(p)}
            >
              {p}
            </PaginationButton>
          ) : (
            <PaginationButton>...</PaginationButton>
          )
        )}
      </div>
      <PaginationButton
        disabled={currentPage === pages}
        onClick={changePageTo(currentPage + 1)}
      >
        <ArrowRigth></ArrowRigth> Next
      </PaginationButton>
    </div>
  );
};

export default Pagination;
