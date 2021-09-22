import {MouseEvent, useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import {IPost} from "../../moduls/IPost";
import {Post} from "../post/Post";
import {Post2} from "../post/Post2";
import {RouteComponentProps} from "react-router-dom";
import "./Posts.css";


export function Posts(props: RouteComponentProps) {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={'posts'}>
            <div className={'posts-1'}>
                {
                    posts.map(item => <Post {...item} key={item.id}/>)
                }
            </div>

            <div className={'posts-2'}>
                {
                    posts.map(item => <Post2 {...item} key={item.id}>
                            <button onClick={(event: MouseEvent<HTMLButtonElement>) => {
                                props.history.push(`/posts/post-detail/${item.id}/button`, item);
                            }}> {`Post № ${item.id}`}
                            </button>
                        </Post2>
                    )
                }
            </div>
        </div>
    );
}