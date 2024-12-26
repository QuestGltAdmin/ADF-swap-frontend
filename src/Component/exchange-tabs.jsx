import { useLocation, useNavigate } from "react-router-dom";

const ExchangeTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="first-row">
      <div className="cross-chain-row" style={{ display: "flex", gap: 20 }}>
        <div
          style={{
            paddingBottom: 10,
            cursor: "pointer",
            borderBottom: pathname === "/swap" ? "4px solid orange" : "",
          }}
          onClick={() => navigate("/swap")}
        >
          <h3>Swap</h3>
        </div>
        <div
          style={{
            paddingBottom: 10,
            cursor: "pointer",
            borderBottom: pathname === "/buy" ? "4px solid orange" : "",
          }}
          onClick={() => navigate("/buy")}
        >
          <h3>Buy</h3>
        </div>
      </div>
    </div>
  );
};

export default ExchangeTabs;
