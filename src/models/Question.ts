import Choice from './Survey'

export default interface Question {
	heading: string
	subtitle?: string
	categoryId?: string
	choices: Choice[]
}
