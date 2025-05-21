import "./Pbutton.css";
import dot from "../../assets/dot.svg";

const Pbutton = (props) => {
  return (
    <div className={`secFour-choose ${props.className || ""}`}>
      <img
        className="dot"
        src={dot}
        alt="Decorative dot icon for section highlight"
      />
      <p>{props.children}</p>
    </div>
  );
};
export default Pbutton;