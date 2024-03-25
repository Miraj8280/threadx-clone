import { useDispatch, useSelector } from "react-redux";
import { setActiveFeed } from "../redux/feedSlice";
import { setActiveTag } from "../redux/tagSlice";
import { toggleActiveMenu } from "../redux/menuSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";
import { BiMenuAltRight } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  // Redux hooks for dispatching actions and selecting state
  const dispatch = useDispatch();
  const activeFeed = useSelector((state) => state.feed.activeFeed);

  // Function to handle click on feed buttons
  const handleClick = (type) => {
    dispatch(setActiveFeed(type)); // Dispatch action to set active feed
    dispatch(setActiveTag("")); // Reset active tag
  };

  // Function to handle click on menu button
  const handleMenu = () => {
    dispatch(toggleActiveMenu()); // Dispatch action to toggle menu
  };

  // Check if "Home" feed is active
  const isHomeActive = activeFeed === "Home";

  return (
    <div className="flex flex-row bg-black h-[56px] text-white md:w-full w-full">
      {/* Header content */}
      <div className="w-full flex justify-around border-b border-l border-[#323232] items-center">
        {/* Home button */}
        <div>
          <button className="header-button" onClick={() => handleClick("Home")}>
            {isHomeActive ? ( // Render appropriate icon based on active feed
              <FontAwesomeIcon icon={faHouse} className="icon" />
            ) : (
              <AiOutlineHome className="icon" />
            )}
          </button>
        </div>
        {/* Like button */}
        <div className="">
          <button className="header-button" onClick={() => handleClick("Like")}>
            {isHomeActive ? (
              <FontAwesomeIcon icon={faHeart} className="icon" />
            ) : (
              <FcLike className="icon" />
            )}
          </button>
        </div>
        {/* Menu button */}
        <div className="block md:hidden">
          <BiMenuAltRight
            className="icon"
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={handleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
