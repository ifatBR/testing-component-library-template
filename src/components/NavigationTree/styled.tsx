import styled from 'styled-components';

type TreeNodeContainerStyledProps = {
    isSelected?: boolean;
    isMarked?: boolean;
    level?: number;
    nodeIndentation?: number;
    treeNodeStyle?: {[key:string]:string};
    treeNodeMarkedStyle?: {[key:string]:string};
    treeNodeNameStyle?: {[key:string]:string};
    treeNodeNameActiveStyle?: {[key:string]:string};
};

export const TreeNodeContainerStyled = styled.div<TreeNodeContainerStyledProps>`
    display: flex;    
    align-items: center;
    padding-left: ${props => props.level && `${props.level * (props.nodeIndentation || 15)}px`};
    ${props => props.treeNodeStyle}
    ${props => props.isMarked && props.treeNodeMarkedStyle}
`;

export const TreeNodeNameStyled = styled.button<TreeNodeContainerStyledProps>`
    margin-left: 5px;
    cursor: pointer;
    border: none;
    background: none;
    ${props => props.treeNodeNameStyle}
    ${props => props.isSelected && props.treeNodeNameActiveStyle}
`;
