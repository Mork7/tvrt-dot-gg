import { useEffect, useState } from "react";
import { getTwitchStreams } from "../utils/leagueApi";

export default function Streams() {
  const [streams, setStreams] = useState([]);
  const [hoverStates, setHoverStates] = useState(false);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const streams = await getTwitchStreams();
        console.log(streams);
        setStreams(streams);

        let initiaHoverStates = {};

        streams.forEach((_,index) => {
            initiaHoverStates[index] = false;
        })

        setHoverStates(initiaHoverStates);

      } catch (error) {
        console.error(error);
      }
    };

    fetchStreams();
  }, []);

  const styleNormal = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "large",
    color: "inherit",
  };

  const styleHovered = {
    boxShadow: "0px 0px 5px 5px darkgray",
    ...styleNormal,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        justifyContent: "center",
        margin: "10px",
        maxWidth: "300px",
        backgroundColor: "#212422",
        color: "#d5d6db",
        textWrap: "wrap",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Twitch Streams</h1>
      <hr style={{ width: "100%", marginBottom: "0px" }} />
      {streams.map((stream, index) => (
        <a
          href={`https://www.twitch.tv/${stream.displayName}`}
          style={hoverStates[index] ? styleHovered : styleNormal}
          onMouseEnter={() => setHoverStates({ ...hoverStates, [index]: true })}
          onMouseLeave={() => setHoverStates({ ...hoverStates, [index]: false })}
          key={index}
        >
          <h1>{stream.displayName}</h1>
          <h3 style={{ textAlign: "center" }}>Title: {stream.title}</h3>

          <h3>Viewer count: {stream.viewerCount}</h3>
          <h3 style={{ textTransform: "uppercase" }}>{stream.type}</h3>
          <hr style={{ width: "100%", marginBottom: "0px" }} />
        </a>
      ))}
    </div>
  );
}
