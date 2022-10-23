import RecycleForm from '../components/RecycleForm';

const Recycle = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10 mt-20'>
      <h1 className='mb-20 font-bold text-3xl'>
        Recyclable or Compostable Item
      </h1>
      <RecycleForm />
    </div>
  );
};

export default Recycle;
