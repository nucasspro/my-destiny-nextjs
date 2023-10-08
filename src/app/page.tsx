"use client";

import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { parse, format } from "date-fns";

export default function Home() {
  const [hoVaTen, setHoVaTen] = useState("");
  const [ngayThangNamSinh, setNgayThangNamSinh] = useState(null);

  const isHoVaTenInValid = hoVaTen === "";
  const isNgayThangNamSinhInValid =
    ngayThangNamSinh === null || ngayThangNamSinh === "";

  const handleHoVaTenChange = (e) => {
    setHoVaTen(e.target.value);
  };

  const handleNgayThangNamSinhChange = (e) => {
    const parsedDate = parse(e.target.value, "yyyy/MM/dd", new Date());

    if (!isNaN(parsedDate.getTime())) {
      setNgayThangNamSinh(parsedDate);
    } else {
      setNgayThangNamSinh(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormControl isRequired isInvalid={isHoVaTenInValid}>
        <FormLabel>Họ và tên</FormLabel>
        <Input
          type="text"
          placeholder="Nhập họ và tên"
          value={hoVaTen}
          onChange={handleHoVaTenChange}
        />
      </FormControl>

      <FormControl isRequired isInvalid={isNgayThangNamSinhInValid}>
        <FormLabel>Ngày tháng năm sinh</FormLabel>
        <Input
          type="date"
          placeholder="Ngày tháng năm sinh"
          value={ngayThangNamSinh ? format(ngayThangNamSinh, "yyyy/MM/dd") : ""}
          onChange={handleNgayThangNamSinhChange}
        />
      </FormControl>
    </main>
  );
}
