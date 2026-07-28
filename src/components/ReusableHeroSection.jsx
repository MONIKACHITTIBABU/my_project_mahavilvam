import LocationnBg from "../assets/images/LocationImages/LocationHeroImages/LocationnBg.png";
import MobileBg from "../assets/images/LocationImages/LocationHeroImages/MobileBg.png";

export default function ReusableHeroSection({
    title1,
    title2,
}) {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Desktop Background */}
            <img src={LocationnBg} alt="" className="hidden lg:block absolute inset-0 w-full h-full object-cover object-top z-0" />

            {/* Mobile Background */}
            <img src={MobileBg} alt="" className="block lg:hidden absolute inset-0 w-full h-full object-cover object-top z-0" />

            {/* Falling Leaves Layer (Sits at z-1, behind text/gradient overlay) */}
            

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 w-full h-[60vh] bg-gradient-to-t from-[#A78116] via-black/10 to-transparent z-20"></div>

            {/* Background Opacity Text */}

            <div className="absolute left-1/2 top-[50%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-full flex justify-center">
                <h1 className="w-[90%] lg:w-full text-center text-yellow-primary font-primary font-bold uppercase opacity-15 leading-none text-[60px] sm:text-[80px] md:text-[100px] lg:text-[170px] xl:text-[190px]">
                    {title1}
                    <br />
                    {title2}
                </h1>
            </div>

            {/* Main Title */}
            <div className="relative z-20 text-center">
                <h1 className="text-yellow-primary font-primary font-bold uppercase leading-none text-[28px] sm:text-[42px] md:text-[55px] lg:text-[90px] xl:text-[110px]">
                    {title1} <br /> {title2}
                </h1>
            </div>
        </section>
    );
}