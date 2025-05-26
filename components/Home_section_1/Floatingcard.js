import Image from "next/image";

export const Floatingcard = () => {
  return (
    <div className="hidden sm:flex absolute top-1/2 right-1/4 flex-col items-end z-10 duration-300 transition-all infinite ease-in-out transform -rotate-12">
      <div className="center bg-gray-800 border-rounded-lg shadow-gray-500 flex flex-col items-center justify-center p-4 rounded-lg w-64 box-shadow-lg">
        <p className="text-center mb-5 font-semibold text-white text-2xl">&quot;Working with Gixi was a Blessing!&quot;</p>
        <p className="text-xl text-[rgba(255,255,255,0.7)]">- Joe Parry</p>
      </div>
      <div className="h-8 w-8 -mr-8 floating-card-icon">
        <Image
          className="transform rotate-[110deg]"
          src="/svgs/floating.svg"
          width={30}
          height={30}
          alt="Client Testimonial Icon for GIXI AI Solutions"
        />
      </div>
    </div>
  );
};

export default Floatingcard;
