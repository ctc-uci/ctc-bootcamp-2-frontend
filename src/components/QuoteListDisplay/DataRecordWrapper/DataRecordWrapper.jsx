
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DetectiveBackend } from '../../../utils/utils';
import SensitiveDataRecord from '../../SensitiveDataRecord/SensitiveDataRecord';

const DataRecordWrapper = ({recordId}) => {
  const [quote, setQuote] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const dataResults = await DetectiveBackend.get(`/sensitive/${recordId}`);
        if(dataResults.data && dataResults.data[0]){
          const recordData = dataResults.data[0];
          setQuote(recordData);
        }
      } catch(e){
        return null;
      }
    };
    fetchData();
  }, []);

  return quote ? <SensitiveDataRecord {...quote}/> : null;
}


DataRecordWrapper.propTypes = {
  recordId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DataRecordWrapper;
