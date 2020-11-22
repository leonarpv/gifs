import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GifContext from "./context/GifContext/GifContext";
import ThemeContext from "./context/ThemeContext/ThemeContext";
import UserContext from "./context/UserContext/UserContext";
import { Home, Search, Detail } from "./pages";

function App() {
  return (
    <UserContext>
      <GifContext>
        <ThemeContext>
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
        </ThemeContext>
      </GifContext>
    </UserContext>
  );
}

export default App;
