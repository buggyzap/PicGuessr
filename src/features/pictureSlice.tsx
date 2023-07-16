import { createSlice } from "@reduxjs/toolkit";
import pictures from "../resources/pictures_details.json";

const initialState: any = {
	currentPicture: {},
	answer: [],
};

export const pictureSlice = createSlice({
	name: "picture",
	initialState,
	reducers: {
		setCurrentPicture(state: any) {
			const randomIndex = Math.floor(Math.random() * pictures.length);
			state.currentPicture = pictures[randomIndex];
		},
		setAnswer(state: any, action: any) {
			state.answer = action.payload;
		},
	},
});

export const { setCurrentPicture, setAnswer } = pictureSlice.actions;

export default pictureSlice.reducer;
