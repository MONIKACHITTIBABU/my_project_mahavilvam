import LocationnBg from "../assets/images/LocationImages/LocationHeroImages/LocationnBg.png";

export default function ReusableHeroSection({
    title1,
    title2,
}) {
    return (
        <section
            className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen lg:h-screen xl:h-screen flex items-center justify-center"
        >
            <img
                src={LocationnBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 xl:-bottom-24 2xl:-bottom-24 z-10 opacity-15 w-full h-full text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[170px] 2xl:text-[170px] text-yellow-primary font-primary font-bold uppercase leading-none">
                    {title1} <br />{title2}
                </h1>
            </div>

            {/* Title */}
            <div className="relative z-20 font-primary bottom-3 sm:bottom-5 md:bottom-7 lg:bottom-7 xl:bottom-7 text-center justify-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[110px] 2xl:text-[170px] text-yellow-primary font-primary font-bold uppercase leading-none">
                    {title1} <br />{title2}
                </h1>
            </div>
        </section>
    );
}