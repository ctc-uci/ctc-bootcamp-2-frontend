import { useEffect, useState } from "react";
import { DetectiveBackend } from "../../utils/utils";
import AccessLogDisplay from "../../components/AccessLogDisplay/AccessLogDisplay";

const AccessViolationView = () => {

  const [logs, setLogs] = useState([]);

  useEffect(()=>{
    const fetchUsers = async ()=>{
      try {
        const logResults = await DetectiveBackend.get(`/user/culprit`);
        if(logResults.data){
          setLogs(logResults.data);
        }
      } catch(e){
        // console.log(e);
      }
    };
    fetchUsers();
  });

  return <div>
    <h2>Access Violations</h2>
    {logs.map((log)=>{
      return logs? <AccessLogDisplay userName={log.name} accessLogs={log.illegalDataAccessed} /> : <p>Loading...</p>
    })}
  </div>
}

export default AccessViolationView;
