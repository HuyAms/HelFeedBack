import React from 'react'
import { getChannel } from "../../modules/Channel";
import { setActiveSurveyId } from "../../modules/App";
import { connect } from "react-redux";
import { navigate, RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {
  isAuthenticated: boolean
  children: React.ReactNode
}


const AdminLayout: React.FunctionComponent<Props> = (props) => {

  React.useEffect(() => {
    if (!props.isAuthenticated) {
      navigate('/auth/signin')
    }
  }, [])

  return !props.isAuthenticated ? null : (<div>{props.children}</div>)
}

const mapStateToProps = ({auth}) => {
  return {
    isAuthenticated: auth.data && auth.data.token,
  }
}

const mapDispatchToProps = {
  getChannel,
  setActiveSurveyId,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminLayout)

