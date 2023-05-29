import dynamic from 'next/dynamic';
// list antd config
export const Button = dynamic(() => import('antd/lib/button'));