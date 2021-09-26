import React from "react";

const Selected = (props) => {
  console.log(props);
  const { name } = props.personName;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Selected;
