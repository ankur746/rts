import React from "react";

const EventComponent = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag is started");
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
