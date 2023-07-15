import React from "react";

// for share buttons
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareButton = (props) => {
  return (
    <>
      <EmailShareButton subject={`Your created URL ${props.link}`}>
        <EmailIcon
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />
      </EmailShareButton>
      <FacebookShareButton
        url={props.link}
        title="Check out this link! Created Using *link-कर*"
      >
        <FacebookIcon
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />
      </FacebookShareButton>
      <WhatsappShareButton
        url={props.link}
        title="Check out this link! Created Using *link-कर*"
      >
        <WhatsappIcon
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={props.link}
        title="Check out this link! Created Using #link-कर"
      >
        <LinkedinIcon
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />
      </LinkedinShareButton>
      <TelegramShareButton
        url={props.link}
        title="Check out this link! Created Using *link-कर*"
      >
        <TelegramIcon
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />
      </TelegramShareButton>
      <TwitterShareButton
        url={props.link}
        title="Check out this link! Created Using #link-कर"
      >
        <TwitterIcon
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
          }}
        />
      </TwitterShareButton>
    </>
  );
};

export default ShareButton;
