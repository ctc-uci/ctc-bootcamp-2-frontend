import { useEffect, useState } from "react";
import { DetectiveBackend } from "../../utils/utils";
import SensitiveDataList from "../../components/SensitiveDataList/SensitiveDataList";
import styles from "./SensitiveDataView.module.css";

const SensitiveDataView = () => {
  const [ sensitiveData, setSensitiveData ] = useState([]);

  useEffect(()=>{
    const fetchSensitiveData = async ()=>{
      try {
        const sensitiveDataResults = await DetectiveBackend.get(`/sensitive`);
        setSensitiveData(sensitiveDataResults.data);
        console.log({sensitiveDataResults});
      } catch(e){
        // console.log(e);
      }
    };
    fetchSensitiveData();
  }, []);

  return <div className={styles["sensitive-data-container"]}>
    <h2>Sensitive Data</h2>
    <SensitiveDataList sensitiveData={sensitiveData}/>
  </div>;
}

export default SensitiveDataView;
