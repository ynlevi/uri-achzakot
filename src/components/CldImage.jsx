"use client";

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
            : "(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 30vw"
        }
      />
    </div>
  );
};

export default CldImage;
