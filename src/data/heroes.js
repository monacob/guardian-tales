// @flow

export type Role = 'TANKER' | 'WARRIOR' | 'RANGED' | 'SUPPORT';
export type Element = 'BASIC' | 'WATER' | 'LIGHT' | 'FIRE' | 'EARTH' | 'DARK';
export type Resistance = { type: Element, value: number };
export type Attribute = 'HP' | 'DEF' | 'HEAL' | 'RANGE_ATK' | 'ATK' | 'WEAPON_SKILL_REGEN_SPEED';
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
    heal: number,
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
        heal: 0,
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
        heal: 0,
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
        heal: 0,
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
        }]
    },
    {
        name: 'Eva',
        role: 'SUPPORT',
        element: 'BASIC',
        atk: 642,
        criticalHitChance: 0.06,
        hp: 18818,
        def: 121,
        heal: 0,
        damageReduction: 24,
        cardSlot: 2,
        resistance: [
            {type: 'DARK', value: -0.3},
            {type: 'LIGHT', value: 0.3},
        ],
        skills: [{
            target: 'BASIC',
            attribute: 'ATK',
            value: 0.40
        }]
    },
    {
        name: 'Male Knight',
        role: 'WARRIOR',
        element: 'BASIC',
        atk: 565,
        criticalHitChance: 0.03,
        hp: 20028,
        def: 105,
        heal: 0,
        damageReduction: 18,
        cardSlot: 2,
        resistance: [
            {type: 'DARK', value: -0.3},
            {type: 'LIGHT', value: 0.3},
        ],
        skills: [{
            target: 'BASIC',
            attribute: 'ATK',
            value: 0.36
        }, {
            target: 'SELF',
            attribute: 'WEAPON_SKILL_REGEN_SPEED',
            value: 0.05
        }]
    },
    {
        name: 'Bari',
        role: 'RANGED',
        element: 'EARTH',
        atk: 977,
        criticalHitChance: 0.03,
        hp: 18082,
        def: 155,
        heal: 0,
        damageReduction: 22,
        cardSlot: 2,
        resistance: [
            {type: 'FIRE', value: -0.3},
            {type: 'WATER', value: 0.3},
        ],
        skills: []
    },
    {
        name: 'Elvira',
        role: 'RANGED',
        element: 'FIRE',
        atk: 684,
        criticalHitChance: 0.02,
        hp: 17642,
        def: 98,
        heal: 0,
        damageReduction: 23,
        cardSlot: 2,
        resistance: [
            {type: 'WATER', value: -0.3},
            {type: 'EARTH', value: 0.3},
        ],
        skills: [{
            target: 'RANGED',
            attribute: 'ATK',
            value: 0.48
        }]
    },
    {
        name: 'CV. Stephanie Sheh',
        role: 'SUPPORT',
        element: 'DARK',
        atk: 590,
        criticalHitChance: 0.03,
        hp: 18758,
        def: 95,
        heal: 0,
        damageReduction: 18,
        cardSlot: 2,
        resistance: [
            {type: 'LIGHT', value: -0.3},
            {type: 'BASIC', value: 0.3},
        ],
        skills: [{
            target: 'DARK',
            attribute: 'ATK',
            value: 0.30
        }]
    },
    {
        name: 'CV. jennifer Losi',
        role: 'WARRIOR',
        element: 'FIRE',
        atk: 625,
        criticalHitChance: 0.03,
        hp: 20091,
        def: 154,
        heal: 0,
        damageReduction: 22,
        cardSlot: 2,
        resistance: [
            {type: 'WATER', value: -0.3},
            {type: 'EARTH', value: 0.3},
        ],
        skills: [{
            target: 'FIRE',
            attribute: 'ATK',
            value: 0.40
        }]
    },
    {
        name: 'CV. jennifer Losi',
        role: 'WARRIOR',
        element: 'FIRE',
        atk: 625,
        criticalHitChance: 0.03,
        hp: 20091,
        def: 154,
        heal: 0,
        damageReduction: 22,
        cardSlot: 2,
        resistance: [
            {type: 'WATER', value: -0.3},
            {type: 'EARTH', value: 0.3},
        ],
        skills: [{
            target: 'FIRE',
            attribute: 'ATK',
            value: 0.40
        }]
    },
    {
        name: 'Sohee',
        role: 'RANGED',
        element: 'LIGHT',
        atk: 595,
        criticalHitChance: 0.00,
        hp: 20775,
        def: 125,
        heal: 0,
        damageReduction: 18,
        cardSlot: 2,
        resistance: [
            {type: 'BASIC', value: -0.3},
            {type: 'DARK', value: 0.3},
        ],
        skills: [{
            target: 'FIRE',
            attribute: 'ATK',
            value: 0.40
        }]
    },
    {
        name: 'Rachel',
        role: 'RANGED',
        element: 'WATER',
        atk: 688,
        criticalHitChance: 0.11,
        hp: 16434,
        def: 88,
        heal: 0,
        damageReduction: 26,
        cardSlot: 2,
        resistance: [
            {type: 'EARTH', value: -0.3},
            {type: 'FIRE', value: 0.3},
        ],
        skills: [{
            target: 'RANGED',
            attribute: 'ATK',
            value: 0.48
        }]
    },
    {
        name: 'Ranpang',
        role: 'TANKER',
        element: 'BASIC',
        atk: 403,
        criticalHitChance: 0.04,
        hp: 22233,
        def: 170,
        heal: 0,
        damageReduction: 32,
        cardSlot: 2,
        resistance: [
            {type: 'DARK', value: -0.3},
            {type: 'LIGHT', value: 0.3},
        ],
        skills: [{
            target: 'PARTY',
            attribute: 'DEF',
            value: 0.42
        }]
    },
    {
        name: 'Yuze',
        role: 'WARRIOR',
        element: 'DARK',
        atk: 521,
        criticalHitChance: 0.06,
        hp: 17967,
        def: 134,
        heal: 0,
        damageReduction: 12,
        cardSlot: 2,
        resistance: [
            {type: 'LIGHT', value: -0.3},
            {type: 'BASIC', value: 0.3},
        ],
        skills: [{
            target: 'PARTY',
            attribute: 'HP',
            value: 0.36
        }]
    },
    {
        name: 'Aoba',
        role: 'SUPPORT',
        element: 'EARTH',
        atk: 615,
        criticalHitChance: 0.05,
        hp: 16833,
        def: 120,
        heal: 1233,
        damageReduction: 15,
        cardSlot: 2,
        resistance: [
            {type: 'FIRE', value: -0.3},
            {type: 'WATER', value: 0.3},
        ],
        skills: [{
            target: 'EARTH',
            attribute: 'ATK',
            value: 0.35
        }]
    },
    {
        name: 'Loraine',
        role: 'SUPPORT',
        element: 'BASIC',
        atk: 491,
        criticalHitChance: 0.02,
        hp: 18025,
        def: 101,
        heal: 1419,
        damageReduction: 28,
        cardSlot: 2,
        resistance: [
            {type: 'DARK', value: -0.3},
            {type: 'LIGHT', value: 0.3},
        ],
        skills: []
    }
]

export default heroes
