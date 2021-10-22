import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddUserModal from "../Modals/AddUserModal";
import AddOrganeModal from "../Modals/AddOrganeModal";
import "./Setting.css";
import AddFonctionModal from "../Modals/AddFonctionModal ";
import AddGradeModal from "../Modals/AddGradeModal ";
const Setting = () => {
  const data = [
    {
      id: 1,
      username: "admin",
      appRoles: [
        {
          id: 1,
          roleName: "admin",
        },
        {
          id: 2,
          roleName: "user",
        },
      ],
    },
    {
      id: 2,
      username: "wolf",
      appRoles: [
        {
          id: 1,
          roleName: "admin",
        },
      ],
    },

    {
      id: 3,
      username: "wolf2",
      appRoles: [
        {
          id: 1,
          roleName: "admin",
        },
        {
          id: 2,
          roleName: "user",
        },
      ],
    },
  ];
  const [showModal, setshowModal] = useState(false);
  const [showCountModal, setshowCountModal] = useState(false);
  const [showFoncModal, setshowFoncModal] = useState(false);
  const [showGrModal, setshowGrModal] = useState(false);

  return (
    <div>
      <AddUserModal show={showModal} close={() => setshowModal(false)} />
      <AddOrganeModal
        show={showCountModal}
        close={() => setshowCountModal(false)}
      />
      <AddFonctionModal
       show={showFoncModal}
       close={() => setshowFoncModal(false)}/>

       <AddGradeModal
       show={showGrModal}
       close={() => setshowGrModal(false)}/>
      
      <div className="users-table-container">
        <h5>Users</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {data.length
              ? data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    {user.appRoles.map((role) => (
                      <>
                        <span key={role.id}>{role.roleName + "; "}</span>
                      </>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
      <div className="users-table-container">
        <h5>Settings</h5>
        <div className="settings-buttons">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setshowModal(true)}
          >
            Ajouter Personnel
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setshowCountModal(true)}
          >
            Ajouter Organe
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setshowFoncModal(true)}
          >
            Ajouter Fonction
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setshowGrModal(true)}
          >
            Ajouter Grade
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
