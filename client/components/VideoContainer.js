import { AspectRatio } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import NotPaid from "./NotPaid";
import ReactHtmlParser from "react-html-parser";
import Loader from "./Loader";

const VideoContainer = ({ courseId, video, isPreview }) => {
  const [isPaid, setIsPaid] = useState(false);
  const { isAuthStateReady, user } = useContext(AuthContext);
  useEffect(() => {
    const checkIsPaid = async () => {
      try {
        const url =
          process.env.NEXT_PUBLIC_STRAPI_REST_API + "/orders/isPurchase";
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ courseId }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await res.json();

        setIsPaid(true);
      } catch (error) {
        setIsPaid(false);
      }
    };
    return checkIsPaid();
  }, []);
  console.log(isPreview);
  return (
    <div>
      {isAuthStateReady ? (
        <>
          {isPreview ? (
            <AspectRatio ratio={16 / 9} maxW="100%">
              <>{ReactHtmlParser(video)}</>
            </AspectRatio>
          ) : (
            <>
              {user && isPaid ? (
                <AspectRatio ratio={16 / 9} maxW="100%">
                  <>{ReactHtmlParser(video)}</>
                </AspectRatio>
              ) : (
                <NotPaid />
              )}
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default VideoContainer;
