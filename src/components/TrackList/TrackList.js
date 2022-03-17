import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  // console.log(props.tracks);
  return (
    <div className="TrackList">
      {props.tracks &&
        props.tracks.map((track) => {
          return <Track track={track} key={track.id} onAdd={props.onAdd} />;
        })}
    </div>
  );
}
// <!-- You will add a map method that renders a set of Track components  -->
export default TrackList;
