import { FaHeartbeat } from "react-icons/fa";

import Logo from "../../assets/footer/logo black.svg";
import Eshop from "../../assets/footer/E-Shop.svg";

import facebook from "../../assets/footer/002-facebook-logo.svg";
import twitter from "../../assets/footer/001-twitter-logo-silhouette.svg";
import linkedin from "../../assets/footer/004-linkedin-logo.svg";
import instagram from "../../assets/footer/instagram (1).svg";
import youtube from "../../assets/footer/005-youtube.svg";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 min-[460px]:grid-cols-2 min-[700px]:grid-cols-3 min-[850px]:grid-cols-4 gap-10 pb-10 sm:max-w-[90%] max-w-[96%] mx-auto">
        <div className="flex flex-col sm:basis-1/3 gap-10 mb-7">
          <div className="flex items-center gap-3">
            <img className="cursor-pointer" src={Logo} alt="logo" />
            <img className="cursor-pointer" src={Eshop} alt="logo text" />
          </div>
          <p className="text-gray-600 text-sm">
            High quality scandinavian furniture made from eco-friendly
            materials. Designed for modern, minimalist apartments
          </p>
          <div className="flex gap-8 items-center">
            <img
              className="cursor-pointer"
              src={facebook}
              alt="facebook icon"
            />
            <img className="cursor-pointer" src={twitter} alt="twitter icon" />
            <img
              className="cursor-pointer"
              src={linkedin}
              alt="linkedin icon"
            />
            <img
              className="cursor-pointer"
              src={instagram}
              alt="instagram icon"
            />
            <img className="cursor-pointer" src={youtube} alt="youtube icon" />
          </div>
        </div>

        <div className="text-sm sm:ml-auto">
          <h3 className="mb-6">Shopping online</h3>
          <ul className="list-none flex flex-col gap-1">
            <li className="cursor-pointer">Order Status</li>
            <li className="cursor-pointer">Shipping and Delivery</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">Payment Options</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="text-sm min-[700px]:ml-auto">
          <h3 className="mb-6">Information</h3>
          <ul className="list-none flex flex-col gap-1">
            <li className="cursor-pointer">Gift Cards</li>
            <li className="cursor-pointer">Find a store</li>
            <li className="cursor-pointer">Newsletter</li>
            <li className="cursor-pointer">Become a member</li>
            <li className="cursor-pointer">Site feedback</li>
          </ul>
        </div>
        <div className="text-sm min-[700px]:ml-auto">
          <h3 className="mb-6">Contact</h3>
          <ul className="list-none flex flex-col gap-1">
            <li className="cursor-pointer">Store@uikit.com</li>
            <li className="cursor-pointer">Hotline: +1 131 138 138</li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-gray-200 border-solid text-xs text-gray-400 font-semibold py-3 flex items-center justify-center flex-wrap gap-2 uppercase">
        <p className="flex text-[12px] items-center gap-1">
          Built with <FaHeartbeat className="text-red-700 inline-block" /> by
          Salsod
        </p>
        <p className="text-[10px]">
          design by iceo.co - &copy; 2023. All right reserved.
        </p>
      </div>
    </footer>
  );
}
