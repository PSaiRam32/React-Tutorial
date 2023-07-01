import React from 'react';
// import  {Header} from './export&import';
import { Header } from './JX Attributes';
//USING JSX:
// let menu=(<ul>
//   <li>Home</li>
//   <li>About</li>
// </ul>)

// const res=ReactDOM.createRoot(document.getElementById('root'));
// res.render(menu);

// export default App;

function app(){
    
    return(
         <><Header /><header>
            <ul>
                <li>Mentioned in APP.JS FILE </li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header></>
    )
}

export default app;