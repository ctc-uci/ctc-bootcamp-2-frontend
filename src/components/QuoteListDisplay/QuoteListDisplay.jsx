
import PropTypes from 'prop-types';
import styles from "./QuoteListDisplay.module.css";
import DataRecordWrapper from './DataRecordWrapper/DataRecordWrapper';

const QuoteListDisplay = ({ recordIds }) => {
  return <ul className={styles["quote-list-display"]}>
    { recordIds.map((recordId) =>
      <li key={`access-log-${recordId}`}>
        <DataRecordWrapper recordId={recordId}/>
      </li>
    )}
  </ul>;
};

QuoteListDisplay.propTypes = {
  recordIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
}

export default QuoteListDisplay;
