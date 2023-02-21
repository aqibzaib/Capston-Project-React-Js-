import React from "react";

import Image from "../components/Image";
import { getClass } from "../utils";
import { useContext } from "react";
import { Context } from "../context";
function Photos() {
  // Get the allP
  const { allPhotos } = useContext(Context);

  // map over it, creating <Image /> elements of the component we just made
  // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
  const imageElement = allPhotos.map((image, i) => (
    <Image key={image.id} img={image} className={getClass(i)} />
  ));

  return (
    <main className="photos">
      {imageElement}
      {imageElement}
    </main>
  );
}

export default Photos;
