import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

function AboutUsPage() {
  return (
    <>
      <NavbarComponent />
      <main className="flex flex-col gap-7 max-w-[1000px] m-auto translate-y-16">
        <h1 className="text-5xl font-semibold mb-2">About Us</h1>
        <div className="bg-pink-100 p-10 rounded-md">
          Our Purpose Enchanting the mind one book at a time is our core focus
          at KidsBooks. It’s the passion behind everything we do. We believe
          we’re not just selling books; we’re impacting the lives of millions of
          people, both locally and across the globe, by making books more
          accessible to everyone. With reading comes learning, and the more we
          learn the greater the impact we can all make.
        </div>
        <div className="bg-pink-200 p-10 rounded-md">
          Our Impact While we’re not the type of company who likes to stand on
          the rooftop and shout out the ways we support our communities, we are
          proud of the number of lives we’ve been able to impact through our
          contributions and book donations to literacy and education programs.
          Each month, we review dozens of donation requests from incredible
          individuals and organizations worldwide doing their part in Enchanting
          the Minds within their community. Below is a list of only some of the
          organizations that we have supported through financial contribution or
          with books and other product donations: Bernie’s Book Bank Black
          United Fund of Michigan Canadian Children’s Literacy Foundation
          Children’s Cottage Society Community Care District School Board of
          Niagara First Book Canada Generations Create Program Greater Good
          Charities Hang Tough Canada Horn of Africa Services The Krinkle
          Project Little Free Library Learning Disabilities Association of
          Niagara Region The Literacy Project The Niagara Region OM Ships
          International Project Share Room to Read SickKids Foundation Smiles By
          Angels Spelling Bee of Canada Virtual Reading Club The T.E.A. Spot
          Inc. Tropicana Community Services The Whale-Sized Toy Chest We’d love
          to list the thousands of organizations we have supported across Canada
          and the United States, but we’re sure you understand why…it’s a very
          long list. If your organization supports the love of reading and in
          need, please feel free to make a donation request.
        </div>
        <div className="bg-pink-300 p-16 rounded-md mb-52">
          Recognition A little acknowledgement is always nice, and we couldn’t
          be prouder to be recognized as one of Canada’s Best Managed Companies.
          Not only does it recognize overall business performance and sustained
          growth, it recognizes the efforts of our entire organization.
        </div>
      </main>
      <Footer />
    </>
  );
}
export default AboutUsPage;
