import PropTypes from 'prop-types';
import styles from "./AccessLogDisplay.module.css";
import AccessRecord from '../AccessRecord/AccessRecord';

const AccessLogDisplay = ({userName, accessLogs}) => {

  return <div>
    <ul className={styles["access-log-display"]}>
      { accessLogs.map((sensitiveDataId) =>
        <li key={`access-log-${sensitiveDataId}-${userName}`}>
          <AccessRecord userName={userName} recordId={sensitiveDataId}/>
        </li>
      )}
    </ul>
  </div>
}

AccessLogDisplay.propTypes = {
  userName: PropTypes.string.isRequired,
  accessLogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    accessTime: PropTypes.string.isRequired,
    sensitiveDataId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })),
}

export default AccessLogDisplay
