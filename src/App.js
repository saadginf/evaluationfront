import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import Add from "./Screens/Add";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Screens/Search";
import Calendar from "./Screens/Calendar";
import Setting from "./Screens/Setting";
import Login from "./Screens/Login";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/settings" exact component={Setting} />
          <Route path="/add" exact component={Add} />
          {/* <Route path="/login" exact component={Login} /> */}
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
