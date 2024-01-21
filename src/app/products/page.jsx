import Card from "../components/card";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

const data = [
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
];

function ProductsPage() {
  return (
    <>
      <NavbarComponent />
      <span className="flex justify-centers p-10 bg-[#F0E5D8] top-0">
        <input
          className="m-auto pl-2 w-2/5 h-8 rounded-xl"
          placeholder="search product"
        ></input>
      </span>
      <div className="grid max-w-screen-2xl w-full grid-cols-4 p-10">
        {data.map((el, index) => (
          <Card key={index} img={el.img} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default ProductsPage;
