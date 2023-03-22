import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ElevatorSearcher from "./ElevatorSearcher";
import SearchResults from "./SearchResults";
import allData from "../elevatorData.json";

function EvevatorApp() {
  //searchBar
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState({
    expression: "",
    category: "allCategory",
  });

  useEffect(() => {
    //este
    //upraviť ifka
    //pri velkom prahlliadaci zmeniť rozloženie kategoire a vyhladavania

    function normlizedSearch() {
      setSearchResults((oldVal) =>
        oldVal.filter((data) => {
          const normalizedTitle = data.Názov.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const normalizedExpression = search.expression
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return normalizedTitle.includes(normalizedExpression);
        })
      );
    }

    if (search.expression === "" || search.category === "allCategory") {
      setSearchResults(allData.map((data) => data));
    }
    if (search.category !== "allCategory") {
      setSearchResults(allData.filter((data) => data.kategoria === search.category));
    }

    if (search.expression !== "") {
      normlizedSearch();
    }
  }, [search]);

  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 className=" mx-auto">Vyhľadávač</h2>
          <ElevatorSearcher setSearch={setSearch} />
          <SearchResults data={searchResults} />
        </Stack>
      </Container>
    </>
  );
}
export default EvevatorApp;
