import React from 'react';
import Search from './Search';

function Home() {
    const searchText = "Cari Cantika";
    
    return (
        <div>
            <h1>Home</h1>
            <Search/>
        </div>
    );
}

export default Home;