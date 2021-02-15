import React from 'react';
import RatingTypeFilter from '../form/RatingTypeFilter';


const StudentsForm = (props) => {
    return (
        <div
            className={`form__container ${props.studentForm ? "form__show" : ""}`}
            onMouseLeave={props.handleHideForm}
        >
            <form className="form__content">
                <RatingTypeFilter data={props.data} handleChange={props.handleChange} />
                <div className="select__container">
                    <h3 className="form__header" >Student</h3><br></br>
                    <select name="selectedStudent" onChange={props.handleSelectStudent} >
                        <option value="Evelyn">Evelyn</option>
                        <option value="Aranka">Aranka</option>
                        <option value="Floris">Floris</option>
                        <option value="Hector">Hector</option>
                        <option value="Martina">Martina</option>
                        <option value="Maurits">Maurits</option>
                        <option value="Rahima">Rahima</option>
                        <option value="Sandra">Sandra</option>
                        <option value="Wietske">Wietske</option>
                        <option value="Storm">Storm</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default StudentsForm;
