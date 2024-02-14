export default function SubNavbar() {
  return (
    <div className="container bg-[white] h-max-[200px] m-auto pt-[20px]">
      <p className="text-[38px] font-bold pb-[30px]">Seller</p>
      <div className="w-full pb-[15px] border-t-solid border-t-[1px] border-t-[#D3D3D3]">
        <div className="flex flx-row text-[black] justify-center justify-items-center pt-[10px]">
          <p className="pr-[30px]">T-shirts</p>
          <p className="pr-[30px]">Hoddies</p>
          <p className="pr-[30px]">Posters</p>
          <p className="pr-[30px]">Albums</p>
        </div>
      </div>
    </div>
  );
}
