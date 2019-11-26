import Choice from './Choice'
import Category from './Category'

export default interface Question {
	_id: string
	heading: string
	subtitle?: string
	category?: Category
	choices: Choice[]
}
