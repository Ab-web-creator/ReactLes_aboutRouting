import React, { useState, useEffect } from 'react';
import BlogPost from "./BlogPost.jsx";



function Overview() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
            })
    }, [])


    return (
        <div>
            {blogs && <BlogPost blogs={blogs} title={'All blogs!'} handleDelete={handleDelete} />
            }

        </div>
    )
}

export default Overview;
