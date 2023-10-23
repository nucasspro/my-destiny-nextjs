const tapSoNguyen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tapBasic: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

const NumberToCharacterMapping: { [key: number]: string[] } = {
  1: ["A", "J", "S"],
  2: ["B", "K", "T"],
  3: ["C", "L", "U"],
  4: ["D", "M", "V"],
  5: ["E", "N", "W"],
  6: ["F", "O", "X"],
  7: ["G", "P", "Y"],
  8: ["H", "Q", "Z"],
  9: ["I", "R"],
};

export function kiemTraTapBasic(source: number): boolean {
  return tapBasic.includes(source);
}

export function khongTrongTapSoNguyen(source: number[]): number[] {
  return source.filter((number) => tapSoNguyen.includes(number));
}

export function chuyenSangAscii(source: string): string {
  return source
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export function tongCacChuSo(source: number): number {
  let sum = 0;
  while (source > 0) {
    sum += source % 10;
    source = Math.floor(source / 10);
  }
  return sum;
}

export function tinhTong(tong: number, kiemTraBasic: boolean = false): number {
  const digitSum = tong
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (!kiemTraBasic) return digitSum;

  if (tapBasic.includes(digitSum)) return digitSum;

  return tinhTong(digitSum);
}
