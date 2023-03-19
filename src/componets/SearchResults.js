
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
 function SearchResults(props) {
  const data = props.data.map((a) => (
    <tr key={a.kod}>{
      //onClick={()=>console.log(a.Názov) a zmenim classu}
    }
      <td>{a.typ}</td>
      <td>{a.kod}</td>
      <td>{a.Názov}</td>
      <td className="text-center">{a.Predajná_bez_DPH}</td>
    </tr>
  ));

  return (
    <Table striped bordered hover >
      <thead >
        <tr>
          <th>Typ</th>
          <th>kod</th>
          <th>Názov</th>
          <th >Predajná bez DPH</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
}
export default SearchResults