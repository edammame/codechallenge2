"use client";
import Link from "next/link";


function Footer() {
  return (
    <>
      <main className="bg-[#ddf9e6] h-[550px] flex gap-10 mt-10 text-[#216155]">
        <section className="flex flex-col gap-4 ml-32 mt-36 text-xl w-[50%]">
          <h1 className="text-3xl font-semibold mb-3">Who We Are</h1>
          <Link href={"/us"}>About Us</Link>
          <Link href={"/team"}>Team</Link>
          <div className="flex gap-7 h-20 w-30 mt-24">
            <img src="/world.png" className="h-full" />
            <img src="/vision.png" />
            <img src="/child.png" />
          </div>
        </section>

        <section className="w-[50%] mt-10">
          <div className="w-[550px] text-2xl font-semibold">
            <h1 className="mb-3">Our Location</h1>
            <img src="/map.png" />
          </div>
        </section>
      </main>
    </>
  );
}
export default Footer;
