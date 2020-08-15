// @flow

type Role = 'TANKER' | 'WARRIOR'
type Element = 'WATER' | 'LIGHT'

type Hero = {
    name: string, role: Role, element: Element
}

const heroes: Array<Hero> = [
    {
        "name": "Marina",
        "role": "TANKER",
        "element": "WATER"
    },
    {
        "name": "Lapice",
        "role": "WARRIOR",
        "element": "LIGHT"
    }
]

export default heroes
