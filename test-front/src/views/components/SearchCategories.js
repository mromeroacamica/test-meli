import React, { useContext, useState, useEffect } from "react";
import RequestContext from "../../requestContext";

const SearchCategories = () => {
  const { requestResults, setResults } = useContext(RequestContext);
  const [categories, setCategories] = useState("");
  console.log(requestResults);
  useEffect(() => {
    prepareCategories(requestResults.categories);
  }, []);

  const prepareCategories = (categories) => {
    const categoriesString = categories.toString();
    const search = ",";
    const replaceWith = "/";
    const result = categoriesString.split(search).join(replaceWith);
    setCategories(result);
    return;
  };

  return <div className="search_categores">{categories}</div>;
};

export default SearchCategories;
