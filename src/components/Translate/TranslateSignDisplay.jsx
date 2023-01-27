import "./TranslateSignDisplay.css";

const TranslateSignDisplay = ({ letter }) => {
  // removed spaces code taken from https://stackoverflow.com/a/48735837
  const translationImages = Array.from(letter.split(' ').join('').split('')).map((char, index) => (
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