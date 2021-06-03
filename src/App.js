import React from 'react';
import TopNavigation from "./components/TopNavigation/TopNavigation";
import PageTop from "./components/PageTop/PageTop";


function App() {
    return (
        <div>
            <TopNavigation/>
            <PageTop pagetitle="My Project"/>
        </div>
    );
}

export default App;