import {IPost} from "../../moduls/IPost";
import React, {SyntheticEvent, MouseEvent} from "react";
import {
    Link, useHistory
} from "react-router-dom";
import "./Post.css";


export const Post = (props: IPost) => {
    // console.log(props);

    const {id, title} = props;
    const history = useHistory();

    const handlerOnClick = (event: MouseEvent<HTMLButtonElement>): void => {
        history.push(`/post-detail/${id}/button`, props);
    };

    return (
        <div className={'post'}>
            <p>Post {id}</p>
            <p>Title {title}</p>
            <Link to={{pathname: `/post-detail/${id}/link`, state: props}}>Post detail</Link>
            <button onClick={handlerOnClick}>Post details</button>
        </div>
    );
}

// export function Post(props: IPost) {
//     return (
//         <div>
//             {
//
//             }
//         </div>
//     );
// }