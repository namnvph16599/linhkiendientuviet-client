'use client';
import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
type Props = {};

const Home = () => {
  return <div>client
    <Link href="/product">
      <Button type="primary" loading>
        {' '}
            product
      </Button>
    </Link>
  </div>;
};

export default Home;
