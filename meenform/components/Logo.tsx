import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-xl bg-primary text-transparent bg-clip-text hover:cursor-pointer"
    >
      MeenForm
    </Link>
  );
}

export default Logo;