import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/nilesh90.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Nilesh Ghait</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          nilghait99@ <span>45m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
          aliquid dolores placeat vitae accusamus excepturi officiis magnam
          pariatur?
        </div>
        <div className="postss__details__img">
          <img src="/images/download.jpg" alt="post" />
        </div>
        <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
          aliquid dolores placeat vitae accusamus excepturi officiis magnam
          pariatur?
        </div>
        <div className="postss__details__img">
          <img src="/images/pm.jpg" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 90
          </span>
          <span>
            <FaRegChartBar className="re" /> 5
          </span>
          <span>
            <FaHeart className="re" /> 980
          </span>
          <span>
            <FaLeaf className="re" /> 679
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Posts;