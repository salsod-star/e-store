import shippingIcon from "../../assets/shipping icon.svg";
import paymentIcon from "../../assets/payment icon.svg";
import qualityIcon from "../../assets/quality icon.svg";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function Features() {
  return (
    <section className="py-24 sm:max-w-[90%] max-w-[96%] mx-auto">
      <h2 className="text-2xl text-gray-700 text-center">
        Why should you choose us?
      </h2>
      <div className="grid grid-cols-1 justify-items-center min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-cols-auto gap-12 mt-20">
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-3 px-3 h-16 w-16 self-start bg-gray-100 rounded-lg">
            <img
              src={shippingIcon}
              alt="shipping icon"
              className="w-8 h-auto"
            />
          </div>
          <h3 className="text-lg  mt-7 mb-5">Free Shipping</h3>
          <p className="text-gray-600 text-sm">
            All purchases over $399 are eligible for free shipping via UPS Pack
            and Ship
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-3 px-3 h-16 w-16 self-start bg-gray-100 rounded-lg">
            <img src={paymentIcon} alt="payment icon" className="w-8 h-auto" />
          </div>
          <h3 className="text-lg mt-7 mb-5">Easy Payments</h3>
          <p className="text-gray-600 text-sm">
            All payments are processed instantly over a secure payment protocols
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-3 px-3 h-16 w-16 self-start bg-gray-100 rounded-lg">
            <AiOutlineDollarCircle className="w-8 h-auto" />
          </div>
          <h3 className="text-lg mt-7 mb-5">Money-Back Guarantee</h3>
          <p className="text-gray-600 text-sm">
            If an item arrived damaged or you changed your mind, you can send it
            back for a full refund.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-3 px-3 h-16 w-16 self-start bg-gray-100 rounded-lg">
            <img src={qualityIcon} alt="quality icon" className="w-8 h-auto" />
          </div>
          <h3 className="text-lg mt-7 mb-5">Finest Quality</h3>
          <p className="text-gray-600 text-sm">
            Designed to last, each of our products has been crafted with the
            finest materials.
          </p>
        </div>
      </div>
    </section>
  );
}
