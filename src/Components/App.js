import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import BadgeNew from "../Pages/BadgeNew";
import BadgeEdit from "../Pages/BadgeEdit";
import Badges from "../Pages/Badges";
import NotFound from "../Pages/NotFound";
import Layout from "../Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
