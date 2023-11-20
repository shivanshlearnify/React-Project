import "./Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/Images/amazon.png" alt="amazon" />
            <img src="/Images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
  );
}
