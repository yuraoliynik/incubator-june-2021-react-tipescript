import './App.css';
import {Posts} from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    RouteComponentProps
} from "react-router-dom";
import {PostDetail} from "./components/postDetail/PostDetail";
import {IPost} from "./moduls/IPost";


export default function App() {
  return (
    <Router>
      <div className={'links'}>
          <Link to={'/'}>Home</Link>
          <Link to={'/posts'}>Posts</Link>
      </div>

        <div>
            <Switch>
                <Route exact path={'/'}>HOME :)</Route>
                <Route exact path={'/posts'} component={Posts}/>
                <Route path={'/post-detail/:id/button'} component={PostDetail}/>
                <Route path={'/post-detail/:id/link'} render={(props: RouteComponentProps<{}, {}, IPost | any>) => {
                    return <PostDetail {...props}/>
                }}/>
                <Route path={'/posts/post-detail/:id/button'} render={(props: RouteComponentProps<{}, {}, IPost | any>) => {
                    return <PostDetail {...props}/>
                }}/>
            </Switch>
        </div>
    </Router>
  );
}