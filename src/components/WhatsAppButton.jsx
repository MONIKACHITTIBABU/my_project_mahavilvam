import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7904105103"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-4 right-4
        sm:bottom-5 sm:right-5
        md:bottom-6 md:right-6
        lg:bottom-8 lg:right-8
        xl:bottom-10 xl:right-10
        z-50
      "
    >
      <div
        className="
          relative
          flex items-center justify-center
          w-20 h-20
          md:w-28 md:h-28
        "
      >
        {/* Rotating Text */}
        <div className="absolute inset-0 animate-spin-clockwise">
          <svg viewBox="0 0 140 140" className="w-full h-full">
            <defs>
              <path
                id="callCircle"
                d="M70,70 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
              />
            </defs>

            <text
              className="
                text-[10px]
                sm:text-[12px]
                md:text-[14px]
              "
              fontWeight="600"
              letterSpacing="3"
            >
              <textPath href="#callCircle">
                <tspan fill="#ffffff">BOOK YOUR . </tspan>
                <tspan fill="#FFA500">DIVINE PLANT </tspan>
                <tspan fill="#ffffff">.</tspan> 
              </textPath>
            </text>
          </svg>
        </div>

        {/* WhatsApp Icon */}
        <div
          className="
            rounded-full
            bg-[#25D366]
            flex items-center justify-center
            shadow-xl
            z-10

           p-1.5
md:p-2
          "
        >
          <FaWhatsapp
            className="
              text-white
              text-xl
              sm:text-2xl
              md:text-3xl
            "
          />
        </div>
      </div>
    </a>
  );
}
