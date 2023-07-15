import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Button,
  useToast,
  PopoverFooter,
} from "@chakra-ui/react";
import classes from "./Card.module.css";
import { CopyIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

// For View Link Popover
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";

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

const Cards = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  // Toast for Link Copied Successfully
  const toast = useToast();
  useEffect(() => {
    if (isCopied) {
      toast({
        title: "Link Copied Successfully ✅",
        status: "info",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      setIsCopied(false);
    }
  }, [isCopied, toast]);

  return (
    <Card maxW="300px" height={"215px"} className={classes.card1}>
      <CardBody>
        <Stack direction={"column"} spacing="24px">
          <Stack direction={"row"} justifyContent={"space-evenly"} spacing="3">
            <Stack
              direction={"column"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Popover placement="auto">
                  <PopoverTrigger>
                    <Button>
                      <ViewIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent border={"2px solid black"}>
                    <PopoverCloseButton className={classes.popOverCloseBtn} />
                    <PopoverHeader className={classes.popOverHeader}>
                      Short Link
                    </PopoverHeader>
                    <PopoverBody className={classes.popOverBody}>
                      {props.link}
                      <CopyToClipboard
                        text={props.link}
                        className={classes.copyButton}
                        onCopy={() => setIsCopied(true)}
                      >
                        <button>
                          <CopyIcon />
                        </button>
                      </CopyToClipboard>
                    </PopoverBody>
                    <PopoverFooter>
                      <Stack direction={"row"} justifyContent={"space-around"}>
                        <EmailShareButton
                          subject={`Your created URL ${props.link}`}
                        >
                          <EmailIcon
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </EmailShareButton>
                        <FacebookShareButton>
                          <FacebookIcon
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </FacebookShareButton>
                        <WhatsappShareButton url={props.link} title="Check out this link! Created Using *https://linkkar.vercel.app*">
                          <WhatsappIcon
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </WhatsappShareButton>
                        <LinkedinShareButton>
                          <LinkedinIcon
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </LinkedinShareButton>
                        <TelegramShareButton>
                          <TelegramIcon
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </TelegramShareButton>
                        <TwitterShareButton>
                          <TwitterIcon
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </TwitterShareButton>
                      </Stack>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
                <Button>
                  <EditIcon />
                </Button>
              </Stack>
              <button>Analytics</button>
            </Stack>
            <Image
              src={props.image}
              objectFit="cover"
              width={150}
              height={105}
              borderRadius={7}
              border={"2px solid black"}
            />
          </Stack>
          <Text
            noOfLines={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"48px"}
          >
            {props.title}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
