import React from 'react'
import { Select } from 'antd';
import {RouteComponentProps} from '@reach/router'
import {connect} from "react-redux";
import { getChannels } from "../../../modules/Channels";
import ModelState from "../../../models/bases/ModelState";
import Channel from "../../../models/Channel";

interface Props extends RouteComponentProps {
  getChannels: () => any
  channels: ModelState<Channel[]>
}

const {Option} = Select;

const AdminHome: React.FunctionComponent<Props> = ({getChannels, channels}) => {

	React.useEffect(() => {
    getChannels()
	}, [])

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const renderChannelsSelect = () => {

    if(channels.status === 'success') {

      return (
        <div>
          <Select defaultValue={channels.data[0]._id} style={{ width: 200 }} onChange={handleChange}>
            {channels.data.map(channel => (<Option key={channel._id} value={channel._id}>{channel.name}</Option>))}
          </Select>
        </div>
      )
    }

    return null
  }

	return (
    <>
      {renderChannelsSelect()}
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

