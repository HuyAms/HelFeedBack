import Question from './Question'

export default interface Survey {
	_id: string
	name: string
	description?: string
	questions: Question[]
}
