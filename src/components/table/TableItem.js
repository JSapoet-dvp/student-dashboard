import React from 'react';

const TableItem = (props) => {
    return (
        <tr key={props.rating.ratingId} className="table__item">
            <td className="cel">{props.rating.name}</td>
            <td className="cel">{props.rating.assignment} </td>
            <td className="cel rating">{props.rating.difficulty} </td>
            <td className="cel rating"> {props.rating.appreciation}</td>
        </tr>
    )
}

export default TableItem;