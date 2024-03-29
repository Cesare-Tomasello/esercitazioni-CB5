import "./Post.css";
import React from "react";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

function Post({ data }) {
  const [user, setUser] = useState({});
  const imgUrl = "https://picsum.photos/380/330?";

  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  const likeClick = () => {
    setLike((prev) => !prev);
  };

  const saveClick = () => {
    setSave((prev) => !prev);
  };

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Post">
      <div className="postHeader">
        <div className="headerLeft">
          <img src={user.image} alt={user.firstName} className="postImg" />
          <p>@{user.firstName}</p>
        </div>
        <div className="headerRight">
          <span className="material-symbols-outlined headerMenu">
            more_vert
          </span>
        </div>
      </div>
      <div className="fakeImgContainer">
        <img className="fakeImg" src={imgUrl + data.id} alt="Post Image" />
      </div>
      <div className="postIcons">
        <div className="leftPostIcons">
          <button className="likeButton" onClick={likeClick}>
            <span className="material-symbols-outlined">
              {like === false ? "favorite" : "heart_plus"}
            </span>
          </button>
          <button>
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
          <button>
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <div className="rightPostIcons">
          <button className="saveButton" onClick={saveClick}>
            <span className="material-symbols-outlined">
              {save === false ? "bookmark_add" : "bookmark_added"}
            </span>
            {save === false ? "" : "Saved!"}
          </button>
        </div>
      </div>
      <h4 className="likes">{data.reactions} likes</h4>
      <div className="postText">
        <h4>{data.title}</h4>
        <p>{data.body}</p>
      </div>
    </div>
  );
}

export default Post;
