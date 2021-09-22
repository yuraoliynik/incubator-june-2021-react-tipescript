import {FC} from "react";
import {IPost} from "../../moduls/IPost";

export const Post2: FC<IPost> = (props) => {
    // console.log(props);
    return (
        <div>
            {
                props.children
            }
        </div>
    );
}