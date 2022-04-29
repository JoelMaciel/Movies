import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
