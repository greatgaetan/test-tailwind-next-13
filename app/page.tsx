import Image from 'next/image';
import React from 'react';
import Card from '../components/Card';
import Dashboard from '../public/images/dashboard.jpg';
import Keypoint from '../public/images/keypoint-1.jpg';
import Security from '../public/images/security.jpg';

export const Page = () => {
  const cards = [
    <Card
      key={1}
      title="Dépense annuelle à date"
      content={<h2>1 057 160 €</h2>}
    />,
    <Card
      key={2}
      title="Dépense annuelle à date"
      content={
        <div className="relative max-w-[200px]">
          <Image src={Security} alt="security" layout={'responsive'} />
        </div>
      }
    />,
    <Card
      key={3}
      title="Dépense annuelle à date"
      content={<h2>1 057 160 €</h2>}
    />,
    <Card
      key={4}
      title="Dépense annuelle à date"
      content={<h2>1 057 160 €</h2>}
    />,
    <Card
      key={5}
      title="Dépense annuelle à date"
      content={
        <div className="relative max-w-[200px]">
          <Image src={Dashboard} alt="dashboard" layout={'responsive'} />
        </div>
      }
    />,
    <Card
      key={6}
      title="Dépense annuelle à date"
      content={<h2>1 057 160 €</h2>}
    />,
    <Card
      key={7}
      title="Dépense annuelle à date"
      content={<h2>1 057 160 €</h2>}
    />,
    <Card
      key={8}
      title="Dépense annuelle à date"
      content={
        <div className="relative max-w-[200px]">
          <Image src={Keypoint} alt="keypoint" layout={'responsive'} />
        </div>
      }
    />,
  ];
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
    </div>
  );
};

export default Page;
