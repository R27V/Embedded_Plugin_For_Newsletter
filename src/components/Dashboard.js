import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userList, setUserList] = useState([]);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/subscriber/getall");
    const data = await response.json();
    console.log(data);
    setUserList(data);
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
              {/* <td>
                    <button className="btn btn-danger" onClick={() => {}}>
                        <i className='fas fa-trash' />
                    </button>
                </td>
                <td>
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
  return (
    <div className="container">
      <h1 className="text-center">DASHBOARD</h1>
      <hr />
      {displayUsers()}
    </div>
  );
};
export default Dashboard;
