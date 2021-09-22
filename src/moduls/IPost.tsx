import {ReactNode} from "react";


export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
    key?: number;
    children?: ReactNode;
}