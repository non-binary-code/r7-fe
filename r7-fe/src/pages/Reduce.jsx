import React from 'react';

const Reduce = () => {
  const pTag = 'col-span-2 text-xl p-5 m-10';
  return (
    <div className='flex flex-wrap justify-center p-10 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-10'>
        Several statistic facts to consider
      </h1>{' '}
      <br />
      <ul className='flex flex-col gap-10'>
        <li className='grid grid-cols-3 bg-white p-10 rounded-lg shadow-xl'>
          <p className={pTag}>
            Producing new products can create a large carbon footprint. For
            example, did you know that on average manufacturing a brand new sofa
            generates 90kg of carbon dioxide, which is roughly equivalent to
            driving a car for 220 miles?
            <br />
            <br />
            At the same time, 100,000 tonnes of appliances are sent to waste
            facilities and landfill over the winter period alone.
          </p>
          <img
            src='/images/sofa.jpg'
            width='360'
            height='400'
            alt='new sofa'
            className='rounded-lg'
          />
        </li>
        <li className='grid grid-cols-3 bg-white p-10 rounded-lg shadow-xl'>
          <figure>
            <img
              src='/images/jeans.jpg'
              width='360'
              height='400'
              alt='several pairs of jeans'
              className='rounded-lg'
            />
            <p className='text-md text-gray-600 italic'>
              Think twice - do you need another pair of jeans?
            </p>
          </figure>
          <p className={pTag}>
            The fashion industry accounts for about 8-10% of global carbon
            emissions, and nearly 20% of wastewater. And while the environmental
            impact of flying is now well known, fashion sucks up more energy
            than both aviation and shipping combined.
            <br />
            <br />
            Did you know that a single pair of jeans requires a kilogram of
            cotton. And because cotton tends to be grown in dry environments,
            producing this kilo requires about 7,500-10,000 litres of water.
            That is about{' '}
            <b>10 years worth of drinking water for a single person.</b>{' '}
          </p>
        </li>
        <li className='grid grid-cols-3 bg-white p-10 rounded-lg shadow-xl'>
          <p className={pTag}>
            The "mountain" of waste electronic and electrical equipment
            discarded in 2021 weighed more than 57 million tonnes, researchers
            estimated. That is heavier than the Great Wall of China - the
            planet's heaviest artificial object.
          </p>
          <figure>
            <img
              src='/images/electrical.jpg'
              width='360'
              height='400'
              alt='electrical appliances'
              className='rounded-lg'
            />
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default Reduce;
