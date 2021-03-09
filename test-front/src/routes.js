import React from "react";
import Index from "./views/Index";
import ItemSelected from "./views/ItemSelected";
import SearchResults from "./views/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import RequestContext from "./requestContext";

export const Routes = () => {
  const [requestResults, setResults] = useState({});
  const storeResults = (results) => {
    setResults(results);
  };
  return (
    <div>
      <RequestContext.Provider value={{ requestResults, storeResults }}>
        <Switch>
          <Route path="/items/:id" render={() => <ItemSelected />} />
          <Route path="/items" render={() => <SearchResults />} />
          <Route path="/" render={() => <Index />} />
        </Switch>
      </RequestContext.Provider>
    </div>
  );
};
