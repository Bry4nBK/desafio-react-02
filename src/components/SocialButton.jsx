import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ socialIcons }) => {
  const iconElements = [];

  for (const [index, socialIcon] of socialIcons.entries()) {
    const iconElement = (
      <a key={index} href={socialIcon.url} target="_blank" rel="noopener noreferrer" className="icon-shape" 
        aria-label={socialIcon.name}>
        <FontAwesomeIcon icon={socialIcon.icon} />
      </a>
    );
    iconElements.push(iconElement);
  }

  return (
    <div className="social-buttons">
      {iconElements}
      <h4 className="titulo3">usa tu email para registrarte</h4>
    </div>
  );
}

export default SocialButton;
