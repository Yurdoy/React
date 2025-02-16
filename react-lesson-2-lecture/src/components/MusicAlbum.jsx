function MusicAlbum({ artist, title, tracks }) {
  return (
    <div className="MusicAlbum">
      <h2>{title}</h2>
      <h4>{artist}</h4>
      <ul>
        {tracks.map((track) => (
          <li>{track}</li>
        ))}
      </ul>
    </div>
  );
}

export default MusicAlbum;
