import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { assets } from "../../assets/assets";
import DiagonalBox from "../DiagonalBox";

const allCities = [
  { city: "Atlanta, GA", group: "United States" },
  { city: "Austin, TX", group: "United States" },
  { city: "Boston, MA", group: "United States" },
  { city: "Chicago, IL", group: "United States" },
  { city: "Dallas, TX", group: "United States" },
  { city: "Denver, CO", group: "United States" },
  { city: "Detroit, MI", group: "United States" },
  { city: "Honolulu, HI", group: "United States" },
  { city: "Houston, TX", group: "United States" },
  { city: "Las Vegas, NV", group: "United States" },
  { city: "Los Angeles, CA", group: "United States" },
  { city: "Miami, FL", group: "United States" },
  { city: "Minneapolis, MN", group: "United States" },
  { city: "Nashville, TN", group: "United States" },
  { city: "New Orleans, LA", group: "United States" },
  { city: "New York, NY", group: "United States" },
  { city: "Orlando, FL", group: "United States" },
  { city: "Philadelphia, PA", group: "United States" },
  { city: "Phoenix, AZ", group: "United States" },
  { city: "Portland, OR", group: "United States" },
  { city: "San Diego, CA", group: "United States" },
  { city: "San Francisco, CA", group: "United States" },
  { city: "Seattle, WA", group: "United States" },
  { city: "Washington, DC", group: "United States" },
  { city: "Toronto, ON", group: "Canada" },
  { city: "Vancouver, BC", group: "Canada" },
  { city: "Montreal, QC", group: "Canada" },
  { city: "Calgary, AB", group: "Canada" },
  { city: "Ottawa, ON", group: "Canada" },
  { city: "Edmonton, AB", group: "Canada" },
  { city: "Winnipeg, MB", group: "Canada" },
  { city: "Quebec City, QC", group: "Canada" },
  { city: "Hamilton, ON", group: "Canada" },
  { city: "Kitchener, ON", group: "Canada" },
  { city: "Halifax, NS", group: "Canada" },
  { city: "Victoria, BC", group: "Canada" },
  { city: "Belfast", group: "United Kingdom" },
  { city: "Birmingham", group: "United Kingdom" },
  { city: "Brighton", group: "United Kingdom" },
  { city: "Bristol", group: "United Kingdom" },
  { city: "Cambridge", group: "United Kingdom" },
  { city: "Cardiff", group: "United Kingdom" },
  { city: "Edinburgh", group: "United Kingdom" },
  { city: "Glasgow", group: "United Kingdom" },
  { city: "Leeds", group: "United Kingdom" },
  { city: "Leicester", group: "United Kingdom" },
  { city: "Liverpool", group: "United Kingdom" },
  { city: "London", group: "United Kingdom" },
  { city: "Manchester", group: "United Kingdom" },
  { city: "Newcastle upon Tyne", group: "United Kingdom" },
  { city: "Nottingham", group: "United Kingdom" },
  { city: "Oxford", group: "United Kingdom" },
  { city: "Sheffield", group: "United Kingdom" },
  { city: "Southampton", group: "United Kingdom" },
  { city: "Lagos, Nigeria", group: "Africa" },
  { city: "Abuja, Nigeria", group: "Africa" },
  { city: "Kano, Nigeria", group: "Africa" },
  { city: "Port Harcourt, Nigeria", group: "Africa" },
  { city: "Ibadan, Nigeria", group: "Africa" },
  { city: "Nairobi, Kenya", group: "Africa" },
  { city: "Mombasa, Kenya", group: "Africa" },
  { city: "Kisumu, Kenya", group: "Africa" },
  { city: "Cairo, Egypt", group: "Africa" },
  { city: "Alexandria, Egypt", group: "Africa" },
  { city: "Giza, Egypt", group: "Africa" },
  { city: "Luxor, Egypt", group: "Africa" },
  { city: "Aswan, Egypt", group: "Africa" },
  { city: "Johannesburg, South Africa", group: "Africa" },
  { city: "Cape Town, South Africa", group: "Africa" },
  { city: "Durban, South Africa", group: "Africa" },
  { city: "Pretoria, South Africa", group: "Africa" },
  { city: "Port Elizabeth, South Africa", group: "Africa" },
  { city: "Accra, Ghana", group: "Africa" },
  { city: "Kumasi, Ghana", group: "Africa" },
  { city: "Tamale, Ghana", group: "Africa" },
  { city: "Addis Ababa, Ethiopia", group: "Africa" },
  { city: "Dire Dawa, Ethiopia", group: "Africa" },
  { city: "Mekelle, Ethiopia", group: "Africa" },
  { city: "Casablanca, Morocco", group: "Africa" },
  { city: "Marrakech, Morocco", group: "Africa" },
  { city: "Rabat, Morocco", group: "Africa" },
  { city: "Fes, Morocco", group: "Africa" },
  { city: "Dar es Salaam, Tanzania", group: "Africa" },
  { city: "Dodoma, Tanzania", group: "Africa" },
  { city: "Arusha, Tanzania", group: "Africa" },
  { city: "Dakar, Senegal", group: "Africa" },
  { city: "Saint-Louis, Senegal", group: "Africa" },
  { city: "Kampala, Uganda", group: "Africa" },
  { city: "Entebbe, Uganda", group: "Africa" },
  { city: "Abidjan, Ivory Coast", group: "Africa" },
  { city: "Yamoussoukro, Ivory Coast", group: "Africa" },
  { city: "Other - Mainland Europe", group: "Other" },
  { city: "Other - Asia", group: "Other" },
  { city: "Other - Australia/Oceania", group: "Other" },
  { city: "Other - South America", group: "Other" },
  { city: "Other - Caribbean", group: "Other" },
  { city: "Other - Middle East", group: "Other" },
];

const Popup = ({ setPopup }) => {
  // State for checkboxes
  const [options, setOptions] = useState({
    EarlyAccess: true,
    FirstInvites: true,
    Updates: true,
    Policy: false,
  });

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCities = search
    ? allCities.filter((item) =>
        item.city.toLowerCase().includes(search.toLowerCase())
      )
    : allCities;

  const handleSelect = (city) => {
    setSelected(city);
    setSearch("");
    setIsOpen(false);
  };

  let currentGroup = "";
  const cityElements = [];

  for (let i = 0; i < filteredCities.length; i++) {
    const item = filteredCities[i];

    if (item.group !== currentGroup) {
      currentGroup = item.group;
      cityElements.push(
        <div
          key={`group-${i}`}
          className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50"
        >
          {item.group}
        </div>
      );
    }

    cityElements.push(
      <div
        key={`city-${i}`}
        onClick={() => handleSelect(item.city)}
        className="px-3 sm:px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-center"
      >
        {item.city}
      </div>
    );
  }

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
              className="absolute right-12 cursor-pointer md:hidden top-5 md:top-0 "
              onClick={() => setPopup(false)}
            >
              x
            </button>
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
            <div
              className="relative w-[90%] sm:w-[38%] md:w-[400px]"
              ref={wrapperRef}
            >
              <input
                type="text"
                value={search || selected}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelected("");
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="YOUR CITY/COUNTRY"
                className="w-full sm:w-[88%] h-10 sm:h-11 md:h-11 md:w-[400px] placeholder:text-[13px] bg-white border border-gray-300 rounded-md px-3 sm:px-4 text-center text-sm sm:text-base font-regular placeholder:font-medium placeholder:text-[black] focus:outline-none focus:ring-2 focus:ring-gray-400"
                style={{ fontWeight: 400, fontSize: "13px" }}
              />

              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto">
                  {cityElements.length > 0 ? (
                    cityElements
                  ) : (
                    <div className="px-3 sm:px-4 py-2 text-sm text-gray-500 text-center">
                      No cities found
                    </div>
                  )}
                </div>
              )}

              <input type="hidden" name="city" value={selected} required />
            </div>

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
