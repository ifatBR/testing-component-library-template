import styled from 'styled-components';

export const StyledHighlightedText = styled.span<{isHighlighted: boolean}>`
    background-color: ${props => (props.isHighlighted ? 'yellow' : 'inherit')};
`;