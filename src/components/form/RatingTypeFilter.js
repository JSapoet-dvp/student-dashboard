import React from 'react';

const RatingTypeFilter = props => {
    return (
        <div className="filterType__container">
            <h3 className="form__header">Rating</h3>
            <ul>
                <li>
                    <label>
                        <input
                            type="checkbox"
                            name="difficultyDisplay"
                            checked={props.data.difficultyDisplay}
                            onChange={props.handleChange}
                        /> <div className="checkbox-textbox rating difficulty">
                            <span className="checkbox-text rating">Difficulty</span>
                        </div>
                    </label>
                </li><br></br>
                <li>
                    <label>
                        <input
                            className="toggle-box appreciation-toggle"
                            type="checkbox"
                            name="appreciationDisplay"
                            checked={props.data.appreciationDisplay}
                            onChange={props.handleChange}
                        /> <div className="checkbox-textbox rating appreciation">
                            <span className="checkbox-text rating">Appreciation</span>
                        </div>
                    </label>
                </li><br></br>
            </ul>
        </div>
    )
}


export default RatingTypeFilter;

