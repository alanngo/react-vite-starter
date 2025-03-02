import ArrayOps from "../../components/starter/ArrayOps";
import Anchor from "../../components/vite/Anchor";
import Button from "../../components/vite/Button";
import { ascending, descending } from "../../helper/functions";
import { useArray } from "../../helper/functions/hooks";
import { useSubscriber } from "../../helper/functions/hooks/events";
import { ArrayEntry } from "../../helper/types/arrays";

const TodoList = (): JSX.Element => {
    const { arr: todos, pushBack, pushFront, insert, setElem, remove, clear, sort } = useArray<string>(["Make Todo List"])
    useSubscriber<string>("PUSH_BACK", (data: string) => {
        pushBack(data)
    })

    useSubscriber<string>("PUSH_FRONT", (data: string) => {
        pushFront(data)
    })

    useSubscriber<ArrayEntry<string>>("INSERT", ({ idx, elem }: ArrayEntry<string>) => {
        insert(idx, elem)
    })

    useSubscriber<ArrayEntry<string>>("SET_ELEM", ({ idx, elem }: ArrayEntry<string>) => {
        setElem(idx, elem)
    })

    useSubscriber<null>("SORT_ASC", () => {
        sort(ascending)
    })
    useSubscriber<null>("SORT_DESC", () => {
        sort(descending)
    })
    return (
        <div className='TodoList'>
            <Button onClick={clear}>Clear list</Button>
            <ArrayOps />
            {
                todos.map((e, i) =>
                (
                    <h2 key={i}>{e} <Anchor href="#" onClick={() => { remove(i) }}>X</Anchor></h2>
                ))
            }

        </div>
    )
}
export default TodoList;
