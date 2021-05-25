import './styles.css'
const FishCard = ({name, url }) => {
  return (
    <div className="card spacing">
      <img src={url} alt={name} style={{ width: "250px", height: 'auto' }} />
      <div className="name">{name}</div>
    </div>
  );
};
export default FishCard;
