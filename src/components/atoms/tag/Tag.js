import React from "react";

const Tag = ({ tags }) => {
  return tags.map((tag, index) => (
    <div className="tag" key={index}>
      {tag}
    </div>
  ));
};

export default Tag;
