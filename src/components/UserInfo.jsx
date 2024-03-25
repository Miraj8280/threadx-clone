import { useSelector } from "react-redux";
import user from "../assets/user.png";

const UserInfo = () => {
  // Selecting quote from Redux store state
  const quote = useSelector((state) => state.quote.quote);

  return (
    // Container for user information
    <div className="w-[30rem] text-white md:block hidden">
      {/* Header section */}
      <div className="bg-black h-[56px] text-white flex items-center justify-center border-b border-[#323232]">
        {/* Title */}
        <h1 className="font-medium text-2xl">Quotverse</h1>
      </div>
      {/* User information */}
      <div className="px-10 pt-8">
        {/* User avatar */}
        <img src={user} alt="" className="w-[64px] h-[64px] rounded-full" />
        {/* User name */}
        <h1 className="text-xl font-medium mt-2">Jhon Doe</h1>
        {/* User username */}
        <p className="text-sm my-2">jhondoe</p>
        {/* User bio */}
        <p className="text-sm">UI Developer | {"Let's"} redesign the world</p>
        {/* Displaying quote likes count */}
        {quote.length > 0 && (
          <p className="text-[#616161] mt-3">
            {quote.length} {quote.length > 1 ? "likes" : "like"}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
