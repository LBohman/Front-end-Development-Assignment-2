import "./TranslateSignDisplay.css";

const TranslateSignDisplay = ({ letter }) => {
  const translationImages = Array.from(letter).map((char, index) => (
    <img
    className="translate-sign-display-img"
      src={`individual_signs/${char}.png`}
      alt={`Sign for letter ${char}`}
      key={index}
    />
  ));

  return <>{translationImages}</>;
};
export default TranslateSignDisplay;