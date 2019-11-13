import React from 'react'
import {
	AppHeader,
	AppName,
	Banner,
	BannerFooter,
	LinkContainer,
	Logo,
	MenuIcon,
	Navigation,
	StyledHeader,
	StyledLink,
} from './style'
import logo from '../../assets/hel-logo.svg'
import bannerFooter from '../../assets/banner-footer.png'
import menuIconSrc from '../../assets/menu-icon.svg'
import {getChannelName} from '../../services/localStorage'

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
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	const onMenuBtnClicked = () => () => {
		setIsMenuOpen(isMenuOpen => !isMenuOpen)
	}

	return (
		<AppHeader>
			<StyledHeader>
				<Navigation>
					<MenuIcon onClick={onMenuBtnClicked()} src={menuIconSrc} />
					<Banner
						onClick={onMenuBtnClicked()}
						to={`/channel/${getChannelName()}`}
					>
						<Logo src={logo} alt="logo" />
						<AppName>Feedback System</AppName>
					</Banner>
					<LinkContainer isOpen={isMenuOpen}>
						<NavLink
							onClick={onMenuBtnClicked()}
							to={`/channel/${getChannelName()}`}
						>
							Home
						</NavLink>
						<NavLink
							onClick={onMenuBtnClicked()}
							to={`/channel/${getChannelName()}/categories`}
						>
							Category
						</NavLink>
					</LinkContainer>
				</Navigation>
			</StyledHeader>
			<BannerFooter src={bannerFooter} />
		</AppHeader>
	)
}

export default Header
