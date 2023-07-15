import React from "react";
import classes from "./ShowButton.module.css";

// For View Link Popover
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverArrow,
  PopoverFooter,
  Stack,
  Button,
} from "@chakra-ui/react";

import ShareButton from "./ShareButton";

import { CopyIcon, ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const ShowButton = (props) => {
  return (
    <Popover placement="auto">
      <PopoverTrigger>
        <Button>
          <ViewIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent border={"2px solid black"}>
        <PopoverArrow />
        <PopoverCloseButton
          style={{
            padding: "10px 20px 10px 20px",
            fontSize: "10px",
          }}
        />
        <PopoverHeader className={classes.popOverHeader}>
          Short Link
        </PopoverHeader>
        <PopoverBody className={classes.popOverBody}>
          {props.link}
          <CopyToClipboard
            text={props.link}
            className={classes.copyButton}
            onCopy={() => props.setIsCopied(true)}
          >
            <button>
              <CopyIcon />
            </button>
          </CopyToClipboard>
          <Link to={props.link} target="_blank">
            <button className={classes.copyButton}>
              <ExternalLinkIcon />
            </button>
          </Link>
        </PopoverBody>
        <PopoverFooter>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <ShareButton link={props.link} />
          </Stack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ShowButton;
