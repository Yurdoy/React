function CardItem(props) {
  const { name, members } = props;
  return (
    <div>
      <h3>
        Team:
        <ul className="member">
          {members.map((member) => (
            <li className="player">{member}</li>
          ))}
        </ul>
      </h3>
    </div>
  );
}

export default CardItem;
