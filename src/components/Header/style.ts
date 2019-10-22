import styled from 'styled-components'
import { Link } from "@reach/router"


export const StyledHeader = styled.header`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.appColors.primary}; 
    padding: 2rem 4rem;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.lg};
    text-decoration-line: none;
    &:not(:last-of-type) {
        margin-right: 10.6rem;
    }
`;

export const Logo = styled.img`
    height: 4.6rem;
    width: 10rem;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`;
