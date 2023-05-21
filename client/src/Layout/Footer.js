import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function goOpening() {
    navigate("/opening");
  }

  return (
    <div>
      <div className="go-opening" onClick={goOpening}></div>
      <div className="go-ending"></div>
    </div>
  );
}

export default Footer;
