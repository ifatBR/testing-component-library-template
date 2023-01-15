import React, { useState } from 'react';
import { IIcon, ITreeNode } from '../../utils/types';
import NavigationTreeNode from './NavigationTreeNode';

export interface INavigationTreeProps {
  treeData: ITreeNode;
  currentNode?: ITreeNode;
  treeNodeStyle?: {[key:string]:string};
  treeNodeMarkedStyle?: {[key:string]:string};
  treeNodeNameStyle?: {[key:string]:string};
  treeNodeNameActiveStyle?: {[key:string]:string};
  toggleIconStyle?: {[key:string]:string};
  UserIconToggleOpen?: string;
  UserIconToggleClosed?: string;
  toggleIconProps?: IIcon;
  onNodeClick(node: ITreeNode): void;
  onNodeToggleClick?(node: ITreeNode): void;
}

const NavigationTree = (props: INavigationTreeProps) => {
  const {
    treeData,
    currentNode,
    treeNodeStyle,
    treeNodeMarkedStyle,
    treeNodeNameStyle,
    treeNodeNameActiveStyle,
    toggleIconStyle,
    UserIconToggleOpen,
    UserIconToggleClosed,
    toggleIconProps,
    onNodeClick,
    onNodeToggleClick,
  } = props;

  const [currentNodeId, setCurrentNodeId] = useState(currentNode?._id || treeData._id);
  const [highlightedNodeId, setHighlightedNodeId] = useState('');

  const onTreeNodeClick = (e: React.MouseEvent<HTMLDivElement>, node: ITreeNode) => {
    const nodeId = node._id;
    setHighlightedNodeId(nodeId);
    //Select node only when double clicked
    if (1 < e.detail) {
      setCurrentNodeId(nodeId)
      onNodeClick(node);
    }
  };

  const onToggle = (node: ITreeNode) => {
    onNodeToggleClick?.(node)
  };

  return ( 
    <>
      <NavigationTreeNode 
        treeNode={treeData}
        onNodeClick={onTreeNodeClick}
        onNodeToggle={onToggle}
        currentNodeId={currentNodeId}
        highlightedNodeId={highlightedNodeId}
        treeNodeStyle={treeNodeStyle}
        treeNodeMarkedStyle={treeNodeMarkedStyle}
        treeNodeNameStyle={treeNodeNameStyle}
        treeNodeNameActiveStyle={treeNodeNameActiveStyle}
        UserIconToggleOpen={UserIconToggleOpen}
        UserIconToggleClosed={UserIconToggleClosed}
        toggleIconProps={toggleIconProps}
        toggleIconStyle={toggleIconStyle}
      />
    </>
  )
};

export default NavigationTree;
