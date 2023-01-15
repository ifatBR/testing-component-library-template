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
  cardStyleAsset?: {[key:string]:string};
  cardStyleFolder?: {[key:string]:string};
  cardHoverStyle?: {[key:string]:string};
  cardImageStyle?: {[key:string]:string};
  downloadIconStyle?: {[key:string]:string};
  titleStyle?: {[key:string]:string};
  onAssetClick?(asset: IAsset): void;
  onDownload?(id: string): void;
}

const AssetCard = (props: IAssetCardProps) => {
  const { asset, isFolder, searchTerm, UserDownloadIcon, cardStyleAsset, cardStyleFolder, cardHoverStyle, cardImageStyle, downloadIconStyle, titleStyle, onAssetClick, onDownload } = props;

  const handleAssetClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    onAssetClick?.(asset);
  };
  
  const handleDownload = async () => {
    onDownload?.(asset.id);
  };

  return (
    <AssetCardStyled cardStyleAsset={cardStyleAsset} cardStyleFolder={cardStyleFolder} isFolder={isFolder}>
      <StyledAssetCardImage
          onClick={e => handleAssetClick(e)}
          cardImageStyle={cardImageStyle}
          src={asset?.thumb?.default?.url}
      />
      <AssetCardHoverStyled onClick={e => e.stopPropagation()} cardHoverStyle={cardHoverStyle}>
          <StyledAssetCardTitleContainer titleStyle={titleStyle}>
              <HighlightedTitle title={asset?.name || ""} highlight={searchTerm}/>
          </StyledAssetCardTitleContainer>
          <Icon
              className='icon'
              Icon={UserDownloadIcon || IconDownload}
              onIconClicked={handleDownload}
              iconStyle={{...downloadIconStyle}}
          />
      </AssetCardHoverStyled>
    </AssetCardStyled>
  );
};

export default AssetCard;
