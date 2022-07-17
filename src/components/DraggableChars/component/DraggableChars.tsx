import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "../styles/DraggableChars.module.scss"

const initialItems = [
    {
        id: "1",
        text: "o",
    },
    {
        id: "2",
        text: "h",
    },
    {
        id: "3",
        text: "l",
    },
    {
        id: "4",
        text: "e",
    },
    {
        id: "5",
        text: "l",
    },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DraggableChars = () => {
    const [tasks, setTasks] = useState(initialItems);
    return (
        <DragDropContext
            onDragEnd={(result) => {
                const { source, destination } = result;
                if (!destination) {
                    return;
                }
                if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                ) {
                    return;
                }

                setTasks((prevTasks) =>
                    reorder(prevTasks, source.index, destination.index)
                );
            }}
        >
            <Droppable droppableId="tasks" direction="horizontal">
                {(droppableProvided) => (
                    <ul
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                        className={styles.itemsContainer}
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(draggableProvided) => (
                                    <li
                                        {...draggableProvided.draggableProps}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        className={styles.item}
                                    >
                                        {task.text}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default DraggableChars;
