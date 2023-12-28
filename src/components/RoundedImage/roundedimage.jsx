import "./roundedimage.css";

const RoundedImage = (image) => {
  return (
    <>
      <div className="roundedImg">
        <img src={image.img} />
      </div>
    </>
  );
};

export default RoundedImage;
