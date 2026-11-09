import Card from "./Card.jsx";
import { reg_no } from "./data.js";

function Content() {
  return (
    <>
      <div className="content">
        <Card />
      </div>
      <div className="note">
        <p className="note-txt">
          ⚠️ If you find any bugs you can contact me. {reg_no}
        </p>
      </div>
    </>
  );
}

export default Content;
