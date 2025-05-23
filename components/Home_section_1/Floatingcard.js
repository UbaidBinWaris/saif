import Image from "next/image";

export const Floatingcard = () => {
  return (
    <div className="floating-card">
      <div className="floating-card-content">
        <p className="floating-card-quote">Working with Gixi was a Blessing!</p>
        <p className="floating-card-author">- Joe Parry</p>
      </div>
      <div className="floating-card-icon">
        <Image
          src="/svgs/floating.svg"
          width={50}
          height={50}
          alt="Client Testimonial Icon for GIXI AI Solutions"
        />
      </div>
    </div>
  );
};

export default Floatingcard;
