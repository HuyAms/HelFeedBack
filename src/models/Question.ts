import Choice from './Choice'

export default interface Question {
	heading: string
	subtitle?: string
	categoryId?: string
	choices: Choice[]
}
