import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Image src="/image.jpg" alt="Image" height={960} width={640} />
      <br />
      <Image
        src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?w=640"
        alt="Image"
        height={960}
        width={640}
      />
    </div>
  );
}
