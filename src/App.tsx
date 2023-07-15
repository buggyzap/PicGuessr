import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPicture } from "./features/pictureSlice";
import PicGuessrMain from "./components/PicGuessrMain";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPicture());
	}, []);

	return (
		<div className="min-h-screen bg-[#000000e7] flex flex-col justify-between">
			<div>
				<Header />
				<PicGuessrMain />
			</div>
			<Footer />
		</div>
	);
};

export default App;
