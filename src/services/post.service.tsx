import myAxios from "./myAxios";
import {IPost} from "../moduls/IPost";


const getPosts = () => {
    return myAxios.get<IPost[]>('/posts');
}


export {getPosts};