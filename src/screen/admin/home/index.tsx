import React from 'react'
import { Select } from 'antd';
import {RouteComponentProps} from '@reach/router'
import {connect} from "react-redux";
import { getChannels } from "../../../modules/Channels";
import ModelState from "../../../models/bases/ModelState";
import Channel from "../../../models/Channel";
import {DatePicker} from 'antd';
import { ChannelSelectContainer, FilterContainer } from "./style";
import { getSurvey } from "../../../modules/Survey";
import Survey from "../../../models/Survey";
import { usePrevious } from "../../../utils/hooks";

interface Props extends RouteComponentProps {
  getChannels: () => any
  getSurvey: (id: string) => void
  survey: ModelState<Survey>
  channels: ModelState<Channel[]>
}

const {Option} = Select;

const {RangePicker} = DatePicker;

const AdminHome: React.FunctionComponent<Props> = ({getChannels, getSurvey, channels, survey}) => {

  const [selectedChannelId, setSelectedChannelId] = React.useState(null)

  // Get all channels
	React.useEffect(() => {
    getChannels()
	}, [])

  // Get survey based on channelId
  React.useEffect(() => {

    if (selectedChannelId) {
      getSurvey(selectedChannelId)
    }

  }, [selectedChannelId])

  // Set first channel by default
  const prevFeedbackStatus = usePrevious(channels.status)
  React.useEffect(() => {
    if (prevFeedbackStatus === 'fetching' && channels.status === 'success') {
      setSelectedChannelId(channels.data[0].activeSurveyId)
    }
  }, [channels.status])

  const onSelectChange = (value) => {
    setSelectedChannelId(value)
  }

  const onDateRangechange = (date, dateString) => {
    console.log(date, dateString);
  }

  const renderChannelsSelect = () => {

    if(channels.status === 'success') {

      return (
        <ChannelSelectContainer>
          <Select defaultValue={channels.data[0]._id} style={{ width: 200 }} onChange={onSelectChange}>
            {channels.data.map(channel => (<Option key={channel._id} value={channel._id}>{channel.name}</Option>))}
          </Select>
        </ChannelSelectContainer>
      )
    }

    return null
  }

	return (
    <>
      <FilterContainer>
        {renderChannelsSelect()}
        <RangePicker onChange={onDateRangechange} />
      </FilterContainer>
    </>
  )
}

const mapStateToProps = ({channels, survey}) => {
  return {channels, survey}
}

const mapDispatchToProps = {
  getChannels,
  getSurvey,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminHome)

