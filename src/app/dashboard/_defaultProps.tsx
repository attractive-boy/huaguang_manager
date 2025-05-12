import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
  } from '@ant-design/icons';
  
  export default {
    route: {
      path: '/',
      routes: [
        {
          path: '/dashboard/career-aid',
          name: '就业援助',
          icon: <CrownFilled />,
          component: './dashboard/career-aid',
        },
        {
          path: '/dashboard/help-fund',
          name: '帮扶资金',
          icon: <TabletFilled />,
          component: './dashboard/help-fund',
        }
      ],
    },
    location: {
      pathname: '/',
    },
    appList: [],
  };