import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
