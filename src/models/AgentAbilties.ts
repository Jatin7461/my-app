export class Abilities {
    ult: boolean
    q: boolean
    c: boolean
    v: boolean
    constructor(ult: boolean, q: boolean, v: boolean, c: boolean) {
        this.ult = ult;
        this.q = q;
        this.v = v;
        this.c = c;
    }
}