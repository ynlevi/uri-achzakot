import React from "react";

import { createMedia } from "@artsy/fresnel";
import { isMobile } from "react-device-detect";

function Test() {
  const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
      sm: 0,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });

  return (
    <MediaContextProvider>
      <Media at="sm">
        <div className="h-screen w-screen text-4xl bg-blue-400">mobile</div>
      </Media>
      <Media greaterThanOrEqual="md">
        <div className="h-screen w-screen text-9xl bg-red-700">desktop</div>
      </Media>
    </MediaContextProvider>
  );
}

export default Test;
