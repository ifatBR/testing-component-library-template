import React, { useEffect, useState } from 'react';
import { TOGGLE_ICON_SIZE } from '../../utils/constants';
import { ITreeNode } from '../../utils/types';
import Icon from '../Icon/Icon';
import { TreeNodeContainerStyled, TreeNodeNameStyled, TreeNodeToggleStyled } from './styled';
import IconToggleClosed from '../../assets/icons/toggle-closed.svg';
import IconToggleOpen from '../../assets/icons/toggle-open.svg';
// import {ReactComponent as IconToggleClosed} from '../../assets/icons/toggle-closed.svg';
// import {ReactComponent as IconToggleOpen} from '../../assets/icons/toggle-open.svg';

export interface INavigationTreeNodeProps {
  treeNode: ITreeNode;
  currentNodeId: string;
  highlightedNodeId: string;
  nodeIndentation?: number; //Rem
  treeNodeStyle?: {[key:string]:string};
  treeNodeMarkedStyle?: {[key:string]:string};
  treeNodeNameStyle?: {[key:string]:string};
  treeNodeNameActiveStyle?: {[key:string]:string};
  level?: number;
  onNodeClick(e:React.MouseEvent<HTMLDivElement>, node: ITreeNode): void;
  onNodeToggleClick(node: ITreeNode): void;
}

const NavigationTreeNode = (props: INavigationTreeNodeProps) => {
  const {
    treeNode,
    currentNodeId,
    highlightedNodeId,
    nodeIndentation,
    treeNodeStyle,
    treeNodeMarkedStyle,
    treeNodeNameStyle,
    treeNodeNameActiveStyle,
    level,
    onNodeClick,
    onNodeToggleClick
  } = props;

  const { children, _id: nodeId, has_children: hasChildren, name } = treeNode;
  const [isOpen, setIsOpen] = useState(false);
  const currentLevel = level ? level : 0;
  useEffect(() => {
    const open = isOpen || nodeId === currentNodeId;
    setIsOpen(open);
  }, [children]);

  const onToggleClick = (node: ITreeNode) => {
    setIsOpen(!isOpen);
    if (node.children) return;
    onNodeToggleClick(node)
  };
  // console.log('IconToggleClosed', IconToggleClosed);
//   const StyledIcon = styled(IconToggleClosed)`
//   width: 500px;
//   height: 200px;
//   fill: palevioletred;
// `;
//   console.log('StyledIcon', StyledIcon);
  const renderTree = () => {
    return children?.map((child: ITreeNode) => {
        return (
            <NavigationTreeNode
                key={child._id}
                treeNode={child}
                currentNodeId={currentNodeId}
                highlightedNodeId={highlightedNodeId}
                level={currentLevel+1}
                onNodeClick={(e) => onNodeClick(e, child)}
                onNodeToggleClick={onNodeToggleClick}
                treeNodeStyle={treeNodeStyle}
                treeNodeMarkedStyle={treeNodeMarkedStyle}
                treeNodeNameStyle={treeNodeNameStyle}
                treeNodeNameActiveStyle={treeNodeNameActiveStyle}
            />
        );
    });
  };

  return ( 
    <>
      <TreeNodeContainerStyled
        level={hasChildren ? currentLevel : currentLevel+1}
        nodeIndentation={nodeIndentation || 15}
        isMarked={nodeId === highlightedNodeId}
        onClick={(e) => onNodeClick(e, treeNode)}
        treeNodeStyle={treeNodeStyle}
        treeNodeMarkedStyle={treeNodeMarkedStyle}
        >
          {hasChildren && (
            <TreeNodeToggleStyled onClick={() => onToggleClick(treeNode)}>
              <Icon icon={isOpen? IconToggleOpen : IconToggleClosed} />
              <IconToggleClosed/>
            </TreeNodeToggleStyled>
          )}
          <TreeNodeNameStyled
            isSelected={nodeId === currentNodeId}
            treeNodeNameStyle={treeNodeNameStyle}
            treeNodeNameActiveStyle={treeNodeNameActiveStyle}
            >{name}</TreeNodeNameStyled>
      </TreeNodeContainerStyled>
      {isOpen && children && renderTree()}
    </>
  )
};

export default NavigationTreeNode;
