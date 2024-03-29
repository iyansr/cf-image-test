import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Image src="/image.jpg" alt="Image" height={960} width={640} />
    </div>
  );
}
