import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppHeaderNavItem = ({ text, label, link }) => {
  return (
    <li data-test-id={`nav-${text}`}>
      <Link to={link}>{label}</Link>
    </li>
  );
};

AppHeaderNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AppHeaderNavItem;
