export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <a
          className="hero-back-link"
          href="https://www.alberta.ca/affordable-housing-and-rent-assistance"
        >
          <span aria-hidden="true">←</span>
          <span>Affordable housing and rent assistance</span>
        </a>

        <div className="hero-divider" />

        <h1 className="hero-heading">Get help with housing</h1>

        <p className="hero-description">
          Find potential affordable housing options that may suit your situation
        </p>

        <button className="translation-trigger" type="button">
          <span className="translation-icon" aria-hidden="true">
            文A
          </span>

          <span>Translation services</span>

          <span className="translation-chevron" aria-hidden="true">
            ⌄
          </span>
        </button>
      </div>
    </section>
  );
}
