// @flow

import React from 'react';
import {Table, Tooltip} from 'antd';

import heroes from '../data/heroes.js'
import type {Attribute, Hero} from "../data/heroes";

type Team = {
    members: Array<Hero>,
    atk: { basic: number, adjusted: number },
    hp: { basic: number, adjusted: number },
}

const teams = [];
generateTeams({
    members: [],
    atk: {basic: 0, adjusted: 0},
    hp: {basic: 0, adjusted: 0},
});
calculateTeamAttributes(teams);

function generateTeams(team: Team) {
    if (team.members.length === 4 || team.members.length === heroes.length) {
        teams.push(team)
    }
    for (const hero of heroes) {
        const newTeam = JSON.parse(JSON.stringify(team))
        if (newTeam.members.every(member => member.name < hero.name)) {
            newTeam.members.push(hero)
            generateTeams(newTeam)
        }
    }
}

function calculateTeamAttributes(teams: Array<Team>) {
    for (const team of teams) {
        const multipliers = new Map<string, Map<Attribute, number>>();
        for (let skilledMember of team.members) {
            for (let member of team.members) {
                for (let skill of skilledMember.skills) {
                    const eligible = (skill.target === 'SELF' && skilledMember.name === member.name)
                        || member.element === skill.target
                        || member.role === skill.target
                        || skill.target === 'PARTY'
                    if (eligible) {
                        if (!multipliers.has(member.name)) {
                            multipliers.set(member.name, new Map());
                        }
                        const memberMap = multipliers.get(member.name);
                        if (memberMap != null) {
                            if (!memberMap.has(skill.attribute)) {
                                memberMap.set(skill.attribute, 0);
                            }
                            const attr = memberMap.get(skill.attribute);
                            if (attr != null) {
                                memberMap.set(skill.attribute, attr + skill.value)
                            }
                        }
                    }
                }
            }
        }
        for (let attr of ['ATK', 'HP']) {
            const {basic, adjusted} = team.members.map(member => {
                const basic = member[attr.toLowerCase()];
                const multiplier = 1 + (multipliers.get(member.name)?.get(attr) ?? 0);
                const adjusted = multiplier * basic;
                return {basic, adjusted}
            }).reduce((sum, value) => {
                return {basic: sum.basic + value.basic, adjusted: sum.adjusted + value.adjusted}
            }, {basic: 0, adjusted: 0});
            team[attr.toLowerCase()].basic = basic;
            team[attr.toLowerCase()].adjusted = adjusted;
        }


    }
}

const columns = [
    {
        title: 'Members',
        dataIndex: 'members',
        key: 'members',
        render: (heroes: Array<Hero>) => {
            return heroes.map(hero => hero.name).join(',')
        }
    },
    {
        title: 'Attack',
        dataIndex: 'atk',
        key: 'atk',
        render: ({basic, adjusted}) => {
            return <Tooltip title={`${basic} ${adjusted}`}>
                {adjusted}
            </Tooltip>
        }
    },
    {
        title: 'HP',
        dataIndex: 'hp',
        key: 'hp',
        render: ({basic, adjusted}) => {
            return <Tooltip title={`${basic} ${adjusted}`}>
                {adjusted}
            </Tooltip>
        }
    },
    // {
    //     title: 'Defence',
    //     dataIndex: 'def',
    //     key: 'def',
    // }, {
    //     title: 'Damage Reduction',
    //     dataIndex: 'damageReduction',
    //     key: 'damageReduction',
    // }, {
    //     title: 'Critical Hit Chance',
    //     dataIndex: 'criticalHitChance',
    //     key: 'criticalHitChance',
    // }, {
    //     title: 'Resistance',
    //     dataIndex: 'resistance',
    //     key: 'resistance',
    //     render: (resistance: Array<Resistance>) => {
    //         return resistance.map(res => {
    //             return <div>{`${res.type}: ${res.value * 100}%`}</div>
    //         })
    //     }
    // }, {
    //     title: 'Card Slot',
    //     dataIndex: 'cardSlot',
    //     key: 'cardSlot',
    // }, {
    //     title: 'Skills',
    //     dataIndex: 'skills',
    //     key: 'skills',
    //     render: (skills: Array<Skill>) => {
    //         return skills.map(skill => {
    //             const target = skill.target === 'SELF' ? '' : `[${skill.target}]`
    //             return <div>{`${target}${skill.attribute}: ${skill.value * 100}%`}</div>
    //         })
    //     }
    // },
];


function TeamOptimizer() {
    return <Table columns={columns} dataSource={teams}/>
}

export default TeamOptimizer;
