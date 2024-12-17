import React from "react";

const Api = (props) => {
  const { author, src } = props;

  return (
    <div className="card shadow-xl p-2 m-3">
      <img
        className="image h-[200px] w-[100%] p-[4px] cover"
        src={src}
        alt="image"
      />
      <h1 className="font-bold underline">{author}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        dolorum nulla error odio cupiditate incidunt labore, alias doloremque,
        harum repellendus, modi molestias tempora eos!
      </p>
    </div>
  );
};

export default Api;
