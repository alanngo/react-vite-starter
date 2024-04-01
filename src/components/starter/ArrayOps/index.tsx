
import Button from '../../vite/Button';
import { usePublisher } from '../../../helper/functions/hooks/events';
import { ArrayEntry } from '../../../helper/types/arrays';
import Break from '../../Break';
import { useState } from 'react';

const ArrayOps = (): JSX.Element => {
    const publish = usePublisher()
    const [back, setBack] = useState<string>("")
    const [front, setFront] = useState<string>("")
    const [entry, setEntry] = useState<ArrayEntry<string>>({ idx: -1, elem: "" })
    return (
        <div className='ArrayOps'>
            <label>push back </label><input onChange={(e) => setBack(e.target.value)} />
            <Button onClick={() => publish<string>("PUSH_BACK", back || "BLANK")}>+</Button>
            <Break />


            <label>push front </label><input onChange={(e) => setFront(e.target.value)} />
            <Button onClick={() => publish<string>("PUSH_FRONT", front || "BLANK")}>+</Button>
            <Break num={2} />

            <label>index </label><input
                type="number"
                min={0}
                onChange={(e) => setEntry({ ...entry, idx: Number(e.target.value) })}/>
            <Break />
            <label>element </label> <input onChange={(e) => setEntry({ ...entry, elem: e.target.value })} />
            <Break />
            <Button onClick={() => publish<ArrayEntry<string>>("INSERT", entry ||"BLANK")}>Insert</Button>

            <Break num={2} />

            <Button onClick={() => publish<null>("SORT_ASC", null)}>sort ascending</Button>
            <Button onClick={() => publish<null>("SORT_DESC", null)}>sort descending</Button>
        </div>
    )
}
export default ArrayOps;
