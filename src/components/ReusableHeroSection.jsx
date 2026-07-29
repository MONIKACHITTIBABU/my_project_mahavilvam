import Hanging from "../assets/images/HomePageImages/HeroImages/Hanging.png";

export default function ReusableHeroSection({
    title1,
    title2,
}) {
    return (
        <section
            className="relative w-full min-h-[calc(100vh-30vh)] md:min-h-screen bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Hanging Decorations */}
            <div className="absolute inset-0 w-full h-full flex justify-between items-start">
                {/* Left Hanging */}
                <img
                    src={Hanging}
                    alt="Left Hanging"
                    className="h-50 xl:h-65 2xl:h-96 w-auto object-cover event-pointer-none "
                />

                {/* Right Hanging */}
                <img
                    src={Hanging}
                    alt="Right Hanging"
                    className="h-50 xl:h-65 2xl:h-96 rotate-y-180 w-auto object-cover event-pointer-none "
                />
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 w-full h-[60vh] bg-gradient-to-t from-[#A78116] via-black/10 to-transparent z-20"></div>

            {/* Background Opacity Text */}
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                <h1 className="reusable-hero-bg-heading text-yellow-primary ">
                    {title1}
                    <br />
                    {title2}
                </h1>
            </div>

            {/* Main Title */}
            <div className="relative z-20 text-center">
                <h1 className="reusable-hero-heading text-yellow-primary">
                    {title1} <br /> {title2}
                </h1>
            </div>
        </section>
    );
}