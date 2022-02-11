import React from "react";

const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        /* console.log('i am being dragged '); */
        console.log(event);
    }

    return (
        <div>
            <hr></hr>
            <small>- events/EventComponet.tsx구역 -</small><br></br>
            <h3>EventComponent 입니다</h3><br></br>
            {/* 1) <input onChange={(e) => console.log(e)} /> */}
            {/* 2)  */}
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </div>
    );
};
export default EventComponent;