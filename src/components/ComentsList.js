import { useState } from "react";

function CommentsList({ title }) {
    const [comments, setComments] = useState([
        { id: crypto.randomUUID(), text: "Это первый комментарий" },
        { id: crypto.randomUUID(), text: "Это второй комментарий" },
        { id: crypto.randomUUID(), text: "Это третий комментарий" },
    ]);

    const removeComments = (id) => {
        const newArray = comments.filter((comment) => comment.id !== id);
        setComments(newArray);
    };

    return (
        <>
            <h2>{title}</h2>
            <ul>
                {comments.map((elem) => (
                    <li key={elem.id}>
                        {elem.text}
                        <button onClick={() => removeComments(elem.id)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CommentsList;
