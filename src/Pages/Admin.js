import Table from 'react-bootstrap/Table';
import React, { useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [targetGroup, setTargetGroup] = useState('');
    const [program, setProgram] = useState('');

    useEffect(() =>{
      axios.get(`https://sheet.best/api/sheets/5e44a06d-1c37-4720-9c77-e5c842391ade`).then((incomingData) => {
        setAPIdata(incomingData.data);
      })
    },[])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Admin;