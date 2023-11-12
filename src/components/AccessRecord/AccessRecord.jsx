
import PropTypes from 'prop-types';
import styles from './AccessRecord.module.css';
import { useEffect, useState } from 'react';
import { DetectiveBackend } from '../../utils/utils';
import SensitiveDataRecord from '../SensitiveDataRecord/SensitiveDataRecord';

const AccessRecord = ({ userName, recordId }) => {
  const [record, setRecord] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      if(record) setRecord(null);
      try {
        const dataResults = await DetectiveBackend.get(`/sensitive/${recordId}`);
        if(dataResults.data && dataResults.data[0]){
          const recordData = dataResults.data[0];
          setRecord(recordData);
        }
      } catch(e){
        console.log(e);
        setRecord(null);
      }
    };
    fetchData();
  }, []);

  return <div className={styles["access-record"]}>
    <div className={styles["record-header"]}>
      <p>{userName}</p>
    </div>
    <div className={styles["record-body"]}>
      {record ? <SensitiveDataRecord {...record}/> : <p>Data not found.</p>}
    </div>
  </div>
};

AccessRecord.propTypes = {
  userName: PropTypes.string,
  recordId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AccessRecord;
