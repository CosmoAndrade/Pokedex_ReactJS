import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../pages/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/Pokedex/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import { BackgroundBottom, BackgroundTop } from '../pages/HomePage/styles'

export const Router = () => {
  return (
    <BrowserRouter>
      <BackgroundBottom>
      <BackgroundTop>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/pokedex"}>
          <PokedexPage />
        </Route>
        <Route exact path={"/details/:nome"}>
          <DetailsPage />
        </Route>
        </Switch>
        </BackgroundTop>
        </BackgroundBottom>
    </BrowserRouter>
  );
};
