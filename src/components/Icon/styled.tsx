import styled from 'styled-components';

type IconContainerStyledProps = {
    height?: number;
    width?: number;
    iconFillColor?: string
    iconStyle?: {[key: string]: string}
    iconPathStyle?: {[key: string]: string}
};

export const IconContainerStyled = styled.div<IconContainerStyledProps>`
    height: ${props => `${props.height || 15}px`};
    width: ${props => `${props.width || 15}px`};
    svg {
        max-height: ${props => `${props.height}px`};
        max-width: ${props => `${props.width}px`};
        path {
            ${props => props.iconPathStyle}
        }
    }
    ${props => props.iconStyle}
`;