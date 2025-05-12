"use client"

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';
import { useRouter, usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={216}
        title="华光管理系统"
        bgLayoutImgList={[]}
        {...defaultProps}
        location={{
          pathname,
        }}
        breadcrumbRender={false}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              router.push(item.path || '/dashboard/career-aid');
            }}
          >
            {dom}
          </div>
        )}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '管理员',
          size: 'small',
        }}
        actionsRender={() => []}
      >
        <PageContainer>
          {children}
        </PageContainer>
      </ProLayout>
    </div>
  );
}