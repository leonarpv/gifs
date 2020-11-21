import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Search, Detail } from "./pages";

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search/:query" component={Search} />
            <Route path="/gif/:id" component={Detail} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
