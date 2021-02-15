import React from 'react';
import RatingTypeFilter from '../form/RatingTypeFilter';

const DashboardForm = (props) => {
    return (
        <div
            className={`form__container ${props.showDashboardForm ? "form__show" : ""}`}
            onMouseLeave={props.handleHideForm}
        >
            <form className="form__content">
                <RatingTypeFilter data={props.data} handleChange={props.handleChange} />
                <h3 className="form__header">Students</h3>
                <ul>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Evelyn"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Evelyn</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Aranka"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Aranka</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Floris"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Floris</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Hector"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Hector</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Martina"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Martina</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Maurits"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Maurits</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Rahima"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Rahima</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Sandra"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Sandra</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Wietske"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Wietske</span>
                            </div>
                        </label>
                    </li><br></br>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="Storm"
                                onChange={props.handleFilterStudent}
                            /> <div className="checkbox-textbox">
                                <span className="checkbox-text">Storm</span>
                            </div>
                        </label>
                    </li><br></br>
                </ul>
            </form>
        </div>
    )
}

export default DashboardForm;