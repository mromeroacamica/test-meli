import React, { useContext } from "react";
import Container from "./components/Container";
import Item from "./components/Item";
import SearchCategories from "./components/SearchCategories";
import RequestContext from "../requestContext";

const SearchResults = () => {
  const { requestResults, setResults } = useContext(RequestContext);

  return (
    <Container>
      <SearchCategories />
      <div>
        {requestResults.items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default SearchResults;
