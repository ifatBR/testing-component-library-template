import React, { useEffect, useState } from 'react';
import { TOGGLE_ICON_SIZE } from '../../utils/constants';
import { IIcon, ITreeNode } from '../../utils/types';
import { TreeNodeContainerStyled, TreeNodeNameStyled } from './styled';
import IconToggleClosed from '../../assets/icons/toggle-closed.svg';
import IconToggleOpen from '../../assets/icons/toggle-open.svg';
import Icon from '../Icon';

export interface INavigationTreeNodeProps {
  treeNode: ITreeNode;
  currentNodeId: string;
  highlightedNodeId: string;
  nodeIndentation?: number; //Rem
  treeNodeStyle?: {[key:string]:string};
  treeNodeMarkedStyle?: {[key:string]:string};
  treeNodeNameStyle?: {[key:string]:string};
  treeNodeNameActiveStyle?: {[key:string]:string};
  toggleIconStyle?: {[key:string]:string};
  level?: number;
  toggleIconProps?: IIcon;
  UserIconToggleOpen?: string;
  UserIconToggleClosed?: string;
  onNodeClick(e:React.MouseEvent<HTMLDivElement>, node: ITreeNode): void;
  onNodeToggle?(node: ITreeNode): void;
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
    toggleIconStyle,
    level,
    toggleIconProps,
    UserIconToggleOpen,
    UserIconToggleClosed,
    onNodeClick,
    onNodeToggle
  } = props;

  const { children, _id: nodeId, has_children: hasChildren, name } = treeNode;
  const [isOpen, setIsOpen] = useState(false);
  const currentLevel = level ? level : 0;
  useEffect(() => {
    const open = isOpen || nodeId === currentNodeId;
    setIsOpen(open);
  }, [children]);

  const onToggle = (node: ITreeNode) => {
    if (node.children) return;
    setIsOpen(!isOpen);
    onNodeToggle?.(treeNode);
  };

  const renderTree = () => {
    return children?.map((child: ITreeNode) => {
        return (
            <NavigationTreeNode
                {...props}
                key={child._id}
                treeNode={child}
                level={currentLevel+1}
            />
        );
    });
  };

  const iconOpen = UserIconToggleOpen ? UserIconToggleOpen : IconToggleOpen;
  const iconClosed = UserIconToggleClosed ? UserIconToggleClosed : IconToggleClosed;
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
          <Icon 
            Icon={isOpen ? iconOpen : iconClosed} 
            iconProps={
              {
                height: TOGGLE_ICON_SIZE.HEIGHT,
                width: TOGGLE_ICON_SIZE.WIDTH,
                //If toggleIconProps contains height and width, they will override the default ones
                ...toggleIconProps
              }
            }
            iconStyle={toggleIconStyle}
            onIconClicked={onToggle}
          />
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
