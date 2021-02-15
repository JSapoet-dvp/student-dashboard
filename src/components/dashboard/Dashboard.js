import React from 'react';
import DashboardCharts from "./DashboardCharts"
import LineChart from "./LineChart"
import DashboardForm from "./DashboardForm"


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        const studentList = [...new Set(props.ratingData.map(rating => rating.name))];
        this.state = {
            // studentsDisplay: [...new Set(props.ratingData.map(rating => rating.name))],
            studentsDisplay: studentList,
            // studentsDisplay: [],
            showDashboardForm: false,
        }
        this.handleFilterStudent = this.handleFilterStudent.bind(this);
    }

    // componentDidMount() {
    //     const studentList = [...new Set([...this.props.ratingData].map(rating => rating.name))];
    //     this.setState({ studentsDisplay: studentList })
    // }


    handleFilterStudent(event) {
        let adjustedStudentList = [...this.state.studentsDisplay];
        if (adjustedStudentList.includes(event.target.name)) {
            adjustedStudentList = adjustedStudentList.filter(student => student !== event.target.name)
        } else {
            adjustedStudentList.push(event.target.name)
        }
        this.setState({ studentsDisplay: adjustedStudentList })
    }



    getAverage = (ratingData, assignment, ratingType) => {
        let average = 0;
        let ratings = 0;
        ratingData.forEach(rating => {
            if (rating.assignment === assignment) {
                ratingType === "difficulty" ? average += rating.difficulty : average += rating.appreciation
                ratings++;
            }
        })
        return average / ratings
    }

    GetStudentRatingsDisplay = (ratingData, studentsDisplay) => {
        let studentRatingsDisplay = [];
        console.log(studentsDisplay);
        studentsDisplay.forEach(student => {
            ratingData.filter(rating => {
                if (student === rating.name) studentRatingsDisplay.push(rating)
            })
        })
        return studentRatingsDisplay;
    }


    getAverageAssignmentRatings = ratingData => {
        let averageAssignmentRatings = [];
        const studentRatingsDisplay = this.GetStudentRatingsDisplay(ratingData, [...this.state.studentsDisplay])
        console.log(studentRatingsDisplay);
        console.log([...this.state.studentsDisplay]);
        const assignmentList = [...new Set(ratingData.map(rating => rating.assignment))];
        assignmentList.forEach(assignment => {
            const averageDifficulty = this.getAverage(studentRatingsDisplay, assignment, "difficulty");
            const averageAppreciation = this.getAverage(studentRatingsDisplay, assignment, "appreciation");
            // const averageDifficulty = this.getAverage(ratingData, assignment, "difficulty");
            // const averageAppreciation = this.getAverage(ratingData, assignment, "appreciation");
            averageAssignmentRatings.push({
                assignment: assignment,
                difficulty: averageDifficulty,
                appreciation: averageAppreciation
            })
        })
        return averageAssignmentRatings;
    }

    handleFormToggle = () => this.setState({ showDashboardForm: !this.state.showDashboardForm });
    handleHideForm = () => this.setState({ showDashboardForm: false });

    render() {
        const averageAssignmentRatings = this.getAverageAssignmentRatings([...this.props.ratingData])
        const assignmentList = averageAssignmentRatings.map(rating => rating.assignment)
        return (
            <div>
                <h1>Dashboard</h1>
                <DashboardCharts
                    chartRatings={averageAssignmentRatings}
                    data={this.props.data}
                    x="assignment"
                    xList={assignmentList}
                    chartTitle="Overview"
                    GroupOffset={8}
                    domainPadding={10}
                />
                <LineChart
                    chartRatings={averageAssignmentRatings}
                    data={this.props.data}
                    x="assignment"
                    xList={assignmentList}
                />
                <button className="editor-btn" onMouseOver={this.handleFormToggle}>
                    Chart Editor <span className="far fa-arrow-alt-circle-left"> </span>
                </button>
                <DashboardForm
                    handleChange={this.props.handleChange}
                    data={this.props.data}
                    handleFilterStudent={this.handleFilterStudent}
                    handleHideForm={this.handleHideForm}
                    showDashboardForm={this.state.showDashboardForm}
                />
            </div>
        )
    }
}

export default Dashboard;

