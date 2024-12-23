import Nav from './sections/nav';
import Hero from './sections/hero';
import Footer from './sections/footer';
import CustomerReviews from './sections/customerReviews';
import Services from './sections/services';
import SpecialOffer from './sections/specialOffer';
import Subscribe from './sections/subscribe';
import SuperQuality from './sections/superQuality';
import Popular from './sections/popular';


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