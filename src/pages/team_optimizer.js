// @flow

import React, {useMemo, useState} from 'react';
import {Table, Tooltip, Checkbox} from 'antd';

import data from '../data/heroes.js'
import type {Attribute, Hero} from "../data/heroes";

type Team = {
    members: Array<Hero>,
    atk: { basic: number, adjusted: number },
    hp: { basic: number, adjusted: number },
    def: { basic: number, adjusted: number },
}

function generateTeams(heroes: Array<Hero>, teams: Array<Team>, team: Team) {
    if (team.members.length === 4 || team.members.length === heroes.length) {
        teams.push(team)
        return;
    }
    for (const hero of heroes) {
        const newTeam = JSON.parse(JSON.stringify(team))
        if (newTeam.members.every(member => member.name < hero.name)) {
            newTeam.members.push(hero)
            generateTeams(heroes, teams, newTeam)
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
        for (let attr of ['ATK', 'HP', 'DEF']) {
            const {basic, adjusted} = team.members.map(member => {
                const basic = member[attr.toLowerCase()];
                const multiplier = 1 + (multipliers.get(member.name)?.get(attr) ?? 0);
                const adjusted = multiplier * basic;
                return {basic, adjusted}
            }).reduce((sum, value) => {
                return {basic: sum.basic + value.basic, adjusted: sum.adjusted + value.adjusted}
            }, {basic: 0, adjusted: 0});
            team[attr.toLowerCase()].basic = Math.round(basic);
            team[attr.toLowerCase()].adjusted = Math.round(adjusted);
        }


    }
}

const columns = [
    {
        title: 'Members',
        dataIndex: 'members',
        key: 'members',
        render: (heroes: Array<Hero>) => {
            return heroes.map(hero => hero.name).join(', ')
        }
    },
    {
        title: 'Level',
        key: 'level',
        render: () => 68
    },
    {
        title: 'Roles',
        dataIndex: 'members',
        key: 'roles',
        render: (heroes: Array<Hero>) => {
            return heroes.map(hero => hero.role).join(', ')
        }
    },
    {
        title: 'Elements',
        dataIndex: 'members',
        key: 'elements',
        render: (heroes: Array<Hero>) => {
            return heroes.map(hero => hero.element).join(', ')
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
        },
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.atk.adjusted - b.atk.adjusted
    },
    {
        title: 'HP',
        dataIndex: 'hp',
        key: 'hp',
        render: ({basic, adjusted}) => {
            return <Tooltip title={`${basic} ${adjusted}`}>
                {adjusted}
            </Tooltip>
        },
        sorter: (a, b) => a.hp.adjusted - b.hp.adjusted
    },
    {
        title: 'Defence',
        dataIndex: 'def',
        key: 'def',
        render: ({basic, adjusted}) => {
            return <Tooltip title={`${basic} ${adjusted}`}>
                {adjusted}
            </Tooltip>
        },
        sorter: (a, b) => a.def.adjusted - b.def.adjusted
    },
];


function TeamOptimizer() {
    const [selectedHeroes, setSelectedHeroes] = useState(data)
    const calculatedTeams = useMemo(() => {
        const teams = [];
        generateTeams(selectedHeroes, teams, {
            members: [],
            atk: {basic: 0, adjusted: 0},
            hp: {basic: 0, adjusted: 0},
            def: {basic: 0, adjusted: 0},
        });
        calculateTeamAttributes(teams);
        return teams;
    }, [selectedHeroes])

    return <div>
        <Checkbox checked={selectedHeroes.length === data.length} onChange={(e) => {
            if (e.target.checked) {
                setSelectedHeroes(data)
            } else (setSelectedHeroes([]))

        }}>Select All</Checkbox>
        <Checkbox.Group options={data.map(hero => {
            return {
                label: hero.name,
                value: hero.name
            }
        })} value={selectedHeroes.map(hero => hero.name)} onChange={heroes => {
            setSelectedHeroes(data.filter(hero => heroes.includes(hero.name)));
        }}/>
        <Table columns={columns} dataSource={calculatedTeams}/>
    </div>
}

export default TeamOptimizer;
