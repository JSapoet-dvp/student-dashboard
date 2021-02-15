import React from 'react';
import StudentDetails from "./StudentDetails";
import TableView from "../table/TableView";
import DashboardCharts from '../dashboard/DashboardCharts';
import StudentsForm from "./StudentsForm";


class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStudent: "Evelyn",
            studentForm: false,
            sortedTableRatings: [],
            isSorted: true
        }
        this.handleSelectStudent = this.handleSelectStudent.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
        const selectedStudentRatings = [...this.props.data.ratingData].filter(rating => this.state.selectedStudent === rating.name)
        this.setState({ sortedTableRatings: selectedStudentRatings })
    }

    handleSelectStudent(event) {
        const { name, value } = event.target
        const selectedStudentRatings = [...this.props.data.ratingData].filter(rating => value === rating.name)
        this.setState({
            [name]: value,
            sortedTableRatings: selectedStudentRatings
        })
    }

    handleSort(sortType) {
        let sortedList = this.state.sortedTableRatings
        this.state.isSorted ? sortedList.sort(sortType) : sortedList.reverse(sortType)
        this.setState({
            sortedTableRatings: sortedList,
            isSorted: !this.state.isSorted
        });
    };

    sortByAssignment = () => {
        this.handleSort((a, b) => a.assignment.localeCompare(b.assignment));
    };

    sortByDifficulty = () => {
        this.handleSort((a, b) => b.difficulty - a.difficulty);
    };

    sortByAppreciation = () => {
        this.handleSort((a, b) => b.appreciation - a.appreciation);
    };


    handleFormToggle = () => this.setState({ studentForm: !this.state.studentForm });
    handleHideForm = () => this.setState({ studentForm: false });

    render() {
        // const allStudents = [...this.props.data.studentData].map(student => <StudentDetails key={student.id} student={student} />)
        const selectedStudentDetails = [...this.props.data.studentData].find(student => this.state.selectedStudent === student.first_name)
        const selectedStudentRatings = [...this.props.data.ratingData].filter(rating => this.state.selectedStudent === rating.name)
        const assignmentList = selectedStudentRatings.map(rating => rating.assignment)
        return (
            <div>
                <h1>Students</h1>
                <DashboardCharts
                    chartRatings={selectedStudentRatings}
                    data={this.props.data}
                    x="assignment"
                    xList={assignmentList}
                    chartTitle={this.state.selectedStudent}
                    GroupOffset={8}
                    domainPadding={10}
                />
                <button className="editor-btn" onMouseOver={this.handleFormToggle}>
                    Chart Editor <span className="far fa-arrow-alt-circle-left"> </span>
                </button>
                <StudentsForm
                    handleChange={this.props.handleChange}
                    data={this.props.data}
                    handleSelectStudent={this.handleSelectStudent}
                    handleHideForm={this.handleHideForm}
                    studentForm={this.state.studentForm}
                />
                <div className="student-grid">
                    <StudentDetails student={selectedStudentDetails} />
                    <TableView
                        sortedTableRatings={this.state.sortedTableRatings}
                        sortByAssignment={this.sortByAssignment}
                        sortByDifficulty={this.sortByDifficulty}
                        sortByAppreciation={this.sortByAppreciation}
                    />
                </div>
            </div>
        )
    }
}

export default Students;
