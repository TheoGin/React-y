import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import StudentList from "./student/StudentList";
import StudentAdd from "./student/StudentAdd";
import CourseAdd from "./course/CourseAdd";
import CourseList from "./course/CourseList";
import StudentDetail from "./student/StudentDetail";

function Admin() {
  return (
    <Layout
      header={ <Header /> }
      aside={ <Menu /> }
    >
      {/* Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `Layout`, expected a single ReactElement. */}
      <Switch>
        <Route path="/" exact component={ Welcome } />
        <Route path="/students" exact component={ StudentList } />
        <Route path="/students/add" exact component={ StudentAdd } />
        <Route path="/students/detail/:id" exact component={ StudentDetail } />
        <Route path="/courses" exact component={ CourseList } />
        <Route path="/courses/add" exact component={ CourseAdd } />
      </Switch>
    </Layout>
  );
}

export default Admin;