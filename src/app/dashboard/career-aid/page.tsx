'use client';

import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useState } from 'react';
import { get } from '../../../utils/request';

interface CareerAidItem {
  id: number;
  applicationNo: string;
  applicantName: string;
  phone: string;
  status: number;
  contactStatus: number;
  createTime: string;
}

const columns: ProColumns<CareerAidItem>[] = [
  {
    title: '申请编号',
    dataIndex: 'applicationNo',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '申请人',
    dataIndex: 'applicantName',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
  },
  {
    title: '申请状态',
    dataIndex: 'status',
    valueEnum: {
      0: { text: '待审核', status: 'Default' },
      1: { text: '已通过', status: 'Success' },
      2: { text: '已拒绝', status: 'Error' },
    },
  },
  {
    title: '联系状态',
    dataIndex: 'contactStatus',
    valueEnum: {
      0: { text: '未联系', status: 'Default' },
      1: { text: '已联系', status: 'Success' },
      2: { text: '联系失败', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (_, record) => [
      <Button key="view" type="link">
        查看
      </Button>,
      <Button key="edit" type="link">
        编辑
      </Button>,
      <Button key="delete" type="link" danger>
        删除
      </Button>,
    ],
  },
];

export default function CareerAidPage() {
  const [loading, setLoading] = useState(false);

  const fetchCareerAidList = async (params: {
    pageSize: number;
    current: number;
  }) => {
    setLoading(true);
    try {
      const response = await get<{
        code: number;
        message: string;
        data: CareerAidItem[];
        total: number;
      }>('/admin/career-help/list', {
        pageNum: params.current,
        pageSize: params.pageSize,
      });

      if (response.code === 0) {
        return {
          data: response.data,
          success: true,
          total: response.total || response.data.length,
        };
      } else {
        message.error(response.message || '获取数据失败');
        return {
          data: [],
          success: false,
          total: 0,
        };
      }
    } catch (error) {
      message.error('获取数据失败');
      return {
        data: [],
        success: false,
        total: 0,
      };
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <ProTable<CareerAidItem>
        columns={columns}
        request={fetchCareerAidList}
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
        loading={loading}
      />
    </PageContainer>
  );
}