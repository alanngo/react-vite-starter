import { render } from "@testing-library/react"
import { expect, test } from 'vitest'
import App from "../App"

test("demo", () =>{
    expect(true).toBe(true)
})

test("render app", () =>{
    render(<App/>)
    expect(true).toBeTruthy()
})