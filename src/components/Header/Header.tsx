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

interface Props {
	channelName?: string
	isAdmin?: boolean
}

interface Menu {
	name: string
	path: string
}

const Header: React.FC<Props> = ({channelName, isAdmin}) => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	const onMenuBtnClicked = () => () => {
		setIsMenuOpen(isMenuOpen => !isMenuOpen)
	}

	const menus: Menu[] = [
		{
			name: 'Etusivu',
			path: `/channel/${channelName}`,
		},
		{
			name: 'Kategoriat',
			path: `/channel/${channelName}/categories`,
		},
		{
			name: 'Anna Palautetta',
			path: `/channel/${channelName}/feedback`,
		},
	]

	const adminMenus: Menu[] = [
		{
			name: 'Etusivu',
			path: `/admin/home`,
		},
		{
			name: 'Kirjaudu Ulos',
			path: `/admin/logout`,
		},
	]

	const renderMenuItems = () => {
		const activeMenu = isAdmin ? adminMenus : menus

		return activeMenu.map(menuItem => (
			<NavLink key={menuItem.path} onClick={onMenuBtnClicked()} to={menuItem.path}>
				{menuItem.name}
			</NavLink>
		))
	}

	return (
		<AppHeader>
			<StyledHeader>
				<Navigation>
					<MenuIcon onClick={onMenuBtnClicked()} src={menuIconSrc} />
					<Banner to={isAdmin ? '/admin/home' : `/channel/${channelName}`}>
						<Logo src={logo} alt="logo" />
						<AppName>{channelName}</AppName>
					</Banner>
					<LinkContainer isOpen={isMenuOpen}>{renderMenuItems()}</LinkContainer>
				</Navigation>
			</StyledHeader>
			<BannerFooter src={bannerFooter} />
		</AppHeader>
	)
}

export default Header
