import React, { FC, ReactNode } from 'react';

interface CardProps {
  title: string;
  content: ReactNode;
}
export const Card: FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col bg-white w-fit p-4 border-2 border-solid border-[#DBDBDB] rounded-lg min-h-[230px]">
      <div className="text-base lg:text-lg xl:text-xl">{props.title}</div>
      <div className=" my-auto text-2xl lg:text-4xl xl:text-6xl">
        {props.content}
      </div>
    </div>
  );
};

export default Card;
