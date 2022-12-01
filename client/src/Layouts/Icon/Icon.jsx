import "./Icon.css";

const Icon = ({ Icon, onClick, size }) => {
  return <i className={`fas fa-${Icon} ${size}`} onClick={onClick}></i>;
};
export default Icon;
