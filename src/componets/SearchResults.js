import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
function SearchResults(props) {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = props.data.map((database) => (
    <tr
      key={database.id}
      className={selectedRow === database.id ? "bg-primary text-white" : ""}
      onClick={() =>
        setSelectedRow((oldVal) => (oldVal === database.id ? null : database.id))
      }
    >
      <td>{database.type}</td>
      <td>{database.id}</td>
      <td>{database.name}</td>
      <td className="text-center">{database.price}</td>
      <td>{database.category}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Typ</th>
          <th>kod</th>
          <th>Názov</th>
          <th>Predajná bez DPH</th>
          <th>Kategória</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
}
export default SearchResults;
