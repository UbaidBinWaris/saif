import "./Pbutton.css";
import "../../app/styles/color.css";
import { PATHS } from "../../constants/assetPaths";
import Image from "next/image";

const Pbutton = (props) => {
  return (
    <div className={`secFour-choose ${props.className || ""}`}>
      <Image
        className="dot"
        src={PATHS.ICONS.DOT}
        alt="Decorative dot icon for section highlight"
        width={8}
        height={8}
      />
      <p>{props.children}</p>
    </div>
  );
};
export default Pbutton;