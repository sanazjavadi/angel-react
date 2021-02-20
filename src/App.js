import {
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


//components
import Header from "./layouts/common/Header";
import Footer from "./layouts/common/Footer";

//routes
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Explore from "./views/explore";
import YourSupport from "./views/yourSupport";
import NotFound from "./views/notFound";
import Profile from './views/profile'

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./design/_main.scss";

const App = () => {
  return (

    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
          <Route component={Explore} path="/explore" />
          <Route component={YourSupport} path="/your-support" />
          <Route component={Profile} path="/profile" />
          <Route component={NotFound} path="*" />
        </Switch>
        <Footer />
      </Router>
    </div>


  );
}




export default App;
