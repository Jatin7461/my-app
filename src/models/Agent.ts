import { url } from "inspector"

export class Agent {
    name: string
    role: string
    description: string
    ult: string
    c: string
    q: string
    v: string
    image: string

    constructor(name: string, role: string, description: string, ult: string, c: string, q: string, v: string, image: string,) {
        this.name = name
        this.role = role
        this.description = description
        this.ult = ult
        this.q = q
        this.v = v
        this.image = image
        this.c = c

    }
}