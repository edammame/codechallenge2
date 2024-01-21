import NavbarComponent from "../components/navbar";
import NavComponent from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <NavbarComponent />
      <NavComponent />
      <div className="flex justify-center m-auto">
        <img
          src="https://ichef.bbci.co.uk/images/ic/1200x675/p01lcfv4.jpg"
          className="mt-7 mb-10 w-[850px] h-[500px] object-fill rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="m-auto text-5xl font-semibold">COLLECTION</h1>
        <div className="m-auto bg-gray-200 rounded-lg p-3">
          <Link href={"/products"}>go to product</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
