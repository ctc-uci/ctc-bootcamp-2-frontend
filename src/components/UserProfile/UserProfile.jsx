
import PropTypes from 'prop-types';
import styles from './UserProfile.module.css';
import QuoteListDisplay from '../QuoteListDisplay/QuoteListDisplay';

const UserProfile = ({ firstName, lastName, title, accessLevel, profileImageURL, accessedData }) => {

  return <div className={styles["profile-card"]}>
    <div className={styles["profile-info"]}>
      <h2>{firstName} {lastName}</h2>
      <p><b>Title: </b>{title}</p>
      <p><b>Access Level:</b> {accessLevel}</p>

      {
        accessedData ?
        <>
          <h3>Associated Sensitive Data</h3>
          <QuoteListDisplay recordIds={accessedData.map(({sensitiveDataId})=>{return (sensitiveDataId)})}/>
        </> :
        null
      }
    </div>
    <div className={styles["profile-picture-container"]}>
      <img src={profileImageURL}/>
    </div>
  </div>
};

UserProfile.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  accessLevel: PropTypes.number.isRequired,
  profileImageURL: PropTypes.string.isRequired,
  accessedData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    accessTime: PropTypes.string.isRequired,
    sensitiveDataId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })),
}

export default UserProfile;
