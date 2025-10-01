import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { assets } from "../../assets/assets";
import DiagonalBox from "../DiagonalBox";

const Popup = ({ setPopup }) => {
  // State for checkboxes
  const [options, setOptions] = useState({
    EarlyAccess: true,
    FirstInvites: true,
    Updates: true,
    Policy: false,
  });

  const handleOptionChange = (name) => {
    setOptions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Name: e.target.name.value,
      Email: e.target.email.value,
      City: e.target.city.value,
      ...options, // include checkbox options
    };
    // https://blknws-backend.onrender.com/api/submit-form
    try {
      const res = await fetch(
        "https://blknws-backend.onrender.com/api/submit-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      console.log(res);

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Form submitted successfully!");
      e.target.reset(); // reset form inputs
      setOptions({ EarlyAccess: true, FirstInvites: true, Updates: true }); // reset checkboxes
      setPopup(false); // close popup
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div
      className=" popup-main fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-40"
      onClick={() => setPopup(false)} // backdrop click
    >
      <div
        className="w-full max-w-sm sm:max-w-lg md:max-w-2xl relative p-1 sm:p-6 md:p-8 
                   my-2 sm:my-8 
                   h-[96vh] sm:h-auto sm:max-h-screen z-40 "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={assets.backSvg}
          className="hidden md:block menu-bg-img relative w-100% object-cover sm:object-contain md:w-full md:h-100%"
        />
        <img
          src={assets.backSvg}
          className="block md:hidden menu-bg-img relative "
        />
        <div
          className="absolute left-[5%] sm:left-[10%] md:left-[27%] 
                        top-4 sm:top-12 
                        w-[100%] sm:w-auto 
                        h-[calc(50%-2rem)] sm:h-auto
                        flex flex-col justify-center sm:justify-start md:w-[500px] md:-ml-11  "
        >
          <div className="text-center mb-3 sm:mb-0 md:-ml-14 rsvp-main-div">
            <h1
              className="text-lg md:-ml-8 sm:text-xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 mb-2 sm:mb-4  item-center justify-center flex mx-auto"
              style={{
                fontWeight: 400,
                fontSize: "clamp(18px, 4vw, 32px)",
                fontStyle: "regular",
              }}
            >
              R S V P
            </h1>
            <button
              className="absolute right-12 cursor-pointer md:hidden top-3 md:top-0 "
              onClick={() => setPopup(false)}
            >
              x
            </button>
            {/* <p
              className="text-[12px] sm:text-sm md:text-base font-regular -ml-9.5  "
              style={{ fontWeight: 400, fontSize: "clamp(12px, 3.5vw, 14px)" }}
            >
              JOIN THE MOVEMENT
            </p> */}
          </div>

          <form
            className=" popup-form space-y-2.5 sm:space-y-2 flex-1 flex flex-col justify-center z-[40]  md:ml-1 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              style={{ fontWeight: 400, fontSize: "16px" }}
              className="w-[90%] sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:text-[black] placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              style={{ fontWeight: 400, fontSize: "16px" }}
              className="w-[90%] sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:font-medium placeholder:text-[black] focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <select
              name="city"
              defaultValue=""
              style={{ fontWeight: 400, fontSize: "13px" }}
              className="w-[90%] sm:w-[38%] h-10 sm:h-11 md:h-11 md:w-[400px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer appearance-none"
              required
            >
              <option value="" disabled>
                YOUR CITY/COUNTRY
              </option>
              <optgroup label="United States">
                <option>Atlanta, GA</option>
                <option>Austin, TX</option>
                <option>Boston, MA</option>
                <option>Chicago, IL</option>
                <option>Dallas, TX</option>
                <option>Denver, CO</option>
                <option>Detroit, MI</option>
                <option>Honolulu, HI</option>
                <option>Houston, TX</option>
                <option>Las Vegas, NV</option>
                <option>Los Angeles, CA</option>
                <option>Miami, FL</option>
                <option>Minneapolis, MN</option>
                <option>Nashville, TN</option>
                <option>New Orleans, LA</option>
                <option>New York, NY</option>
                <option>Orlando, FL</option>
                <option>Philadelphia, PA</option>
                <option>Phoenix, AZ</option>
                <option>Portland, OR</option>
                <option>San Diego, CA</option>
                <option>San Francisco, CA</option>
                <option>Seattle, WA</option>
                <option>Washington, DC</option>
              </optgroup>

              <optgroup label="United Kingdom">
                <option>Belfast</option>
                <option>Birmingham</option>
                <option>Brighton</option>
                <option>Bristol</option>
                <option>Cambridge</option>
                <option>Cardiff</option>
                <option>Edinburgh</option>
                <option>Glasgow</option>
                <option>Leeds</option>
                <option>Leicester</option>
                <option>Liverpool</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Newcastle upon Tyne</option>
                <option>Nottingham</option>
                <option>Oxford</option>
                <option>Sheffield</option>
                <option>Southampton</option>
              </optgroup>

              <optgroup label="Africa">
                <option>Lagos, Nigeria</option>
                <option>Abuja, Nigeria</option>
                <option>Kano, Nigeria</option>
                <option>Port Harcourt, Nigeria</option>
                <option>Ibadan, Nigeria</option>
                <option>Nairobi, Kenya</option>
                <option>Mombasa, Kenya</option>
                <option>Kisumu, Kenya</option>
                <option>Cairo, Egypt</option>
                <option>Alexandria, Egypt</option>
                <option>Giza, Egypt</option>
                <option>Luxor, Egypt</option>
                <option>Aswan, Egypt</option>
                <option>Johannesburg, South Africa</option>
                <option>Cape Town, South Africa</option>
                <option>Durban, South Africa</option>
                <option>Pretoria, South Africa</option>
                <option>Port Elizabeth, South Africa</option>
                <option>Accra, Ghana</option>
                <option>Kumasi, Ghana</option>
                <option>Tamale, Ghana</option>
                <option>Addis Ababa, Ethiopia</option>
                <option>Dire Dawa, Ethiopia</option>
                <option>Mekelle, Ethiopia</option>
                <option>Casablanca, Morocco</option>
                <option>Marrakech, Morocco</option>
                <option>Rabat, Morocco</option>
                <option>Fes, Morocco</option>
                <option>Dar es Salaam, Tanzania</option>
                <option>Dodoma, Tanzania</option>
                <option>Arusha, Tanzania</option>
                <option>Dakar, Senegal</option>
                <option>Saint-Louis, Senegal</option>
                <option>Kampala, Uganda</option>
                <option>Entebbe, Uganda</option>
                <option>Abidjan, Ivory Coast</option>
                <option>Yamoussoukro, Ivory Coast</option>
              </optgroup>
            </select>

            <div className=" w-full space-y-1.5 sm:space-y-2 md:space-y-4  mt-3 sm:mt-6">
              {/* Option 1 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  color="black"
                  className="h-[16px] w-[16px] sm:h-[16px] sm:w-[16px] "
                  checked={options.Policy}
                  onChange={() => handleOptionChange("Policy")}
                />
                <label className="text-xs w-[80%] sm:text-sm md:text-sm font-normal">
                  I agree to receive marketing emails and understand that my
                  data may be used for remarketing and profiling
                </label>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <DiagonalBox
                  initial={true}
                  size={16}
                  sm:size={20}
                  stroke={2}
                  color="black"
                />
                <label className="text-xs sm:text-sm md:text-sm font-normal">
                  EARLY ACCESS TO EXCLUSIVE MATERIAL
                </label>
              </div>

              {/* Option 2 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <DiagonalBox
                  initial={true}
                  size={16}
                  sm:size={20}
                  stroke={2}
                  color="black"
                />
                <label className="text-xs sm:text-sm md:text-sm font-normal">
                  FIRST INVITES TO SCREENINGS IN YOUR CITY
                </label>
              </div>

              {/* Option 3 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <DiagonalBox
                  initial={true}
                  size={16}
                  sm:size={20}
                  stroke={2}
                  color="black"
                />
                <label className="text-xs sm:text-sm md:text-sm font-normal">
                  UPDATES FROM THE BLKNWS TEAM
                </label>
              </div>
            </div>

            <div className="pt-0 sm:pt-0 md:pt-6 w-full flex items-center justify-center">
              <button
                type="submit"
                className="w-[160px] sm:w-[200px] ml-[-40px] bg-black hover:bg-gray-800 text-white h-7 sm:h-7 md:h-12 text-sm sm:text-base md:text-lg font-bold tracking-wider rounded-md cursor-pointer md:-ml-[100px] "
                style={{ fontWeight: 400, fontSize: "clamp(16px, 4vw, 24px)" }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
