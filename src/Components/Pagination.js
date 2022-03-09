import React from "react";

const Pagination = (props) => 
{
    const {page, totalPages, onLeftClick, onRightClick} = props;
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}>&#x25C0;</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>&#x25B6;</button>
        </div>
    )
}

export default Pagination;