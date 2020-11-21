import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools"; // Dev tools f
import { Home, Search, Detail } from "./pages";

const overrides = {
  queries: {
    suspense: false,
  },
  mutations: {
    suspense: false,
  },
};

function App() {
  return (
    <ReactQueryConfigProvider config={overrides}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search/:query" component={Search} />
              <Route path="/gif/:id" component={Detail} />
            </Switch>
          </Fragment>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </Suspense>
    </ReactQueryConfigProvider>
  );
}

export default App;
