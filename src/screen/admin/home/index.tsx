import React from 'react'
import { Select } from 'antd';
import {RouteComponentProps} from '@reach/router'
import {connect} from "react-redux";
import { getChannels } from "../../../modules/Channels";
import ModelState from "../../../models/bases/ModelState";
import Channel from "../../../models/Channel";
import {DatePicker} from 'antd';
import { ChannelSelectContainer, FilterContainer } from "./style";

interface Props extends RouteComponentProps {
  getChannels: () => any
  channels: ModelState<Channel[]>
}

const {Option} = Select;

const {RangePicker} = DatePicker;

const AdminHome: React.FunctionComponent<Props> = ({getChannels, channels}) => {

	React.useEffect(() => {
    getChannels()
	}, [])

  const onSelectChange = (value) => {
    console.log(`selected ${value}`);
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

const mapStateToProps = ({channels}) => {
  return {channels}
}

const mapDispatchToProps = {
  getChannels,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminHome)

