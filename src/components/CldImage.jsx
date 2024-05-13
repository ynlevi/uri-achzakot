"use client";
import React from "react";
import { CldImage as CldImageDefault } from "next-cloudinary";

const CldImage = (props) => {
  const { src, sizes } = props;

  return (
    <div>
      <CldImageDefault
        {...props}
        preserveTransformations
        placeholder="blur"
        blurDataURL={src}
        sizes={
          sizes
            ? sizes
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
      />
    </div>
  );
  // return React.createElement(CldImageDefault, { ...props });
};

export default CldImage;
