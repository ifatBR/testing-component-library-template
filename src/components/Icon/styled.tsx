import styled from 'styled-components';

type IconContainerStyledProps = {
    height?: number;
    width?: number;
    iconFillColor?: string
};

export const IconContainerStyled = styled.div<IconContainerStyledProps>`
display: flex;    
align-items: center;
width: fit-content;
margin-right: 5px;
cursor: pointer;
height: ${props => `${props.height || 15}px`};
width: ${props => `${props.width || 15}px`};
svg {
    max-height: ${props => `${props.height}px`};
    max-width: ${props => `${props.width}px`};
    path {
        fill: ${props => props.iconFillColor};
    }
}
`;