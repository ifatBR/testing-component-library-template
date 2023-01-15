import styled from 'styled-components';

type AssetsContainerStyledProps = {
    navigationContainerStyle?: {[key:string]: string}; 

}
export const AssetsContainerStyled = styled.div<AssetsContainerStyledProps>`
width: 100%;
    display: flex;
    flex-wrap: wrap;
    ${props => props.navigationContainerStyle}
`;