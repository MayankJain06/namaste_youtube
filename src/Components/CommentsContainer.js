import React from 'react'
import CommentsList from './CommentsList';

const CommentsData = [
    {
    name:"Mayank Jain",
    text: "This is Namaste React Course",
    replies: [
        {
            name:"Mayank Jain",
    text: "This is Namaste React Course",
    replies: [
        
            {
                name:"Mayank Jaini",
        text: "This is Namaste React Course",
        replies: [
            {
                
            }
        ]
            },
            {
                name:"Mayank Jain",
        text: "This is Namaste React Course",
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
    name:"Mayank Jain",
    text: "This is Namaste React Course",
    replies: [
        {
            name:"Mayank Jain",
    text: "This is Namaste React Course",
    replies: [
        {
            
        }
    ]
        }
    ]
},
{
    name:"Mayank Jain",
    text: "This is Namaste React Course",
    replies: [
        {
            name:"Mayank Jain",
    text: "This is Namaste React Course",
    replies: [
        {
            
        }
    ]
        }
    ]
},
{
    name:"Mayank Jain",
    text: "This is Namaste React Course"
},
{
    name:"Mayank Jain",
    text: "This is Namaste React Course"
},
{
    name:"Mayank Jain",
    text: "This is Namaste React Course"
},
{
    name:"Mayank Jain",
    text: "This is Namaste React Course"
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