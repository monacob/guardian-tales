// @flow

export type Role = 'TANKER' | 'WARRIOR' | 'RANGED';
export type Element = 'WATER' | 'LIGHT' | 'FIRE' | 'EARTH' | 'DARK';
export type Resistance = { type: 'BASIC' | Element, value: number };
export type Attribute = 'HP' | 'RANGE_ATK' | 'ATK' | 'WEAPON_SKILL_REGEN_SPEED';
export type SkillTarget = 'SELF' | 'PARTY' | Element | Role
export type Skill = {
    target: SkillTarget,
    attribute: Attribute,
    value: number,
};
export type Hero = {
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
};

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
            target: 'LIGHT',
            attribute: 'ATK',
            value: 0.4
        }, {
            target: 'SELF',
            attribute: 'WEAPON_SKILL_REGEN_SPEED',
            value: 0.06
        }]
    },
    {
        name: 'Tinia',
        role: 'RANGED',
        element: 'EARTH',
        atk: 689,
        criticalHitChance: 0.03,
        hp: 18426,
        def: 124,
        damageReduction: 30,
        cardSlot: 2,
        resistance: [
            {type: 'FIRE', value: -0.3},
            {type: 'WATER', value: 0.3},
        ],
        skills: [{
            target: 'RANGED',
            attribute: 'ATK',
            value: 0.50
        }, {
            target: 'SELF',
            attribute: 'WEAPON_SKILL_REGEN_SPEED',
            value: 0.06
        }]
    }
]

export default heroes
