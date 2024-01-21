import Link from "next/link";

function NavbarComponent() {
  return (
    <>
      <nav className="flex justify-between p-7 bg-[#BBDFC8] top-0 sticky z-50 text-[#216155]">
        <span className="flex ml-10">
          <img src="book.png" className="w-[50px] h-[50px]" />
          <h1 className=" font-bold text-5xl">Petit Livre</h1>
        </span>

        <span className="flex translate-y-5 mr-10 gap-8">
          <p className="text-xl">Big world in a small hand</p>
          <Link href={"/home"} className="-translate-y-5 w-14">
            <img src="/home.png" />
          </Link>
        </span>
      </nav>
    </>
  );
}
export default NavbarComponent;
