import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7904105103"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-8 bottom-8 z-50"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Rotating BOOK YOUR PLANT Text */}
        <div className="absolute inset-0 animate-spin-clockwise">
          <svg viewBox="0 0 140 140" className="w-full h-full">
            <defs>
              <path
                id="callCircle"
                d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
              />
            </defs>

            <text fontSize="14" fontWeight="700" letterSpacing="1">
              <textPath href="#callCircle">
                <tspan fill="#ffffff">BOOK YOUR </tspan>
                <tspan fill="#D9A329">PLANT</tspan>
                <tspan fill="#ffffff"> • </tspan>

                <tspan fill="#ffffff">BOOK YOUR </tspan>
                <tspan fill="#D9A329">PLANT</tspan>
                <tspan fill="#ffffff"> • </tspan>

                <tspan fill="#ffffff">BOOK YOUR </tspan>
                <tspan fill="#D9A329">PLANT</tspan>
              </textPath>
            </text>
          </svg>
        </div>
        {/* WhatsApp Icon */}
        <div
          className="
            w-20
            h-20
            rounded-full
            bg-[#25D366]
            flex
            items-center
            justify-center
            shadow-xl
          "
        >
          <FaWhatsapp className="text-white" size={60} />
        </div>
      </div>
    </a>
  );
}
