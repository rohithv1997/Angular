import { IBasePost } from '../models/IBasePost.model';

export interface IPost extends IBasePost {
    title: string;
    content: string;
    id?: string;
}
