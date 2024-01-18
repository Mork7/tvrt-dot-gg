import { useEffect, useState } from "react";
import { getTwitchStreams } from "../utils/leagueApi";
import "../index.css";

export default function Streams() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const streams = await getTwitchStreams();
        console.log(streams);
        setStreams(streams);
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
        fontFamily: "Roboto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ width: "95px" }} src="./twitch.webp" alt="twitch" />
        <h1 style={{ textAlign: "center" }}>Streams</h1>
      </div>

      <hr style={{ width: "100%", marginBottom: "0px" }} />
      {streams.map((stream, index) => (
        <div id={"hover-effect"} style={styleNormal} key={index}>
          <h2 style={{ marginBottom: "0px" }}>{stream.displayName}</h2>
          <h4 style={{ textAlign: "center", marginBottom: "0px" }}>
            {stream.title}
          </h4>

          <h4 style={{ marginBottom: "0px" }}>
            Viewer count: {stream.viewerCount}
          </h4>
          <h5>Language: {stream.language}</h5>
          <a
            href={`https://www.twitch.tv/${stream.displayName}`}
            style={{ textTransform: "uppercase", textDecoration: "none" }}
          >
            Watch {stream.type}
          </a>
          <hr style={{ width: "100%", marginBottom: "0px" }} />
        </div>
      ))}
    </div>
  );
}
