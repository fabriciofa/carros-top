import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
         <Navbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/catalog">
                <Catalog />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;