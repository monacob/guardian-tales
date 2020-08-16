// @flow

import React from 'react';
import type {Skill, Resistance} from "../data/heroes.js";
import {Table} from 'antd';

import data from '../data/heroes.js'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    }, {
        title: 'Element',
        dataIndex: 'element',
        key: 'element',
    }, {
        title: 'Attack',
        dataIndex: 'atk',
        key: 'atk',
    }, {
        title: 'HP',
        dataIndex: 'hp',
        key: 'hp',
    }, {
        title: 'Defence',
        dataIndex: 'def',
        key: 'def',
    }, {
        title: 'Heal',
        dataIndex: 'heal',
        key: 'heal',
    }, {
        title: 'Damage Reduction',
        dataIndex: 'damageReduction',
        key: 'damageReduction',
    }, {
        title: 'Critical Hit Chance',
        dataIndex: 'criticalHitChance',
        key: 'criticalHitChance',
    }, {
        title: 'Resistance',
        dataIndex: 'resistance',
        key: 'resistance',
        render: (resistance: Array<Resistance>) => {
            return resistance.map(res => {
                return <div>{`${res.type}: ${res.value * 100}%`}</div>
            })
        }
    }, {
        title: 'Card Slot',
        dataIndex: 'cardSlot',
        key: 'cardSlot',
    }, {
        title: 'Skills',
        dataIndex: 'skills',
        key: 'skills',
        render: (skills: Array<Skill>) => {
            return skills.map(skill => {
                const target = skill.target === 'SELF' ? '' : `[${skill.target}]`
                return <div>{`${target}${skill.attribute}: ${skill.value * 100}%`}</div>
            })
        }
    },
];


function Heroes() {
    return <Table columns={columns} dataSource={data}/>
}

export default Heroes;
