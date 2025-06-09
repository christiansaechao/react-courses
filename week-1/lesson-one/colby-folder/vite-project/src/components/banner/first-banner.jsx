import "./banner.css";

function Banner() {
    return (
        <div>
            <div class="container">
                <img src="https://logo.com/image-cdn/images/kts928pd/production/a957c7eea4f98434a05252f7c964e192d3cd93be-620x385.png?w=1920&q=72&fm=webp"
                alt = "apple logo"
                class="image-container"/>
                <h1 className="event">WWDC25</h1>
                <p className="text-content">Watch tomorrow at 10 a.m. PT.</p>
                <button href="/apple-events/" class="learnButton">Learn More</button>
            </div>
        </div>
    )
}

export default Banner;