import "./components1.css";

import Text from "./inlineCSS";

import { Picture, BackgroundImg } from "./img";

import { Write as Paper } from "./title";

import { Post, Post2, Post3, Post4 } from "./props";

let postInfo = {
  title: "James Bond",
  textColor: "navy",
  num: 90,
};

function App() {
  return (
    <>
      <Text></Text>

      <Picture />
      <BackgroundImg></BackgroundImg>

      <Paper></Paper>

      <Post title="jurassic park" director="james cameron"></Post>

      <Post2 title="jurassic world" textColor="green" num={22}></Post2>
      <Post2 title="jurassic world dominion"></Post2>
      <Post2 {...postInfo}></Post2>
      
      <Post3 pip={postInfo}></Post3>

      <Post4 name="harry">
        <Text />
      </Post4>
    </>
  );
}

export default App;