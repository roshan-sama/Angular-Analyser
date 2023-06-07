export interface ITreeGraph {
    name: string;
    id?: string;
    type: string;
    depth?: number;
    children?: ITreeGraph[];
}