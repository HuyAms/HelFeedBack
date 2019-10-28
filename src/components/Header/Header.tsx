import React from 'react'
import {
	AppName,
	Banner,
	BannerFooter,
	LinkContainer,
	Logo,
	Navigation,
	StyledHeader,
	StyledLink,
} from './style'
import logo from '../../assets/hel-logo.svg'
import bannerFooter from '../../assets/banner-footer.png'

const NavLink = (props: any) => (
	<StyledLink
		{...props}
		getProps={({isCurrent}) => {
			return {
				style: {
					fontWeight: isCurrent ? 'bold' : 'normal',
					opacity: isCurrent ? 1 : 0.8,
				},
			}
		}}
	/>
)

const Header: React.FC = props => {
	return (
		<>
			<StyledHeader>
				<Navigation>
					<Banner to="/">
						<Logo src={logo} alt="logo" />
						<AppName>Feedback System</AppName>
					</Banner>
					<LinkContainer>
						<NavLink to="/">Home</NavLink>
						<NavLink to="category">Category</NavLink>
					</LinkContainer>
				</Navigation>
			</StyledHeader>
			<BannerFooter src={bannerFooter} />
		</>
	)
}

export default Header
