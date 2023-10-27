import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Selection() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Equipment</Dropdown.Item>
      <Dropdown.Item href="#/action-2">FAT</Dropdown.Item>
      <Dropdown.Item href="#/action-3">QA Test</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Common Engineering</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Metrology</Dropdown.Item>
    </DropdownButton>
  );
}

export default Selection;
