export interface ITreeNode {
    _id: string;
    name: string;
    level?: number;
    parent_id?: string;
    has_children: boolean;
    children?: ITreeNode[];
};

export interface IAsset {
    id: string;
    name: string;
    resource: string;
    desc: string;
    thumb: IAssetThumb;
    metadata: string;
    provider_id: string;
    version: string;
    type_id: string;
    parent_ids: string[];
    file: IAssetFile;
    assetLink?: string;
    provider?: IAssetProvider;
    has_more?: boolean;
    outlines?: IAssetOutline[];
}

export interface IAssetThumb {
    default: {
        h: number;
        url: string;
        w: number;
        _ut: string;
    };
}

export interface IAssetFile {
    mimetype: any;
    orig_name: string;
    size: number;
}

export interface IAssetOutline {
    id: string;
    type: string;
    image_url: string;
}

export interface IAssetProvider {
    _id: string;
    name: string;
}

export interface INodeState {
    isReady: boolean,
    assets: IAsset[],
    isHasMore:boolean,
    loadMoreAssets(id: string): IAsset[],
    initAssets(id: string): void
}

export interface IIcon {
    height?: number;
    width?: number;
}