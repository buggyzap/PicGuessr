export const processAnswer = (answer: string): any => {
	const regex = /[.,:;_+\*\\\n/-]/g;

	const cleanedAnswer: any = answer.replace(regex, " ");
	const cleanedAnswerToArray: any = cleanedAnswer
		.split(" ")
		.filter((word: string) => word !== "");
	const answerArray: any = cleanedAnswerToArray?.map((string: string) =>
		string.toLowerCase()
	);
	return answerArray;
};

export const findKeywordMatch = (
	keywords: Array<string>,
	answer: Array<string>
) => {
	const commons: string[] = [];
	keywords?.forEach((keyword: any) => {
		Array.isArray(keyword)
			? keyword.some((value) => answer.includes(value) && commons.push(value))
			: answer.includes(keyword) && commons.push(keyword);
	});
	return commons;
};
