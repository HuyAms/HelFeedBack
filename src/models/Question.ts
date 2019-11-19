import Choice from './Choice'

export default interface Question {
	_id: string
	heading: string
	subtitle?: string
	category?: string
	choices: Choice[]
}
