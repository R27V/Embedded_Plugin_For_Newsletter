import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userList, setUserList] = useState([]);

  const [mailContent, setMailContent] = useState("");

  const snippet = `<link rel="stylesheet" href="http://localhost:5000/index.css" />
  <div id="plugin" ownerid="632abd8e28738491662d8461"></div>
  <script src="http://localhost:5000/index.js"></script>`;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/subscriber/getall");
    const data = await response.json();
    console.log(data);
    setUserList(data);
  };

  const deleteUser = async (id) => {
    console.log(id);
    const response = await fetch(
      "http://localhost:5000/subscriber/delete/" + id,
      {
        method: "DELETE",
      }
    );
    console.log(response.status);
    getDataFromBackend();
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayUsers = () => {
    return (
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  <i className="fas fa-trash" />
                </button>
              </td>
              {/* <td>
                    <button className="btn btn-primary" onClick={() => {}}>
                        <i className='fas fa-pen' />
                    </button>
                </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const sendMail = async () => {
    for (let sub of userList) {
      await fetch("http://localhost:5000/util/textmail", {
        method: "POST",
        body: JSON.stringify({
          from: "renuprojects27@gamil.com",
          to: sub.email,
          subject: "NEWSLETTER",
          html: mailContent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("mail sent");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Welcome {currentUser.name}</h1>
      <h4>Your Key: {currentUser._id}</h4>

      <textarea value={snippet} style= {{ width: "600px", height: "100px"}} disabled></textarea>
      <div>{displayUsers()}</div>
      <div className="card">
        <textarea
          className="form-control"
          onChange={(e) => setMailContent(e.target.value)}
        ></textarea>
        <button
          className="mybtn btn btn-primary w-10 m-3 p-3"
          onClick={sendMail}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
