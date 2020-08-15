// @flow

import React from 'react';

import {Table} from 'antd';

const data = require('../data/heroes.json');
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Element',
        dataIndex: 'element',
        key: 'element',
    }
];


function Heroes() {
    return <Table columns={columns} dataSource={data}/>
}

export default Heroes;
