import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "../styles/DraggableChars.module.scss"

type charsT = {
    id: string,
    text: string,
}[];

type DraggableCharsPropsT = {
    word: string[],
    changeHandler: any,
}

const reorder = (list: charsT, startIndex: number, endIndex: number): charsT => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DraggableChars = ({ word, changeHandler }: DraggableCharsPropsT): JSX.Element => {
    const [chars, setChars] = useState<charsT | []>([]);

    useEffect(() => {
        setChars(word.map((item: string, idx: number) => {
            return {
                id: idx.toString(),
                text: item
            }
        }))
    }, [word]);

    useEffect(() => {
        changeHandler(chars.map((item) => item.text).join(""));
    }, [chars, changeHandler])

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
};

export default DraggableChars;
