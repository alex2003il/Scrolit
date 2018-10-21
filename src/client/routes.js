import React from 'react';
import {
    Home,
    Contact,
    UserPage
  } from './components';

const routes = [
    {
        path: '/',
        exact: true,
        main: props =><Home {...props}/>,
        // add label to render menu nav links
    },
    {
        path: '/contact',
        exact: true,
        main: props=><Contact {...props}/>,
        label: 'Contact Us',
    },
	{
        path: '/:userName',
        exact: true,
        main: props=><UserPage {...props}/>,
    },
    {
        path: '',
        exact: false,
        main: props=><Home {...props}/>
    }
];
export default routes;