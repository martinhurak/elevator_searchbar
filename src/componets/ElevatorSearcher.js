import Form from "react-bootstrap/Form";
import "../App.css";

function ElevatorSearcher(props) {
  return (
    <Form.Control
      type="text"
      placeholder="hladaj..."
      onChange={(event) => props.setSearchExpression(event.target.value)}
    />
  );
}

export default ElevatorSearcher;
