import React from "react";
import { format, parseISO } from 'date-fns'

const BlogPost = ({ blogs, title }) => {

    return (

        <>
            <h2 className='big-title'>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h3 className='red'>{blog.title} </h3>
                    <h5 className='blue'>{blog.subtitle} </h5>
                    <p> <em> Geschreven door {blog.author} op
                    <span> {format(parseISO(blog.created), 'dd MMMM yyyy')} </span> </em>
                    </p>
                    <p> {blog.content} </p>
                    <div className="spacer40px"></div>
                    <h5 className='social-media'> {blog.comments} reacties - <span> {blog.shares} keer gedeeld</span> </h5>

                </div>
            ))}
        </>
    );
};

export default BlogPost;
