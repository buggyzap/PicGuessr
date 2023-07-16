const Header = () => {
	return (
		<div className="col-span-2 grid grid-cols-4">
			<h1 className="font-semibold text-gray-300 text-4xl flex justify-end items-center p-5 col-span-3">
				PicGuessr
			</h1>
			<h1 className="font-medium text-gray-300 text-xl flex justify-center items-center p-5 col-span-1 mt-1">
				v1.0.1
			</h1>
		</div>
	);
};

export default Header;
