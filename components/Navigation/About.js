import React from 'react'
import '../../style/style.css'

const About=()=>{
    
    return(
        <div className='aboutUs_body'>
            <h1 className='aboutUs_header'>About Us</h1>
            <p className='aboutUs_description'>InspireHub is a dynamic and inclusive blog posting platform designed to be free for all users. It offers a creative space where individuals can share their thoughts, ideas, and stories with a vibrant community. At InspireHub, users can easily create and publish blog posts, engage with content from others, and make new friends who share similar interests. The platform fosters a welcoming environment, encouraging users to connect, collaborate, and inspire each other through the power of words.</p>
            <footer className='footer'>
                        <p>&copy; 2024 InspireHub. All rights reserved.</p>
                        <p>Follow us on:<br/>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </footer>
        </div>
    )
}
export default About;