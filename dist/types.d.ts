export declare type StatusType = 'beta' | 'deprecated' | 'stable' | 'releaseCandidate' | string;
export declare type UrlStatusType = {
    name: StatusType;
    url: string;
};
export declare type CustomStatusType = {
    background?: string;
    color?: string;
    description: string;
};
export declare type CustomStatusTypes = {
    [key: string]: CustomStatusType;
};
export declare type AddonParameters = {
    type?: StatusType | (StatusType | UrlStatusType)[];
    statuses?: CustomStatusTypes;
    url?: string;
};
