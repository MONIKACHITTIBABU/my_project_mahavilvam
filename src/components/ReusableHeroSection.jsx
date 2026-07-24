import LocationnBg from "../assets/images/LocationImages/LocationHeroImages/LocationnBg.png";
import MobileBg from "../assets/images/LocationImages/LocationHeroImages/MobileBg.png";

export default function ReusableHeroSection({
    title1,
    title2,
}) {
    return (
        <section
            className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen lg:h-screen xl:h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Desktop */}
            <img src={LocationnBg} alt="" className="hidden lg:block absolute inset-0 w-full h-full object-cover object-top z-0" />

            {/* Mobile */}
            <img src={MobileBg} alt="" className="block lg:hidden absolute inset-0 w-full h-full object-cover object-top z-0" />


            {/* Background Opacity Text */}
           
            <div className="absolute left-1/2 top-[60%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-full flex justify-center">
                <h1 className="w-[90%] lg:w-full text-center text-yellow-primary font-primary font-bold uppercase opacity-15 leading-none text-[60px] sm:text-[80px] md:text-[100px] lg:text-[170px] xl:text-[190px]">
                    {title1}
                    <br />
                    {title2}
                </h1>
            </div>

            {/* Main Title */}
            <div className="absolute left-1/2 top-[60%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <h1 className="text-yellow-primary font-primary font-bold uppercase leading-none text-[28px] sm:text-[42px] md:text-[55px] lg:text-[90px] xl:text-[110px]">
                    {title1} <br /> {title2}
                </h1>
            </div>


        </section>
    );
}


