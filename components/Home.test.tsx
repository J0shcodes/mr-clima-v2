import "@testing-library/jest-dom"
// import { fireEvent, render, screen } from "@testing-library/react"

function sum(a: number, b: number) {
    return a + b
}

test("adds 3 + 2 to equal 5", () => {
    expect(sum(3, 2)).toBe(5)
    expect(sum(3, 3)).not.toBe(5)
})

// test("object assignment", () => {
//     const data: any = { one: 1 }
//     data["two"] = 2
//     expect(data).toEqual({ one: 1, two: 2 })
// })

test("There is a 'stop' in Christoph", () => {
    expect("Christoph").toMatch(/stop/)
})

async function getResponse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ value: "Hello, World!" })
        }, 1000)
    })
}

test("getResponse returns 'Hello, World!'", async () => {
    const response = await getResponse()
    expect(response).toEqual({ value: "Hello, World!" })
})
