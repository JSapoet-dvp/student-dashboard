import React from 'react';
import profileBackground from "./bg-profile-card.jpg"


const StudentDetails = (props) => {
    return (
        <div className="profile__container">
            <h2>Profile</h2>
            <div className="profile__card">
                <img className="profile__bg" src={profileBackground} alt="avatar" />
                <img className="profile__img" src={props.student.photo} alt="avatar" />
                <h3>{props.student.first_name} {props.student.last_name}</h3>
                <p>{props.student.date_of_birth}<br></br>
                    {props.student.gender}<br></br>
                Front-end developer</p>
                <div className="profile__contact-details">
                    <p>{props.student.email}</p>
                    <p>{props.student.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails;

