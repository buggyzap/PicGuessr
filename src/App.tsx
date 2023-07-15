import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPicture } from "./features/pictureSlice";
import PicGuessrMain from "./components/PicGuessrMain";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPicture());
	}, []);

	return (
		<div className="min-h-screen bg-[#000000e7]">
			<div className="title grid grid-cols-4">
				<h1 className="font-semibold text-gray-300 text-4xl flex justify-end items-center p-5 col-span-3">
					PicGuessr
				</h1>
				<h1 className="font-medium text-gray-300 text-xl flex justify-center items-center p-5 col-span-1 mt-1">
					v1.0.0
				</h1>
			</div>
			<PicGuessrMain />
			<footer className="py-4 px-8 absolute bottom-0 w-full bg-[#212121]">
				<p className="text-center text-gray-200">
					© 2023 <a href="https://github.com/cb040719">cb040719</a>. All rights
					reserved.
				</p>
			</footer>
		</div>
	);
};

export default App;
