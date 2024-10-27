import Nav from './Components/Nav';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import CustomerReviews from './sections/CustomerReviews';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Popular from './sections/Popular';


const App =()=>(
<main className="relative">
   <Nav /> 
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
  </section>
  <section className="padding">
    <Popular />

  </section>
  <section className="padding">
    <SuperQuality />

  </section>
  <section className="padding-x py-10">
   <Services />

  </section>
  <section className="padding">
    <SpecialOffer />

  </section>
  <section className="bg-pale-blue padding">
    <CustomerReviews />

  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />

  </section>
  <section className="bg-black padding-x padding-t pb-8">
    <Footer />

  </section>
</main>
);
export default App;