import PropTypes from 'prop-types';

const IconSwitch = (props) => {
  const { icon, onSwitch } = props;
  return (
    <div className='d-flex justify-content-end m-4 me-0 btn'>
      <span className='material-icons' onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
