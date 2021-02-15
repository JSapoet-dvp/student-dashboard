import React from "react";
// import "./css/App.css";
import "./css/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Assignments from "./components/assignments/Assignments"
import Dashboard from "./components/dashboard/Dashboard"
import Students from "./components/students/Students"
import studentData from "./data/studentData"
import ratingData from "./data/ratingData"
import Logo from "./img/logo-winc-academy-da.png"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ratingData: [],
      studentData: [],
      difficultyDisplay: true,
      appreciationDisplay: true,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ ratingData: ratingData })
    this.setState({ studentData: studentData })
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <nav>
              <Link to="/"><img className="header__logo" src={Logo} alt="logo" /></Link>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/students">Students</Link></li>
                <li><Link to="/assignments">Assignments</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/"><Dashboard data={this.state} handleChange={this.handleChange} /></Route>
              <Route path="/students"><Students data={this.state} handleChange={this.handleChange} /></Route>
              <Route path="/assignments"><Assignments data={this.state} handleChange={this.handleChange} /></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

