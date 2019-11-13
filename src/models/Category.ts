export default interface Category {
	_id: string
	name: string
	description: string
	imageUrl: string
	instruction: {
		text: string
		imageUrl: string
	}
}
