import { chuyenSangAscii, tinhTong, tongCacChuSo } from "./user-utils";

type UserDetails = {
  chiSoDuongDoi?: number;
  chiSoSuMenh?: number;
  chiSoLienKetDuongDoiVaSuMenh?: number;
  chiSoTruongThanh?: number;

  chiSoLinhHon?: number;
  chiSoNhanCach?: number;
  chiSoLienKet?: number;
  chiSoCanBang?: number;

  chiSoTuDuyLyTri?: number;
  chiSoSucManhTiemThuc?: number;
  chiSoDamMe?: string;
  chiSoThieu?: string;

  chiSoNamCaNhan?: number;
  chiSoThangCaNhan?: number;
  chiSoNgayCaNhan?: number;

  chiSoChang1?: number;
  chiSoChang2?: number;
  chiSoChang3?: number;
  chiSoChang4?: number;

  chiSoTuoiChang1?: number;
  chiSoTuoiChang2?: number;
  chiSoTuoiChang3?: number;
  chiSoTuoiChang4?: number;

  chiSoNamChang1?: number;
  chiSoNamChang2?: number;
  chiSoNamChang3?: number;
  chiSoNamChang4?: number;

  chiSoThachThuc1?: number;
  chiSoThachThuc2?: number;
  chiSoThachThuc3?: number;
  chiSoThachThuc4?: number;

  chiSoNgaySinh?: number;
};

type User = {
  hoVaTen: string;
  ngayThangNamSinh: Date;
  hoVaTenAscii: string;
  danhSachCacChuTrongTenAscii: string[];
  tongCacSoCuaNgaySinh: number;
  tongCacSoCuaThangSinh: number;
  tongCacSoCuaNamSinh: number;
  tongCacSoCuaNgaySinhTrongTapBasis: number;
  tongCacSoCuaThangSinhTrongTapBasis: number;
  tongCacSoCuaNamSinhTrongTapBasis: number;
  userDetails?: UserDetails | null;
};

export function createUser(hoVaTen: string, ngayThangNamSinh: Date): User {
  const hoVaTenAscii = chuyenSangAscii(hoVaTen);
  const danhSachCacChuTrongTenAscii = hoVaTenAscii.split(" ");

  const tongCacSoCuaNgaySinh = tongCacChuSo(ngayThangNamSinh.getDay());
  const tongCacSoCuaThangSinh = tongCacChuSo(ngayThangNamSinh.getMonth());
  const tongCacSoCuaNamSinh = tongCacChuSo(ngayThangNamSinh.getFullYear());

  //   const tongCacSoCuaNgaySinhTrongTapBasis = tinhTong(
  //     ngayThangNamSinh.getDate(),
  //     true
  //   );
  //   const tongCacSoCuaThangSinhTrongTapBasis = tinhTong(
  //     ngayThangNamSinh.getMonth(),
  //     true
  //   );
  //   const tongCacSoCuaNamSinhTrongTapBasis = tinhTong(
  //     ngayThangNamSinh.getFullYear(),
  //     true
  //   );

  const userDetails = null;

  return {
    hoVaTen,
    ngayThangNamSinh,
    hoVaTenAscii,
    danhSachCacChuTrongTenAscii,
    tongCacSoCuaNgaySinh,
    tongCacSoCuaThangSinh,
    tongCacSoCuaNamSinh,
    tongCacSoCuaNgaySinhTrongTapBasis: 0,
    tongCacSoCuaThangSinhTrongTapBasis: 0,
    tongCacSoCuaNamSinhTrongTapBasis: 0,
    userDetails,
  };
}
function ChuyenSangAscii(HoVaTen: any) {
  throw new Error("Function not implemented.");
}
