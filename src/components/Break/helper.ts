//helper goes here for Break
export type BreakProps = {num?: number}
export const buildArr = (num: number): number[] =>
{
    const ret: number[] = []
    for (let i =0; i< num; i++)
        ret.push(i)
    return ret
}
