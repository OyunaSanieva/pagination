import React from "react";

export default function Pagination({ quantity, totalQuantity, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalQuantity / quantity); i++)
    pageNumbers.push(i);

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li className="page-item" aria-current="page" key={number}>
              <span className="page-link" onClick={() => paginate(number)}>{number}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
