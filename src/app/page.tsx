"use client";

import { InputForm } from "@/components/app-components/user-input";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isClient && <InputForm />}
    </main>
  );
}
