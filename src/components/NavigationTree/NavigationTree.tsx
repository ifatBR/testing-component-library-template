import React, { useState } from 'react';
import { ITreeNode } from '../../utils/types';
import NavigationTreeNode from './NavigationTreeNode';

export interface INavigationTreeProps {
  treeData: ITreeNode;
  currentNode?: ITreeNode;
  treeNodeStyle?: {[key:string]:string};
  treeNodeMarkedStyle?: {[key:string]:string};
  treeNodeNameStyle?: {[key:string]:string};
  treeNodeNameActiveStyle?: {[key:string]:string};
  onNodeClick(node: ITreeNode): void;
  onNodeToggleClick(node: ITreeNode): void;
}

const NavigationTree = (props: INavigationTreeProps) => {
  const {
    treeData,
    currentNode,
    treeNodeStyle,
    treeNodeMarkedStyle,
    treeNodeNameStyle,
    treeNodeNameActiveStyle,
    onNodeClick,
    onNodeToggleClick,
  } = props;

  const [currentNodeId, setCurrentNodeId] = useState(currentNode?._id || treeData._id);
  const [highlightedNodeId, setHighlightedNodeId] = useState('');
  const onTreeNodeClick = (e: React.MouseEvent<HTMLDivElement>, node: ITreeNode) => {
    const nodeId = node._id;
    setHighlightedNodeId(nodeId);
    if (1 < e.detail) {
      setCurrentNodeId(nodeId)
      onNodeClick(node);
    }
  };

  const onToggleClick = (node: ITreeNode) => {
    if (node.children) return;
    onNodeToggleClick(node)
  };

  return ( 
    <>
      <NavigationTreeNode 
        treeNode={treeData}
        onNodeClick={onTreeNodeClick}
        onNodeToggleClick={onToggleClick}
        currentNodeId={currentNodeId}
        highlightedNodeId={highlightedNodeId}
        treeNodeStyle={treeNodeStyle}
        treeNodeMarkedStyle={treeNodeMarkedStyle}
        treeNodeNameStyle={treeNodeNameStyle}
        treeNodeNameActiveStyle={treeNodeNameActiveStyle}
      />
    </>
  )
};

export default NavigationTree;
