import React, { useContext, useState } from "react";
import RequestServices from "../../services/request.services";
import RequestContext from "../../requestContext";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchHeader = () => {
  const history = useHistory();
  const { requestResults, storeResults } = useContext(RequestContext);
  const [query, setQuery] = useState("");

  const onSubmit = () => {
    if (query !== "" && query !== null) {
      submitSearch(query);
      return;
    }
  };

  const submitSearch = async (query) => {
    const result = await RequestServices.search(query);
    if (result) {
      if (result.items.length > 0) {
        storeResults(result);
        history.push(`/items?search=${query}`);
        return;
      }
    }
  };
  const redirectHome = () => {
    history.push("/");
  };
  return (
    <div className="search_header_container">
      <div className="search_header_logo" onClick={redirectHome}></div>
      <div className="search_header_search">
        <input
          type="text"
          className="search_header_search_input"
          placeholder="Nunca dejes de buscar"
          name="q"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="button" onClick={onSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
