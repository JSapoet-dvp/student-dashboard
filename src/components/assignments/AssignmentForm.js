import React from 'react';
import RatingTypeFilter from '../form/RatingTypeFilter';


const AssignmentForm = (props) => {
    const assignmentSelectOptions = props.data.ratingData.map((rating, index) => (
        <option
            key={rating.ratingId}
            id={index}
            value={rating.assignment}
        > {rating.assignment}
        </option>
    ));
    return (
        <div
            className={`form__container ${props.assignmentForm ? "form__show" : ""}`}
            onMouseLeave={props.handleHideForm}
        >
            <form className="form__content">
                <RatingTypeFilter data={props.data} handleChange={props.handleChange} />
                <div className="select__container">
                    <h3 className="form__header">Assignment</h3>
                    <select name="selectedAssignment" onChange={props.handleSelectAssignment} >
                        {assignmentSelectOptions}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default AssignmentForm;

