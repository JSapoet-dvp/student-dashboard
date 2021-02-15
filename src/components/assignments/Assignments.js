import React from 'react';
import DashboardCharts from '../dashboard/DashboardCharts';
import LineChart from '../dashboard/LineChart';
import AssignmentForm from './AssignmentForm';


class Assignments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAssignment: "SCRUM",
            assignmentForm: false,
        }
        this.handleSelectAssignment = this.handleSelectAssignment.bind(this);
    }

    handleSelectAssignment(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleFormToggle = () => this.setState({ assignmentForm: !this.state.assignmentForm });
    handleHideForm = () => this.setState({ assignmentForm: false });

    render() {
        const selectedAssignmentRatings = [...this.props.data.ratingData].filter(rating => this.state.selectedAssignment === rating.assignment)
        const studentList = selectedAssignmentRatings.map(rating => rating.name)
        return (
            <div>
                <h1>Assignments</h1>
                <DashboardCharts
                    chartRatings={selectedAssignmentRatings}
                    data={this.props.data}
                    x="name"
                    xList={studentList}
                    chartTitle={this.state.selectedAssignment}
                    GroupOffset={34}
                    domainPadding={50}
                />
                <LineChart chartRatings={selectedAssignmentRatings} data={this.props.data} x="name" xList={studentList} />
                <button className="editor-btn" onMouseOver={this.handleFormToggle}>
                    Chart Editor <span className="far fa-arrow-alt-circle-left"> </span>
                </button>
                <AssignmentForm
                    handleChange={this.props.handleChange}
                    data={this.props.data}
                    handleSelectAssignment={this.handleSelectAssignment}
                    handleHideForm={this.handleHideForm}
                    assignmentForm={this.state.assignmentForm}
                />
            </div>
        )
    }
}

export default Assignments

