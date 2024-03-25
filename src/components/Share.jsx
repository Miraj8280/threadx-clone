import { useState } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// ShareButton component to handle sharing functionality
// eslint-disable-next-line react/prop-types
const ShareButton = ({ data }) => {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Destructuring data prop
  // eslint-disable-next-line react/prop-types
  const { title, text } = data;
  const shareUrl = window.location.href; // Current page URL

  // Function to handle share button click
  const handleShareClick = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <div className="relative">
      {/* Share button */}
      <button onClick={handleShareClick}>
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="absolute flex items-center justify-center p-4 shadow-xl rounded-2xl bg-white">
          <div className="flex text-black gap-2">
            {/* Facebook share button */}
            <FacebookShareButton url={shareUrl} quote={text}>
              <FacebookIcon size={40} round/>
            </FacebookShareButton>
            
            {/* Whatsapp share button */}
            <WhatsappShareButton url={shareUrl} title={title}>
              <WhatsappIcon size={40} round/>
            </WhatsappShareButton>
            
            {/* Twitter share button */}
            <TwitterShareButton url={shareUrl} subject={title} body={text}>
              <TwitterIcon size={40} round/>
            </TwitterShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
