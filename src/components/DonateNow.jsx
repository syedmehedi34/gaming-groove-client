import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaUnlockAlt,
} from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

const DonateNow = () => {
  return (
    <div className="rounded-t-[64px] py-12 flex flex-col justify-center items-center bg-gradient-to-b from-slate-200 to-[rgba(248,250,252,0.25)]">
      <h1 className="text-4xl font-bold mb-6  partial-underline ">
        Donate Now
      </h1>
      <div className="flex gap-5 mb-5">
        <p className="flex items-center gap-2 ">
          <input type="checkbox" className="checkbox" /> One Time
        </p>
        <p className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" /> Monthly
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <p className="border border-black w-full py-3 bg-white btn rounded-md hover:bg-gray-100 cursor-pointer">
            $10
          </p>
          <p className="border border-black w-full py-3 bg-white btn rounded-md hover:bg-gray-100 cursor-pointer">
            $20
          </p>
          <p className="border border-black w-full py-3 bg-white btn rounded-md hover:bg-gray-100 cursor-pointer">
            $30
          </p>
          <p className="border border-black w-full py-3 bg-white btn rounded-md hover:bg-gray-100 cursor-pointer">
            $50
          </p>
          <div className="col-span-2 w-full">
            <label className="input input-bordered rounded-md flex items-center gap-2">
              <FiDollarSign />
              <input
                type="text"
                className="grow border-none focus:outline-none"
                placeholder="Custom Amount"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Choose payment */}
      <div className="flex flex-col md:flex-row items-center gap-3 my-6">
        <h2 className="text-2xl font-semibold ">Choose Payment</h2>
        <div className="flex items-center gap-2 badge bg-gray-400 p-2 rounded-md">
          <FaUnlockAlt />
          <span>SECURE</span>
        </div>
      </div>

      {/* Terms and Conditions */}
      <h2 className="flex items-center gap-2 mb-5">
        <input type="checkbox" className="checkbox" />
        <span className="text-sm md:text-[16px]">I agree to the </span>
        <span className="text-blue-900 underline cursor-pointer text-sm md:text-[16px]">
          Terms & Conditions.
        </span>
      </h2>

      {/* Payment Method Icons */}
      <div className="flex items-center justify-center gap-5 mb-6">
        <FaCcVisa size={50} className="text-blue-800" />
        <FaCcPaypal size={50} className="text-blue-600" />
        <FaCcMastercard size={50} className="text-red-700" />
        <FaCcDiscover size={50} className="text-orange-600" />
      </div>

      {/* Donate Button */}
      <button className="btn mt-7 btn-neutral hover:bg-gray-700 text-white rounded-md">
        Donate Now
      </button>
    </div>
  );
};

export default DonateNow;
