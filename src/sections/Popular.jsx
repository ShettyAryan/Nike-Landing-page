import {products} from '../constants';
const Popular = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our 
          <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-grey'>Experience top-notch quality and style from our top-notch selections. Discover a world of style and comfort</p>

      </div>

    </section>
  )
}

export default Popular