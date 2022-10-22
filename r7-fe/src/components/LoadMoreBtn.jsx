const LoadMoreBtn = ({ setVisible }) => {
	const loadMore = () => setVisible((prev) => prev + 8);

	return (
		<button
			onClick={loadMore}
			className='bg-green-400 text-white px-[10px] py-[20px] rounded w-[200px] font-bold capitalize cursor-pointer outline-none border-none drop-shadow-xl mt-30 mb-20 hover:bg-green-300'
		>
			Load More
		</button>
	);
};

export default LoadMoreBtn;
