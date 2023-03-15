import vytahyData from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
export default function VytahyVysledky() {
  const data = vytahyData.map((a) => (
    <tr key={a.kod}>
      <td>{a.typ}</td>
      <td>{a.kod}</td>
      <td>{a.Názov}</td>
      <td>{a.Predajná_bez_DPH}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Typ</th>
          <th>kod</th>
          <th>Názov</th>
          <th>Predajná bez DPH</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
}
