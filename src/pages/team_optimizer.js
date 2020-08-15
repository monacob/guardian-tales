// @flow

import React from 'react';
import type {Skill, Resistance} from "../data/heroes.js";
import {Table} from 'antd';

import heroes from '../data/heroes.js'
import type {Hero} from "../data/heroes";

type Team = {
    members: Array<Hero>
}

const teams = [];
generateTeams({
    members: []
});

function generateTeams(team: Team) {
    if (team.members.length === 4 || team.members.length === heroes.length) {
        teams.push(team)
    }
    for (const hero of heroes) {
        const newTeam = JSON.parse(JSON.stringify(team))
        if (newTeam.members.length === 0 || newTeam.members.every(member => member.name < hero.name)) {
            newTeam.members.push(hero)
            generateTeams(newTeam)
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
    // {
    //     title: 'Attack',
    //     dataIndex: 'atk',
    //     key: 'atk',
    // }, {
    //     title: 'HP',
    //     dataIndex: 'hp',
    //     key: 'hp',
    // }, {
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
