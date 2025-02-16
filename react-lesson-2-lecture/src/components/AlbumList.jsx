import MusicAlbum from "./MusicAlbum";

function AlbumList() {
  const albums = [
    {
      id: 1,
      artist: "The Beatles",
      title: "Abbey Road",
      tracks: ["Come Together", "Something", "Maxwell's Silver Hammer"],
    },
    {
      id: 2,
      artist: "Pink Floyd",
      title: "The Dark Side of the Moon",
      tracks: ["Speak to Me", "Breathe", "On the Run"],
    },
    {
      id: 3,
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      tracks: ["Black Dog", "Rock and Roll", "The Battle of Evermore"],
    },
  ];

  return (
    <div className="AlbumList">
      {albums.map((album) => (
        <MusicAlbum
          key={album.id}
          artist={album.artist}
          title={album.title}
          tracks={album.tracks}
        />
      ))}
    </div>
  );
}

export default AlbumList;
