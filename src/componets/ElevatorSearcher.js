import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../App.css";

function ElevatorSearcher(props) {
  return (
    <>
      <Form>
        <Row style={{gap:"10px"}} > 
          <Col lg={true} sm={4} > 
            <Form.Control 
              type="search"
              placeholder="hladaj..."
              onChange={(event) =>
                props.setSearch((oldVal) => ({
                  ...oldVal,
                  expression: event.target.value,
                }))
              }
            />
          </Col> 
          <Col  lg={true} sm={4} >
            <Form.Select
              aria-label="allCategory"
              defaultValue={"allCategory"}
              onChange={(event) =>
                props.setSearch((oldVal) => ({
                  ...oldVal,
                  category: event.target.value,
                }))
              }
            >
              <option value="allCategory">všetky kategorie</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ElevatorSearcher;
