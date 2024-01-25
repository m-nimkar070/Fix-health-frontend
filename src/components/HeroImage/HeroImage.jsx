import "./HeroImage.css";
export default function HeroImage({ backgroundImage, title, description }) {
  return (
    <div className="heroImage">
      <img
        src="https://thumbs.dreamstime.com/b/indian-male-doctor-clipboard-stethoscope-medicine-profession-healthcare-concept-smiling-white-coat-over-grey-138207484.jpg"
        alt="doctor Image"
      />
      <div className="captions">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
