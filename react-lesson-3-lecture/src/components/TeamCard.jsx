import "../styles/TeamCard.css";

function TeamCard({ name, members }) {
  return (
    <div className="TeamCard">
      <h3 className="TeamName">{name}</h3>
      <ul>
        {members.map((member) => (
          <li>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamCard;
