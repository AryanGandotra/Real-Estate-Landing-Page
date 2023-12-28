import "./choices.css";
import NavigationButtons from "../Navigation Buttons/navigationbuttons";

const Choices = () => {
  return (
    <div className="choices">
      <h3 className="choicesSubHeading">Best Choices</h3>
      <div className="choicesHeadingContainer">
        <div>
          <h1 className="choicesHeading">Popular Residencies</h1>
        </div>
        <div className="btn-container">
          <NavigationButtons />
        </div>
      </div>
     
    </div>
  );
};

export default Choices;
