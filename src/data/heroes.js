// @flow

type Role = 'TANKER' | 'WARRIOR'
type Element = 'WATER' | 'LIGHT'
type Resistance = { type: 'BASIC' | 'DARK' | 'FIRE' | 'EARTH', value: number }
type Attribute = 'HP' | 'RANGE_ATK' | 'LIGHT_ATK' | 'WEAPON_SKILL_REGEN_SPEED'
type SkillTarget = 'SELF' | 'PARTY'
type Skill = {
    target: SkillTarget,
    attribute: Attribute,
    value: number,
}
type Hero = {
    name: string,
    role: Role,
    element: Element,
    atk: number,
    criticalHitChance: number,
    hp: number,
    def: number,
    damageReduction: number,
    cardSlot: number,
    resistance: Array<Resistance>,
    skills: Array<Skill>,
}

const heroes: Array<Hero> = [
    {
        name: 'Marina',
        role: 'TANKER',
        element: 'WATER',
        atk: 659,
        criticalHitChance: 0.0,
        hp: 23471,
        def: 398,
        damageReduction: 19,
        cardSlot: 2,
        resistance: [
            {type: 'FIRE', value: 0.3},
            {type: 'EARTH', value: -0.3}
        ],
        skills: [{
            target: 'PARTY',
            attribute: 'HP',
            value: 0.4
        }, {
            target: 'SELF',
            attribute: 'WEAPON_SKILL_REGEN_SPEED',
            value: 0.08
        }]
    },
    {
        name: 'Lapice',
        role: 'WARRIOR',
        element: 'LIGHT',
        atk: 629,
        criticalHitChance: 0.08,
        hp: 19941,
        def: 125,
        damageReduction: 26,
        cardSlot: 2,
        resistance: [
            {type: 'BASIC', value: -0.3},
            {type: 'DARK', value: 0.3},
        ],
        skills: [{
            target: 'PARTY',
            attribute: 'LIGHT_ATK',
            value: 0.4
        }, {
            target: 'SELF',
            attribute: 'WEAPON_SKILL_REGEN_SPEED',
            value: 0.06
        }]
    }
]

export default heroes
