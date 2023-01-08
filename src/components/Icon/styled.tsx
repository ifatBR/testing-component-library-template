import styled from 'styled-components';

type IconStylesProps = {
    height?: number;
    width?: number;
    iconStyle?: {[key: string]: string};
};

export const IconStyled = styled.img<IconStylesProps>`
    height: ${props=> `${props.height}px`}
    width: ${props=> `${props.width}px`}
    ${props => props.iconStyle}
`;