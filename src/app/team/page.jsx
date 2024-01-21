import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

function TeamPage() {
  return (
    <>
      <NavbarComponent />
      <h1 className="pl-20 mt-10 font-semibold text-5xl text-[#2d334a]">
        meet our team
      </h1>
      <main className="flex justify-center mt-7 gap-2 mb-40 mx-20 ">
        <section className="bg-[#ffd803] h-[500px] w-[400px] text-[#2d334a]">
          <div className="w-full h-[85%]">
            <img src="/bigfoot.jpeg" className="object-center w-full h-full" />
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-center font-semibold text-3xl">Doolittle</h1>
            <article>
              <p className="text-center">Founder</p>
            </article>
          </div>
        </section>
        <section className="bg-[#ffd803] h-[500px] w-[400px] text-[#2d334a]">
          <div className="w-full h-[85%]">
            <img src="/kermit.jpeg" className="object-cover h-full" />
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-center font-semibold text-3xl">
              Kermit The Frog
            </h1>
            <article>
              <p className="text-center">Child Psychologist</p>
            </article>
          </div>
        </section>
        <section className="bg-[#ffd803] h-[500px] w-[400px] text-[#2d334a]">
          <div className="w-full h-[85%]">
            <img
              src="/wallace.jpeg"
              className="object-cover object-top w-full h-full"
            />
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-center font-semibold text-3xl">Avrel Hamzah</h1>
            <article>
              <p className="text-center">Back-end Developer</p>
            </article>
          </div>
        </section>
        <section className="bg-[#ffd803] h-[500px] w-[400px] text-[#2d334a]">
          <div className="w-full h-[85%]">
            <img src="/JonLittle.jpeg" className="object-cover  h-full" />
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-center font-semibold text-3xl">Jhon Little</h1>
            <article>
              <p className="text-center">Front-end Developer</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default TeamPage;
