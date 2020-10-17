import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/apuntes" component={Notes}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/acerca" component={About}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
