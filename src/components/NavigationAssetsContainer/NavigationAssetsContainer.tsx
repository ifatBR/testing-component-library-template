import React from 'react';
import { IAsset, INodeState, ITreeNode } from '../../utils/types';
import AssetCard from '../AssetCard';
import Icon, { IIconProps } from '../Icon/Icon';
import { AssetsContainerStyled } from './styled';

export interface INavigationAssetsContainerProps {
  nodeAssets?: IAsset[],
  folderIcon?: IIconProps,
  cardStyleAsset?: {[key:string]:string};
  cardStyleFolder?: {[key:string]:string};
  navigationContainerStyle?: {[key:string]:string}; 
  cardImageStyle?: {[key:string]:string}; 
  titleStyle?: {[key:string]:string}; 
  onAssetClick?(asset: IAsset): void;
  onDownload?(id: string): void;
}

const NavigationAssetsContainer = (props: INavigationAssetsContainerProps) => {
  const {
    nodeAssets,
    cardStyleAsset,
    cardStyleFolder,
    navigationContainerStyle,
    cardImageStyle,
    titleStyle,
    onAssetClick,
    onDownload
  } = props;

  return (
      <AssetsContainerStyled navigationContainerStyle={navigationContainerStyle}>
        {nodeAssets?.map((asset: IAsset) => {
          return (
            <AssetCard 
              key={asset.id}
              asset={asset}
              cardStyleAsset={cardStyleAsset}
              cardStyleFolder={cardStyleFolder}
              cardImageStyle={cardImageStyle}
              titleStyle={titleStyle}
              onAssetClick={onAssetClick}
              onDownload={onDownload}
            />)
          }
        )}
      </AssetsContainerStyled>
  );
};

export default NavigationAssetsContainer;
