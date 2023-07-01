import React from 'react';


// FUNCTIONAL COMPONENTS
// function Header(){
//     let menu=['Home','Aboutus','ContactUs']
//     return(
//         <><header1>
//             <ul>
//                 <li>Printed Directly By Entering name</li>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>About</li>
//             </ul>
//         </header1><header>
//                 <ul>
//                     <li>Printed Using Array of elements</li>
//                     <li>{menu[0]}</li>
//                     <li>{menu[1]}</li>
//                     <li>{menu[2]}</li>
//                 </ul>
//             </header></>
//     )
// }

// CLASS COMPONENTS
class Menu extends React.Component{
    render(){
        return(
        <header>
            <ul>
                <li>Printed Via Class Component</li>
                <li>Home</li>
                <li>About</li>
                <li>About</li>
            </ul>
        </header>
        )
    }
}

// export default Header;
export default Menu;