import React from 'react'
import classes from './Footer.module.css';

const Footer = () => {
    return ( 
       
            <footer>
                 <div className={['container'.classes.container].join('')}>
                    <div class="container react" id="footer">
                        <div>
                            Copyright &copy;2020.
                        </div>
                        <div class="textRight">
                            Built with <span class="red">&hearts;</span> by
                            <a
                            href="https://reactjs.org/docs/create-a-new-react-app.html"
                            target="_blank"
                            >Create React App</a
                            >
                        </div>
                    </div>
                </div>
            </footer>
        
     );
}
 
export default Footer;
