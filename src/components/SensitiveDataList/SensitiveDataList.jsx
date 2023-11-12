
import PropTypes from 'prop-types';
import SensitiveDataRecord from "../../components/SensitiveDataRecord/SensitiveDataRecord";
import styles from "./SensitiveDataList.module.css";

const SensitiveDataList = ({ sensitiveData }) => {
  return <ul className={styles["sensitive-data-list"]}>
    {
      sensitiveData?
      sensitiveData.map((record)=>{
        return <li key={record.id}>
          <SensitiveDataRecord {...record}/>
        </li>
      }) :
      null
    }
  </ul>;
}

SensitiveDataList.propTypes = {
  sensitiveData: PropTypes.arrayOf(PropTypes.shape({
    quoteText: PropTypes.string.isRequired,
    quoteeName: PropTypes.string.isRequired,
    accessLevel: PropTypes.number.isRequired,
  }))
}

export default SensitiveDataList;
