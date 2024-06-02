import PropTypes from 'prop-types';

const Alerta = ({ message, type }) => {
  if (!message) return null;

  const backgroundColor = type === 'danger' ? 'red' : 'green';

  const alertStyles = {
    backgroundColor,
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0',
  };

  return (
    <div style={alertStyles}>
      {message}
    </div>
  );
};

Alerta.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger', 'success']).isRequired,
};

export default Alerta;
