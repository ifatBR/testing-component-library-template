import styled from 'styled-components';


type StyledAssetCardProps = {
    isFolder?: boolean;
    cardStyleAsset?: {[key:string]:string};
    cardStyleFolder?: {[key:string]:string};
    cardHoverStyle?: {[key:string]:string};
    cardImageStyle?: {[key:string]:string};
    titleStyle?: {[key:string]:string};
};

export const AssetCardHoverStyled = styled.div<StyledAssetCardProps>`
    display: flex;
    justify-content: space-between;
`;

export const AssetCardStyled = styled.div<StyledAssetCardProps>`
    cursor: pointer;
    box-shadow: 4px 4px 5px 4px rgba(0, 0, 0, 0.27);
    position: relative;
    ${props => props.isFolder ? props.cardStyleFolder : props.cardStyleAsset}

`;
    
export const StyledAssetCardTitleContainer = styled.div<StyledAssetCardProps>`
    display: flex;
    ${props => props.titleStyle}
`;
    
export const StyledAssetCardImage = styled.img<StyledAssetCardProps>`
    width: 100%;
    ${props => props.cardImageStyle}
`;
