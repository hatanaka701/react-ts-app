import { FC } from "react";

type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = props => {
    const { memos, onClickDelete } = props;

    const container = {
        border: "solid 1px #ccc",
        padding: "16px",
        margin: "8px"
    };

    const MemoWrapper = {
        display: "flex",
        alignItems: "center"
    };

    const button = {
        marginLeft: "16px"
    }

    return (
        <div style={container}>
                <p>メモ一覧</p>
                <ul>
                    {memos.map((memo, index) => (
                        <li key={memo}>
                            <div style={MemoWrapper}>
                                <p>{memo}</p>
                                <button style={button} onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    );
};