import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Components/navbar.component"
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";
import HomeScreen from "./HOME/Screens/HomeScreen"
import HomeDataInsert from "./HOME/Screens/HomeDataInsert"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/Home" exact component={HomeScreen} />
      <Route path="/HAdd" exact component={HomeDataInsert} />
      </div>
    </Router>
  );
}

export default App;