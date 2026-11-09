import { year, firstYear, secondYear, thirdYear } from "./data.js";
import electricalCircuitAndMachine from "./assets/PDF/Electrical-Circuit-and-Machine (S3).pdf";
import analogAndDigitalElectronics from "./assets/PDF/Analog-and-Digital-Electronics (S3).pdf";
import signalAndSystem from "./assets/PDF/Signal-and-System (S3).pdf";
import controlSystem from "./assets/PDF/Control-System (S3).pdf";

const cards = [
  { title: year[0], subjects: firstYear },
  { title: year[1], subjects: secondYear },
  { title: year[2], subjects: thirdYear },
];

const pdfFiles = {
  "Electrical-Circuit-and-Machine (S3)": electricalCircuitAndMachine,
  "Analog-and-Digital-Electronics (S3)": analogAndDigitalElectronics,
  "Signal-and-System (S3)": signalAndSystem,
  "Control-System (S3)": controlSystem,
};

function Card() {
  return (
    <>
      {cards.map(({ title, subjects }) => (
        <div className="card" key={title}>
          <p className="card-title">{title}</p>
          <div className="download-btns">
            {subjects.map((subject) => {
              const pdfFile = pdfFiles[subject];

              return pdfFile ? (
                <a
                  className="btn btn--downloadable"
                  href={pdfFile}
                  download={`${subject}.pdf`}
                  key={subject}
                >
                  {subject}
                </a>
              ) : (
                <button type="button" className="btn" key={subject}>
                  {subject}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
