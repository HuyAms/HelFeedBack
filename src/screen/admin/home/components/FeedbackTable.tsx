import React from 'react'
import {Table} from 'antd'
import {Feedback} from '../../../../models/Feedback'
import moment from 'moment'

export const DATE_FORMAT = 'DD-MM-YYYY'

const columns = [
	{
		title: 'Date',
		dataIndex: 'createdAt',
		key: 'createdAt',
		width: '25%',
		render: date => moment(date).format(DATE_FORMAT),
	},
	{
		title: 'Feedback',
		dataIndex: 'value',
		key: 'value',
	},
]

interface Props {
	feedbacks: Feedback[]
}

const FeedbackTable: React.FunctionComponent<Props> = ({feedbacks}) => {
	const getDataSource = () => {
		return feedbacks.map(feedback => ({
			key: feedback._id,
			createdAt: feedback.createdAt,
			value: feedback.value,
		}))
	}
	return (
		<Table
			bordered={false}
			size="middle"
			dataSource={getDataSource()}
			columns={columns}
			pagination={false}
		/>
	)
}

export default FeedbackTable
