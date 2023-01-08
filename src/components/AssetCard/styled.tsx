import styled from 'styled-components';


type StyledAssetCardHoverProps = {
    isFolder?: boolean;
};

export const AssetCardHoverStyled = styled.div<StyledAssetCardHoverProps>`
    cursor: pointer;
    display: ${props => (props.isFolder ? 'none' : 'flex')};
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`;

type StyledAssetCardProps = {
    isFolder?: boolean;
};

export const StyledAssetCardTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AssetCardStyled = styled.div<StyledAssetCardProps>`
    cursor: pointer;
    box-shadow: ${props => (props.isFolder ? 'none' : '4px 4px 5px 4px rgba(0, 0, 0, 0.27)')};
    &:hover ${AssetCardHoverStyled} {
        display: flex;
    }
`;

export const StyledAssetCardImage = styled.img<StyledAssetCardProps>`
`;
