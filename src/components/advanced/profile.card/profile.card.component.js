import PropTypes from 'prop-types';
import { getUsername } from 'utils/getUsername.utils';
import styles from './profile.card.styles.module.css';

const ProfileCard = ({ user }) => {
  const { name, location, picture, dob, email, phone } = user;

  return (
    <div className={styles.profileCardContainer} data-test-id="profile-card">
      <div>
        <img src={picture.large} alt={name.first + name.last} />
      </div>
      <div className={styles.profileCardBioContainer}>
        <div>
          <b>Name:</b> {name.first} {name.last}
        </div>
        <div>
          <b>Birthday:</b> {new Date(dob.date).toLocaleDateString()}
        </div>
        <div>
          <b>Username:</b> {getUsername(email)}
        </div>
        <div>
          <b>Email:</b> {email}
        </div>
        <div>
          <b>Phone:</b> {phone}
        </div>
        <div>
          <b>Address:</b> {location.street.number} {location.street.name}
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    phone: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    dob: PropTypes.shape({
      date: PropTypes.string,
      age: PropTypes.number,
    }),
    location: PropTypes.shape({
      street: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
      }),
    }),
  }),
};

export default ProfileCard;
