import React from 'react'
import {DatePicker, Select} from 'antd'
import {RouteComponentProps} from '@reach/router'
import {connect} from 'react-redux'
import {getChannels} from '../../../modules/Channels'
import ModelState from '../../../models/bases/ModelState'
import Channel from '../../../models/Channel'
import {ChannelSelectContainer, ChartHeader, FilterContainer} from './style'
import {getSurvey} from '../../../modules/Survey'
import Survey from '../../../models/Survey'
import {usePrevious} from '../../../utils/hooks'
import Stackedcolumn from './components/Chart'
import {getFeedbacks} from '../../../modules/Feedbacks'
import {Feedback, FeedbackType} from '../../../models/Feedback'
import FeedbackTable from './components/FeedbackTable'

interface Props extends RouteComponentProps {
	getChannels: () => any
	getSurvey: (id: string) => void
	getFeedbacks: (channelId: string, type: FeedbackType) => any
	survey: ModelState<Survey>
	channels: ModelState<Channel[]>
	feedbacks: ModelState<Feedback[]>
}

const {Option} = Select

const {RangePicker} = DatePicker

const AdminHome: React.FunctionComponent<Props> = ({
	getChannels,
	getSurvey,
	channels,
	survey,
	feedbacks,
	getFeedbacks,
}) => {
	const [selectedChannelId, setSelectedChannelId] = React.useState(null)
	const [selectedQuestionId, setSelectedQuestionId] = React.useState(null)

	// Get all channels
	React.useEffect(() => {
		getChannels()
	}, [])

	// Get survey based on channelId
	React.useEffect(() => {
		if (selectedChannelId) {
			getSurvey(
				channels.data.find(channel => channel._id === selectedChannelId)
					.activeSurveyId,
			)
			getFeedbacks(selectedChannelId, FeedbackType.text)
		}
	}, [selectedChannelId])

	// Set first channel by default
	const prevFeedbackStatus = usePrevious(channels.status)
	React.useEffect(() => {
		if (prevFeedbackStatus === 'fetching' && channels.status === 'success') {
			setSelectedChannelId(channels.data[0]._id)
		}
	}, [channels.status])

	const onChannelChange = channelId => {
		setSelectedChannelId(channelId)
	}

	const onQuestionsSelectChange = value => {
		console.log('onQuestionsSelectChange: ', value)
	}

	const onDateRangechange = (date, dateString) => {
		console.log(date, dateString)
	}

	const renderChannelsSelect = () => {
		if (channels.status === 'success') {
			return (
				<ChannelSelectContainer>
					<Select
						defaultValue={channels.data[0]._id}
						style={{width: '25rem'}}
						onChange={onChannelChange}
					>
						{channels.data.map(channel => (
							<Option key={channel._id} value={channel._id}>
								{channel.name}
							</Option>
						))}
					</Select>
				</ChannelSelectContainer>
			)
		}

		return null
	}

	const renderQuestionsSelect = () => {
		if (survey.status === 'success') {
			const {questions} = survey.data

			return (
				<ChannelSelectContainer>
					<Select
						defaultValue={questions[0]._id}
						style={{width: '100%'}}
						onChange={onQuestionsSelectChange}
					>
						{questions.map(question => (
							<Option key={question._id} value={question._id}>
								{question.heading}
							</Option>
						))}
					</Select>
				</ChannelSelectContainer>
			)
		}

		return null
	}

	const renderFeedbackTable = () => {
		if (feedbacks.status === 'success') {
			return <FeedbackTable feedbacks={feedbacks.data} />
		}

		return null
	}

	return (
		<>
			<ChartHeader>
				<FilterContainer>
					{renderChannelsSelect()}
					<RangePicker onChange={onDateRangechange} />
				</FilterContainer>
				{renderQuestionsSelect()}
			</ChartHeader>
			<Stackedcolumn />
			{renderFeedbackTable()}
		</>
	)
}

const mapStateToProps = ({channels, survey, feedbacks}) => {
	return {channels, survey, feedbacks}
}

const mapDispatchToProps = {
	getChannels,
	getSurvey,
	getFeedbacks,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AdminHome)
