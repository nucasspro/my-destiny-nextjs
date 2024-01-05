"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
  // TODO: longdang - Show modal to notify user progress is being calculated

  return (
    <>
      <Dialog>
        <DialogContent></DialogContent>
      </Dialog>
      {/* <Link href="/">Back</Link> */}
    </>
  );
}
