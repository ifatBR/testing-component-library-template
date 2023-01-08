import React from 'react';
import { IAsset, INodeState, ITreeNode } from '../../utils/types';
import AssetCard from '../AssetCard';
import Icon, { IIconProps } from '../Icon/Icon';
import { AssetsContainerStyled } from './styled';

export interface INavigationAssetsContainerProps {
  currentNode: ITreeNode,
  nodeAssets?: IAsset[],
  currentNodeState: INodeState,
  // nodeFolders: [],
  folderIcon?: IIconProps
}

const NavigationAssetsContainer = (props: INavigationAssetsContainerProps) => {
  const {
    currentNode,
    nodeAssets,
    folderIcon
  } = props;

  return (
      <AssetsContainerStyled>
        {nodeAssets?.map((asset: IAsset) => <AssetCard asset={asset}/>)}
      </AssetsContainerStyled>
  );
};

export default NavigationAssetsContainer;
