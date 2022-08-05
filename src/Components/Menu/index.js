import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
const Menu = () => {
  return (
    <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default Menu