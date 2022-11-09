import React from 'react';
import Card from '../components/Card';

const getComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
};

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Page = async () => {
  const comments: Comment[] = await getComments();

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {comments.map((comment) => (
          <Card key={comment.id} title={comment.email} content={comment.body} />
        ))}
      </div>
    </div>
  );
};

export default Page;
