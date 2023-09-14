import Navbar from "./Navbar";
import friedHilsha from "../../assets/images/fried-hilsha.jpg";
import beefNihari from "../../assets/images/beef-nihari.jpg";
import bunaKhicury from "../../assets/images/buna-khicury.jpg";
import ilishBiriany from "../../assets/images/ilish-biriany.jpg";
const Header = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Navbar></Navbar>
      <div className="carousel w-full lg:max-h-[500px] md:max-h-[500px] h-auto mt-5">
        <div id="slide1" className="carousel-item relative w-full">
          {/* banner  */}
          <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center max-w-[900px] mx-auto gap-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">Fried Hilsha Fish</h1>
              <p>
                Fried Hilsa fish is a cherished delicacy in the Indian
                subcontinent, featuring marinated Hilsa fish deep-fried to a
                golden crisp while retaining its succulent flavor. It's a
                must-try for seafood enthusiasts seeking a taste of coastal
                cuisine at its finest.
              </p>
              <button className="btn btn-primary bg-[#5F8D0A] hover:bg-[hsl(101,87%,30%)] border-none">
                View Details
              </button>
            </div>
            <div className="lg:min-w-[500px] md:min-w-[500px] min-w-full h-full">
              <img
                className="w-full h-full"
                src={friedHilsha}
                alt="freid hilsha"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 md:left-5 left-1 lg:right-5 md:right-5 right-1 lg:top-1/2 md:top-1/2 top-1/4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center max-w-[900px] mx-auto gap-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">Beef Nihari</h1>
              <p>
                Beef Nihari in Bangladesh is a slow-cooked, aromatic stew made
                with tender beef chunks simmered in a flavorful blend of spices
                and herbs. This rich and hearty dish is traditionally enjoyed as
                a breakfast item, delivering a burst of bold, savory flavors
                that awaken the taste buds.
              </p>
              <button className="btn btn-primary bg-[#5F8D0A] hover:bg-[hsl(101,87%,30%)] border-none">
                View Details
              </button>
            </div>
            <div className="lg:min-w-[500px] md:min-w-[500px] min-w-full h-full">
              <img
                className="w-full h-full"
                src={beefNihari}
                alt="freid hilsha"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 md:left-5 left-1 lg:right-5 md:right-5 right-1 lg:top-1/2 md:top-1/2 top-1/4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center max-w-[900px] mx-auto gap-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">Buna Khicury</h1>
              <p>
                Buna Khichuri, a popular Bangladeshi dish, is a comforting and
                flavorful combination of rice and lentils cooked with an array
                of spices and aromatic herbs. It's typically served with a side
                of fried eggplant, spicy pickles, and sometimes a fried egg,
                making it a satisfying and well-rounded meal loved by many.
              </p>
              <button className="btn btn-primary bg-[#5F8D0A] hover:bg-[hsl(101,87%,30%)] border-none">
                View Details
              </button>
            </div>
            <div className="lg:min-w-[500px] md:min-w-[500px] min-w-full h-full">
              <img
                className="w-full h-full"
                src={bunaKhicury}
                alt="freid hilsha"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 md:left-5 left-1 lg:right-5 md:right-5 right-1 lg:top-1/2 md:top-1/2 top-1/4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center max-w-[900px] mx-auto gap-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">Ilish Biriany</h1>
              <p>
                Ilish Biryani is a delectable Bangladeshi dish that combines the
                unique flavor of Hilsa fish with fragrant basmati rice, aromatic
                spices, and rich gravy. The tender Hilsa fish, marinated and
                layered with rice, creates a harmonious blend of flavors that is
                both luxurious and deeply satisfying for seafood enthusiasts.
              </p>
              <button className="btn btn-primary bg-[#5F8D0A] hover:bg-[hsl(101,87%,30%)] border-none">
                View Details
              </button>
            </div>
            <div className="lg:min-w-[500px] md:min-w-[500px] min-w-full">
              <img className="w-full" src={ilishBiriany} alt="freid hilsha" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 md:left-5 left-1 lg:right-5 md:right-5 right-1 lg:top-1/2 md:top-1/2 top-1/4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
