import CardItem from "./CardItem";
import { teams } from "../config/players";

function CardList(props) {
  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team) => (
        <CardItem name={team.name} members={team.members} />
      ))}
    </div>
  );
}

export default CardList;
