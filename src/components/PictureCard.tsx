const PictureCard = ({ picture }: any) => {
	return (
		<div className="col-span-2">
			<img src={picture.path} />
		</div>
	);
};

export default PictureCard;
