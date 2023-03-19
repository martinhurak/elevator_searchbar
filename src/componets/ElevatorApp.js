import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ElevatorSearcher from "./ElevatorSearcher";
import SearchResults from "./SearchResults";
import allData from "./elevatorData.json";

function EvevatorApp() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchExpression, setSearchExpression] = useState("");


  useEffect(() => {
    if (searchExpression === "" ) {
      setSearchResults(allData.map((data) => data));
    } else if (searchExpression !== "") { 
      setSearchResults(
        allData.filter((a) => {
          const normalizedTitle = a.Názov.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const normalizedExpression = searchExpression
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return normalizedTitle.includes(normalizedExpression);
        })
      );
    }
  }, 
   [searchExpression]);
 
  return (
    <>
      <Container>
        <Stack gap={3}>
          <h2 className=" mx-auto">Vyhľadávač</h2>
          <ElevatorSearcher setSearchExpression={setSearchExpression} />
          <SearchResults data={searchResults} />
        </Stack>
      </Container>
    </>
  );
}
export default EvevatorApp;
