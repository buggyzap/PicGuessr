import { useSelector } from "react-redux";
import PictureCard from "./PictureCard";

const PicGuessrMain = () => {
	const currentPicture = useSelector(
		(state: any) =>
			state?.picture?.currentPicture !== null && state?.picture?.currentPicture
	);

	return (
		<div className="grid grid-cols-2 shadow">
			<PictureCard picture={currentPicture} />
			<textarea
				name="comment"
				placeholder="Enter your answer"
				className="col-span-2 bg-[#212121] text-white text-lg p-5 focus:ring-transparent"
			></textarea>
		</div>
	);
};

export default PicGuessrMain;
