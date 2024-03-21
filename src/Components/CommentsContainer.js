import React from 'react'
import CommentsList from './CommentsList';

const CommentsData = [
    {
    name:"Akshay Saini",
    text: "Lorem ipsum",
    replies: [
        {
            name:"Akshay Saini",
    text: "Lorem ipsum",
    replies: [
        
            {
                name:"Akshay Saini",
        text: "Lorem ipsum",
        replies: [
            {
                
            }
        ]
            },
            {
                name:"Akshay Saini",
        text: "Lorem ipsum",
        replies: [
            {
                
            }
        ]
            }
        
    ]
        }
    ]
},
{
    name:"Akshay Saini",
    text: "Lorem ipsum",
    replies: [
        {
            name:"Akshay Saini",
    text: "Lorem ipsum",
    replies: [
        {
            
        }
    ]
        }
    ]
},
{
    name:"Akshay Saini",
    text: "Lorem ipsum",
    replies: [
        {
            name:"Akshay Saini",
    text: "Lorem ipsum",
    replies: [
        {
            
        }
    ]
        }
    ]
},
{
    name:"Akshay Saini",
    text: "Lorem ipsum"
},
{
    name:"Akshay Saini",
    text: "Lorem ipsum"
},
{
    name:"Akshay Saini",
    text: "Lorem ipsum"
},
{
    name:"Akshay Saini",
    text: "Lorem ipsum"
},
];



const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={CommentsData}/>
        </div>
  )
}

export default CommentsContainer;