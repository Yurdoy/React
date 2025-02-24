import TeamCard from "./TeamCard";
import "../styles/CardsList.css";

function CardsList({ teamsData }) {
  return (
    <div className="CardsList">
      {teamsData.map((teamData) => (
        <TeamCard name={teamData.name} members={teamData.members} />
      ))}
    </div>
  );
}

export default CardsList;
