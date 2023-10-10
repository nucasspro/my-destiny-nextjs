import { TUserSchema } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default function Destiny({
  searchParams,
}: {
  searchParams: {
    name: string;
    birthday: Date;
  };
}) {
  console.log(searchParams);

  // TODO: longdang - Add back button to go back to home page
  return (
    <>
      <Link href="/">Back</Link>
    </>
  );
}
