import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setAnswer } from "../features/pictureSlice";
import { processAnswer, findKeywordMatch } from "../utils";
import PictureCard from "./PictureCard";

const PicGuessrMain = () => {
	const dispatch = useDispatch();

	const currentPicture = useSelector(
		(state: any) => state?.picture?.currentPicture
	);
	const answer = useSelector((state: any) => state?.picture?.answer);

	const [commons, setCommons] = useState([]);

	const txtAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const current = txtAreaRef.current;
		if (current) {
			const processedAnswer = processAnswer(current.value);
			dispatch(setAnswer(processedAnswer));
		}
	};

	useEffect(() => {
		const commons: any = findKeywordMatch(currentPicture.keywords, answer);
		setCommons(commons);
	}, [answer]);

	return (
		<div className="grid grid-cols-2">
			<PictureCard picture={currentPicture} />
			<textarea
				name="comment"
				placeholder="Enter your answer"
				className="col-span-2 bg-[#212121] text-white text-lg p-5 focus:ring-transparent"
				ref={txtAreaRef}
			></textarea>
			<button
				className="bg-green-950 shadow text-white p-3 col-span-2"
				onClick={(e) => handleButtonClick(e)}
			>
				Verify!
			</button>
			<div className="flex flex-col p-5 font-medium text-white col-span-2">
				<h1 className="font-medium text-xl text-white mb-2">
					Keywords indovinate: {commons?.length} su{" "}
					{currentPicture?.keywords?.length}
				</h1>
				{commons?.map((common: string, index: number) => {
					return <h2 key={index}>- {common}</h2>;
				})}
			</div>
		</div>
	);
};

export default PicGuessrMain;
