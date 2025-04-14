import './Home.css';

function Home() {
  const features = [
    { title: "Responsive Design", description: "Fully responsive components that work on all devices" },
    { title: "Customizable", description: "Easy to customize with utility classes and variables" },
    { title: "Performance Optimized", description: "Lightweight and optimized for faster loading times" }
  ];
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to GUI Framework</h1>
        <p className="home-subtitle">The modern UI toolkit for building beautiful, responsive web applications</p>
      </header>

      <section className="section-features">
        <h2 className="title-mid">Why Choose Our Framework?</h2>
        <div className="features-map">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-about">
        <h2 className="title-lower">Built by Team Tech-Titans</h2>
        <p className="desc">
          Inspired by the best design systems like Bootstrap, but reimagined for modern web development.
          Our framework provides everything you need to create stunning user interfaces with minimal effort.</p>
      </section>
    </div>
  );
}

export default Home;