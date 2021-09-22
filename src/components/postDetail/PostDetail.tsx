import {RouteComponentProps} from "react-router-dom";
import React from "react";
import {IPost} from "../../moduls/IPost";


export function PostDetail(props: RouteComponentProps<{}, {}, IPost>) {
    const {location: {state: {id, userId, title, body}}} = props;

    return (
        <div>
            <p>Post: {id}</p>
            <p>User: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
}