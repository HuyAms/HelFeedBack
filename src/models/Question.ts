import Choice from './Choice'

export default interface Question {
	heading: string
	subtitle?: string
	category?: string
	choices: Choice[]
}
