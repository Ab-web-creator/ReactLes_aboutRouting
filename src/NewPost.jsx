import React, { useState } from 'react';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [auteur, setAuteur] = useState('');
    const [message, setMessage] = useState('');
    const maxLength = 2000; // Set your desired maximum message length

    const handleTextareaChange = (e) => {
        const inputMessage = e.target.value;

        // Check if the input message is within the maximum length
        if (inputMessage.length <= maxLength) {
            setMessage(inputMessage);
        }
    };

    const canSubmit = message.length >= 300; // Require a minimum of 300 characters in the message

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        if (canSubmit) {
            const created = new Date().toISOString(); // ISO-timestamp of the moment the user pressed the button
            const wordCount = message.split(/\s+/).length; // Count words
            const readTime = Math.ceil(wordCount / 100 * 0.3); // Calculate readTime in minutes and round up

            // Log the collected data to the console
            console.log({
                title: title,
                subtitle: subTitle,
                content: message,
                author: auteur,
                created: created,
                readTime: readTime,
                comments: 0,
                shares: 0,
            });
        } else {
            // Show a warning if the message has less than 300 characters
            alert("Cannot submit because the content has less than 300 characters.");
        }
    };

    return (
        <>
            <p className={'new-posts'}>New Posts</p>
            <div className="spacer40px"></div>
            <form onSubmit={handleSubmit}>
                <div className={'input-fields'}>
                    <label>Enter the title</label>
                    <input name='title' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="spacer40px"></div>
                <div className={'input-fields'}>
                    <label>Enter the sub-title</label>
                    <input name='subTitle' placeholder='sub-title' value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                </div>
                <div className="spacer40px"></div>
                <div className={'input-fields'}>
                    <label>Auteur</label>
                    <input name='auteur' placeholder='who is the author' value={auteur} onChange={(e) => setAuteur(e.target.value)} />
                </div>
                <div className="spacer40px"></div>
                <div className={'input-fields'}>
                    <label>Enter the content</label>
                    <textarea
                        name='content'
                        rows='5'
                        value={message}
                        onChange={handleTextareaChange}
                        placeholder='content'
                    />
                </div>
                <div className="spacer40px"></div>
                <button type="submit" disabled={!canSubmit}>Submit</button>
            </form>
            <p>Character Count: {message.length}/{maxLength}</p>
        </>
    );
};

export default NewPost;
