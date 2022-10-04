import React from 'react';
import './App.css';


function App() {
    console.log("App rendering")
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ0BxAfV74NsYKTtj__zk4fpE0zcIXQ0rXRR-UoZsYWSLf-Pc5_eth1Bl0agDrvPuXRU&usqp=CAU"
                    alt=""/>
            </header>
            <nav className='nav'>
                {/*<div><a>Profile</a></div>*/}
                {/*<div><a>Message</a></div>*/}
                {/*<div><a>News</a></div>*/}
                {/*<div><a>Music</a></div>*/}
                {/*<div><a>Settings</a></div>*/}
            </nav>
            <div className='content'>
                <div></div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
                <div> ava + discription
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBA9-3gshYFwDoSerwZ-DTl5mUA0qIbP8sL9afe26eHLocJjKYcNI7-mmwnhuQ6hE-TGE&usqp=CAU"
                        alt=""/>
                </div>
                <div> My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}


export default App;
