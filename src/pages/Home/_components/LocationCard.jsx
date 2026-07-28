export default function LocationCard({ title, image, video, imageAlt }) {
  return (
    <div className="w-full lg:max-w-[500px] xl:max-w-[520px] rounded-3xl border-2 border-[#C89B3C] bg-black overflow-hidden flex flex-col">
      {/* Title: bottom on mobile, top on desktop */}
      <div className="order-last md:order-first py-6 flex items-center justify-center">
        <h2 className="location-card-text gold-gradient-text">
          {title}
        </h2>
      </div>

      {/* Media: stacked on mobile, side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-68 md:h-full object-cover"
        />
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-68 md:h-full object-cover"
        />
      </div>
    </div>
  );
}
