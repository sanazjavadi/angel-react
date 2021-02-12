import {
  Switch,
  BrowserRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";
import { ProviderContext } from './context/context'

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
import Dashboard from './dashboard/index'

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./design/_main.css";


const Main = withRouter(({ location }) => {

  return (
    <>
      {
        location.pathname !== '/dashboard' && <Header />
      }

      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Explore} path="/explore" />
        <Route component={YourSupport} path="/your-support" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={NotFound} path="*" />
      </Switch>
      {
        location.pathname !== '/dashboard' && <Footer />
      }


    </>
  )
})

const App = () => {
  return (
    <ProviderContext>
      <div className="app">
        <Router>
          <Main />
        </Router>
      </div>
    </ProviderContext>

  );
}




export default App;
