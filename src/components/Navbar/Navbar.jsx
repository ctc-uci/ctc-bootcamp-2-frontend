import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { DetectiveBackend } from "../../utils/utils";
import { useEffect, useState } from "react";

const userToElem = ({id, firstName, lastName, title}) => (
  <li key={`user-${id}`}>
    <Link to={`user/${id}`}>{firstName} {lastName}<br/>({title})</Link>
  </li>
)

const Navbar = () => {
  const [users, setUsers] = useState([]);


  const fetchUsers = async ()=>{
    try {
      const userResults = await DetectiveBackend.get("/user");
      setUsers(userResults.data);
    } catch(e){
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchUsers();
  }, []);

  // const users = [
  //   {
  //     id: "72",
  //     firstName: "John",
  //     lastName: "Doe",
  //     title: "General Member"
  //   }
  // ]

  return <nav className={styles["navbar"]}>
    <ul className={styles["nav-main-list"]}>
      <li><Link to="/"><h1>catch the criminals</h1></Link></li>
      <li><Link to="/sensitive-data">Sensitive Data</Link></li>
      <li><Link to="/access-violations">Access Violations</Link></li>
      <li>
        <details className={styles["nav-dropdown"]} open>
          <summary>Users</summary>
          <ul>
            {users.map(userToElem)}
          </ul>
        </details>
      </li>
    </ul>
  </nav>
};

export default Navbar;
