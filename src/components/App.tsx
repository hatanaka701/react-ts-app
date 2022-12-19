import { ChangeEvent, useState, FC, memo, useCallback } from "react";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";
 
export const App = () => {
    const { memos, addTodo, deleteTodo } = useMemoList();
    const [text, setText] = useState<string>("");
   

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const onClickAdd = () => {
        addTodo(text)
        setText("");
    };

    const onClickDelete = useCallback((index: number) => {
        deleteTodo(index);
    }, [deleteTodo]);

    const button = {
        marginLeft: "16px"
    }

    return (
        <div>
            <h1>簡単メモアプリ</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <button style={button} onClick={onClickAdd}>追加</button>
            <MemoList memos={memos} onClickDelete={onClickDelete} />
        </div>
    );

};