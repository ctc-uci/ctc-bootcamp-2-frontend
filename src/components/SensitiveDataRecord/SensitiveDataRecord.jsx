
import PropTypes from 'prop-types';
import styles from './SensitiveDataRecord.module.css';

const SensitiveDataRecord = ({ quoteText, quoteeName, accessLevel }) => {

  return <div className={styles["data-record"]}>
    <div className={styles["quote-header"]}>
      <span><b>Access Level:</b> {accessLevel}</span>
      <span><i>{quoteeName}</i></span>
    </div>
    <p className={styles["quote-text"]}>{quoteText}</p>
    <p className={styles["quotee-name"]}>{quoteeName}</p>
  </div>
};

SensitiveDataRecord.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteeName: PropTypes.string.isRequired,
  accessLevel: PropTypes.number.isRequired,
}

export default SensitiveDataRecord;
