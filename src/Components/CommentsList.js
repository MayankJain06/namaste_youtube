import React from 'react'
import Comments from './Comments'

const CommentsList = ({comments}) => {
    // Dont use indexes as Keys
  return  comments.map((comment,index) => (
    <div>
    <Comments key={index} data={comment} />
    <div className="pl-5 ml-8 border border-l-black">
    <Comments key={index} data={comment} />
    <Comments key={index} data={comment} />
    <Comments key={index} data={comment} />
    {/* <CommentsList comments={comment.replies}/> */}
    </div>
    </div>
  ));
};

export default CommentsList;