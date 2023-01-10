import React from 'react';
import { IAsset } from '../../utils/types';
import HighlightedTitle from '../HighlightedTitle';
import Icon from '../Icon';
import IconDownload from '../../assets/icons/download.svg';
import { AssetCardStyled, AssetCardHoverStyled, StyledAssetCardImage, StyledAssetCardTitleContainer } from './styled';

export interface IAssetCardProps {
  asset: IAsset;
  isFolder?: boolean;
  searchTerm?: string;
  UserDownloadIcon?: string;
  onAssetClick?(asset: IAsset): void;
  onDownload?(id: string): void;
}

const AssetCard = (props: IAssetCardProps) => {
  const { asset, isFolder, searchTerm, UserDownloadIcon, onAssetClick, onDownload } = props;

  const handleAssetClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    onAssetClick?.(asset);
  };
  
  const handleDownload = async () => {
    onDownload?.(asset.id);
  };

  return (
    <AssetCardStyled isFolder={isFolder}>
      <StyledAssetCardImage
          onClick={e => handleAssetClick(e)}
          isFolder={isFolder}
          src={asset?.thumb?.default?.url}
      />
      <AssetCardHoverStyled onClick={e => e.stopPropagation()} isFolder={isFolder}>
          <StyledAssetCardTitleContainer>
              <HighlightedTitle title={asset?.name || ""} highlight={searchTerm}/>
          </StyledAssetCardTitleContainer>
          <Icon
              Icon={UserDownloadIcon || IconDownload}
              onIconClicked={handleDownload} />
      </AssetCardHoverStyled>
    </AssetCardStyled>
  );
};

export default AssetCard;
