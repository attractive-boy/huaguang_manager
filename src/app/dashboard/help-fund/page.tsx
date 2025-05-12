'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useState } from 'react';

interface FundItem {
  id: number;
  name: string;
  amount: number;
  status: string;
  createTime: string;
  updateTime: string;
}

const columns: ProColumns<FundItem>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 48,
  },
  {
    title: '基金名称',
    dataIndex: 'name',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    valueType: 'money',
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueEnum: {
      active: { text: '正常', status: 'Success' },
      inactive: { text: '停用', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    valueType: 'dateTime',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (_, record) => [
      <Button key="edit" type="link">
        编辑
      </Button>,
      <Button key="delete" type="link" danger>
        删除
      </Button>,
    ],
  },
];

const mockData: FundItem[] = [
  {
    id: 1,
    name: '教育帮扶基金',
    amount: 100000,
    status: 'active',
    createTime: '2024-01-01 12:00:00',
    updateTime: '2024-01-01 12:00:00',
  },
  {
    id: 2,
    name: '医疗帮扶基金',
    amount: 200000,
    status: 'active',
    createTime: '2024-01-02 12:00:00',
    updateTime: '2024-01-02 12:00:00',
  },
];

export default function HelpFundPage() {
  const [dataSource, setDataSource] = useState<FundItem[]>(mockData);

  return (
    <PageContainer>
      <ProTable<FundItem>
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button key="button" type="primary">
            新建
          </Button>,
        ]}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
        headerTitle="帮扶基金管理"
      />
    </PageContainer>
  );
} 