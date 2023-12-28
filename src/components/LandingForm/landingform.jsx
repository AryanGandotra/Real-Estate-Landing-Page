import "./landingform.css";

const LandingFrom = () => {
  return (
    <>
      <form className="landingForm">
        <input
          className="landingFormInput"
          type="text"
          placeholder="Location"
        />
        <button className="landingFormButton">Search</button>
      </form>
    </>
  );
};

export default LandingFrom;
