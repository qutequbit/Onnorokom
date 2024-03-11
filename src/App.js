import React from "react"
import ReactDOM from "react-dom"

//import Header from "./components/Header"

const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
                <div class="nav-lists">
                    <div class="options">Signup</div>
                    <div class="options">About</div>
                    <div class="options">Products</div>
                    <div class="options">Pricing</div>
                    <div class="options">Support</div>
                </div>
            </div>
        </div>
    )

}

const SearchBox = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src="https://i.pinimg.com/564x/9e/2b/31/9e2b31c6f2151ccd3ee6701583f727b3.jpg"></img>
            </div>
            <div className="searchBox">

                <div className="main-title">
                    <div><h3>Discover The Richness Of The Districts : </h3></div>
                    <div><h4>Shop Local, Support Communities</h4></div>
                </div>

                <div className="box">
                    <input type="text"></input>
                </div>
            </div>
        </div>

    )
}
// District-Categories
// Art-Categories
// Shop-Categories

const Slides = () => {
    return (
        <div className="slide-container">
            <h1>#District-Wise / Categories :</h1>
            <div className="slider">
                <div className="prev">
                    <button>prev</button>
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1591732410085-cb584dde098b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div className="details">
                        <h3>Darjeeling Tea</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/1e/a7/5a/1ea75ad9d156208d8ea23ab20dd0e7ac.jpg" />
                    <div className="details">
                        <h3>Baluchari Saree</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/5c/87/ea/5c87ea816020d00303d3034506b98910.jpg" />
                    <div className="details">
                        <h3>Chhau Mask</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/ef/19/33/ef19330206803ba4706e07c136746fbc.jpg" />
                    <div className="details">
                        <h3>Shantiniketan Leather</h3>
                    </div>
                </div>
                <div className="prev">
                    <button>next</button>
                </div>
            </div>
        </div>
    )
}

const Display = () => {
    return (
        <div className="display">
            <h1>Trending</h1>
            <h1>Featured</h1>
        </div>
    )
}

const ArtCategory = () => {
    return (
        <div className="slide-container">
            <h1>#PRODUCTS :</h1>
            <div className="slider">
                <div className="prev">
                    <button>prev</button>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/16/24/3d/16243d20e182300faec08c1109a67af6.jpg" />
                    <div className="details">
                        <h3>Terracotta</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/29/22/8f/29228f58b7352b4507dd5ca63e550fe3.jpg" />
                    <div className="details">
                        <h3>Brass Metal Plate</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/5c/87/ea/5c87ea816020d00303d3034506b98910.jpg" />
                    <div className="details">
                        <h3>Chhau Mask</h3>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://i.pinimg.com/564x/ef/19/33/ef19330206803ba4706e07c136746fbc.jpg" />
                    <div className="details">
                        <h3>Shantiniketan Leather</h3>
                    </div>
                </div>
                <div className="prev">
                    <button>next</button>
                </div>
            </div>
        </div>
    )
}

const Cards = () => {
    return (
        <div className="cards">
            <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/1029/1029234.png" />
                <p>find something you love</p>
            </div>
            <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/5619/5619397.png" />
                <p>meet talented artisans</p>
            </div>
            <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/10936/10936355.png" />
                <p>buy and sell with confidence</p>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="mainbody">
            <SearchBox />
            <Slides />
            <ArtCategory />
            <Cards />
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>

    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
