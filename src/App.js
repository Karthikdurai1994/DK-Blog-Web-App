import Home from "./Home";
import Navbar from "./Navbar";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import Error404Page from "./Error404Page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/createBlog" exact>
              <CreateBlog></CreateBlog>
            </Route>
            <Route path="/blog/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <Error404Page></Error404Page>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
