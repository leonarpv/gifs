import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GifContext from "./context/GifContext/GifContext";
import UserContext from "./context/UserContext/UserContext";
import { Home, Search, Detail, NotFoundPage } from "./pages";

function App() {
  return (
    <UserContext>
      <GifContext>
        <Suspense fallback={null}>
          <BrowserRouter>
            <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search/:query?" component={Search} />
                <Route path="/gif/:id" component={Detail} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </Fragment>
          </BrowserRouter>
        </Suspense>
      </GifContext>
    </UserContext>
  );
}

export default App;
