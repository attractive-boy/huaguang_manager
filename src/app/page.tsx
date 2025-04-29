'use client';

import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Button, Space, Table, Tag, Typography } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (_: any, { tags }: { tags: string[] }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === '重要') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined />}>编辑</Button>
          <Button type="text" danger icon={<DeleteOutlined />}>删除</Button>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '北京市朝阳区',
      tags: ['优秀', '管理员'],
    },
    {
      key: '2',
      name: '李四',
      age: 42,
      address: '上海市浦东新区',
      tags: ['重要'],
    },
    {
      key: '3',
      name: '王五',
      age: 32,
      address: '广州市天河区',
      tags: ['普通'],
    },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <PageContainer
      header={{
        title: '华光管理系统',
        subTitle: '基于Next.js和Ant Design Pro Components的管理系统',
      }}
    >
      <Card
        title={<Title level={4}>用户管理</Title>}
        extra={
          <Space>
            <Button type="primary" icon={<PlusOutlined />}>新增用户</Button>
            <Button onClick={handleRefresh}>刷新</Button>
          </Space>
        }
      >
        <Table 
          columns={columns} 
          dataSource={data} 
          loading={loading}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </PageContainer>
  );
}
