import React from 'react'

//importing Register box modules
import RegisterBox from './Contents/Background.js';
import NavigationBar from './Contents/Navbar.js';

export default function MainComponent() {

    return (
        <div className="root">
            <NavigationBar/>
            <RegisterBox/>
        </div>
    )
}
