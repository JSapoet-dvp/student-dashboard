import React from 'react';
import TableItem from "./TableItem";

const TableView = (props) => {
    const allRatings = props.sortedTableRatings.map(rating => <TableItem key={rating.ratingId} rating={rating} />)
    return (
        <div className="table__container">
            <h2>Table</h2>
            <table>
                <thead>
                    <tr className="table__headers">
                        <th className="table__headers__cel left">Name</th>
                        <th className="table__headers__cel left"><a onClick={props.sortByAssignment}>Assignment <span className="fas fa-sort"> </span></a></th>
                        <th className="table__headers__cel" ><a onClick={props.sortByDifficulty}>Difficulty <span className="fas fa-sort"> </span></a></th>
                        <th className="table__headers__cel"><a onClick={props.sortByAppreciation}>Appreciation <span className="fas fa-sort"> </span></a></th>
                    </tr>
                </thead>
                <tbody>{allRatings}</tbody>
            </table>
        </div>
    )
}

export default TableView;

