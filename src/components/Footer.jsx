// eslint-disable-next-line react/prop-types
export default function Footer({ onContactClick, onHomeClick, onAboutClick }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#262530",
        height: "100px",
        bottom: "0",
        position: "fixed"
      }}
    >
      <img
        style={{ width: "150px" }}
        src="./infinerty-logo.png"
        alt="Infinerty Logo"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "300px",
          marginTop: "5px",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={onContactClick}
          style={{
            cursor: "pointer",
            fontSize: "larger",
            background: "none",
            border: "none",
          }}
        >
          Contact
        </button>
        <p style={{ margin: "0px" }}>|</p>
        <button
          onClick={onAboutClick}
          style={{
            cursor: "pointer",
            fontSize: "larger",
            background: "none",
            border: "none",
          }}
        >
          About
        </button>
        <p style={{ margin: "0px" }}>|</p>
        <button
          onClick={onHomeClick}
          style={{
            cursor: "pointer",
            fontSize: "larger",
            background: "none",
            border: "none",
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
