import  { useEffect, useState } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data using Axios
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users") // replace with your actual API endpoint
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="card-content">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Company</th>
            <th>City</th>
            <th>Progress</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="image-cell">
                <div className="image">
                  <img
                    src={user.avatar} // Assuming 'avatar' is a field in your data
                    className="rounded-full"
                    alt={user.name}
                  />
                </div>
              </td>
              <td data-label="Name">{user.name}</td>
              <td data-label="Company">{user.company}</td>
              <td data-label="City">{user.city}</td>
              <td data-label="Progress" className="progress-cell">
                <progress max="100" value={user.progress}>{user.progress}</progress>
              </td>
              <td data-label="Created">
                <small className="text-gray-500" title={user.created}>
                  {new Date(user.created).toLocaleDateString()}
                </small>
              </td>
              <td className="actions-cell">
                <div className="buttons right nowrap">
                  <button className="button small green --jb-modal" type="button">
                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                  </button>
                  <button className="button small red --jb-modal" type="button">
                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="table-pagination">
        <div className="flex items-center justify-between">
          <div className="buttons">
            <button type="button" className="button active">1</button>
            <button type="button" className="button">2</button>
            <button type="button" className="button">3</button>
          </div>
          <small>Page 1 of 3</small>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
