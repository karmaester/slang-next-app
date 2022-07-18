import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "../styles/DraggableChars.module.scss"


const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DraggableChars = ({ word, changeHandler }: any) => {
    const [chars, setChars] = useState<any>([]);

    useEffect(() => {
        setChars(word.map((item, idx) => {
            return {
                id: idx.toString(),
                text: item
            }
        }))
    }, [word]);

    useEffect(() => {
        changeHandler(chars.map((item: any) => item.text));
    }, [chars])

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

                setChars((prevChars) =>
                    reorder(prevChars, source.index, destination.index)
                );
            }}
        >
            <Droppable droppableId="chars" direction="horizontal">
                {(droppableProvided) => (
                    <ul
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                        className={styles.itemsContainer}
                    >
                        {chars.map((char, index) => (
                            <Draggable key={char.id} draggableId={char.id} index={index}>
                                {(draggableProvided) => (
                                    <li
                                        {...draggableProvided.draggableProps}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        className={styles.item}
                                    >
                                        {char.text}
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
