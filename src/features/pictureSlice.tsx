import { createSlice } from "@reduxjs/toolkit";
import pictures from "../resources/pictures_details.json";

const initialState: any = {
	currentPicture: {},
};

export const pictureSlice = createSlice({
	name: "picture",
	initialState,
	reducers: {
		setCurrentPicture(state: any) {
			const randomIndex = Math.floor(Math.random() * pictures.length);
			state.currentPicture = pictures[randomIndex];
		},
	},
});

export const { setCurrentPicture } = pictureSlice.actions;

export default pictureSlice.reducer;
