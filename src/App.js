//Genral react imports
import React from "react";
//Components
import Layout from "./layout/Layout";
import NavRoutes from "./routes/NavRoutes";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";
//Router
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <NavRoutes />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
