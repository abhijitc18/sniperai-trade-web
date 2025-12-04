import React from "react";
import "../styles/Trader.css";
import TraderBannerImg from "../assets/trader-banner.png";
import FeedbackImg from "../assets/Testimonial_male.jpg";

const Trader = () => {
  const telegramLink = "https://t.me/Sniperaitrade";
  const siteUrl = "https://sniperai.trade";
  const pageUrl = `${siteUrl}/trader`;

  return (
    <>
      {/* SEO & Meta Tags - Keep as is */}
      <title>
        SniperAI Trading Signals • Daily Forex & Crypto Profits • Join Our
        Channel Now
      </title>
      <meta
        name="description"
        content="Get exclusive high-accuracy Forex & Crypto trading signals. Members are turning $300 into $1000+ weekly. Join our private Telegram channel now and start profiting today!"
      />
      <meta
        name="keywords"
        content="trading signals, forex signals, crypto trading, VIP channel, short-term investments, profit strategies"
      />
      {/* Open Graph (Facebook, WhatsApp, Telegram, etc.) */}
      <meta
        property="og:title"
        content="Turn $300 into $1000+ with Our VIP Trading Signals"
      />
      <meta
        property="og:description"
        content="Real members, real profits. Join thousands already making money daily with our Forex & Crypto signals."
      />
      <meta property="og:image" content={`${siteUrl}/trader-og.jpg`} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SniperAI" />

      {/* Canonical + Mobile + Robots */}
      <link rel="canonical" href={pageUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data (JSON-LD) for Better Google Understanding */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SniperAI Trading Signals Channel",
          description:
            "Exclusive Forex and Crypto trading signals for short-term investments and profits.",
          url: pageUrl,
          potentialAction: {
            "@type": "JoinAction",
            name: "Join Telegram Channel",
            url: telegramLink,
            target: {
              "@type": "EntryPoint",
              urlTemplate: telegramLink,
            },
          },
          publisher: {
            "@type": "Organization",
            name: "SniperAI",
            url: siteUrl,
          },
        })}
      </script>

      <div className="trader-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg">
            <img
              src={TraderBannerImg}
              alt="Trading Signals Hero"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <a
              href="https://sniperai.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-badge"
            >
              Visit SniperAI
            </a>
            <h1 className="hero-title">
              Transform the way you
              <br />
              <span className="hero-highlight">invest your money!</span>
            </h1>
            <p className="hero-desc">
              Make short-term investments in foreign exchange and
              cryptocurrencies across global markets with data-driven entries,
              tight risk control, and clear signal execution.
            </p>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
            >
              Join VIP Channel Now
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.5 19l7-7-7-7v14z" />
              </svg>
            </a>

            {/* About SniperAI – text only, uses existing layout */}
            <div className="hero-about-sniperai">
              <h2>Why SniperAI?</h2>
              <p>
                SniperAI combines smart automation with human market expertise
                to deliver clean, easy‑to‑follow trading signals for Forex and
                Crypto. Every setup is filtered through strict risk rules,
                real-time momentum analysis, and clear take‑profit/stop‑loss
                levels—so you always know exactly what to do.
              </p>
              <p>
                Whether you are just getting started or already an active
                trader, our goal is simple: help you trade with confidence,
                reduce emotional mistakes, and grow your account step by step
                with a transparent and disciplined approach.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Real Results from Real Traders</h2>
              <div className="section-subtitle">
                Traders from different backgrounds using the same clear signals
                to build consistent weekly profits.
              </div>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={FeedbackImg} alt="Trader success story" />
                </div>
                <div className="testimonial-meta">
                  <span className="profit-badge">+233%</span>
                </div>
                <div className="testimonial-content">
                  <p>
                    "I started with $300 and now I&apos;m already above $1000.
                    The signals are clear, and risk is always under control."
                  </p>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={FeedbackImg} alt="Trader success story" />
                </div>
                <div className="testimonial-meta">
                  <span className="profit-badge">+$500</span>
                </div>
                <div className="testimonial-content">
                  <p>
                    "Amazing signals, my friend. I made $500 in one session.
                    Entries are accurate and easy to follow."
                  </p>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={FeedbackImg} alt="Trader success story" />
                </div>
                <div className="testimonial-meta">
                  <span className="profit-badge">+300%</span>
                </div>
                <div className="testimonial-content">
                  <p>
                    "Deposited $500 five days ago and today I already have
                    $2000. Great risk management and powerful signals."
                  </p>
                </div>
              </div>
            </div>
            <div className="section-cta">
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Start Your Trading Journey
              </a>
            </div>
          </div>
        </section>

        {/* Footer text replaced as requested */}
        <footer className="disclaimer-section">
          <div className="container">
            <span className="disclaimer-text">
              Disclaimer: This content is for educational purposes only and does
              not constitute financial advice. Trading involves risk. Please do
              your own research before making investment decisions.
            </span>
            <p>
              © 2025&nbsp;
              <strong>SniperAI</strong>&nbsp;- All Rights Reserved | Join our
              Telegram community and start winning today! 🚀
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Trader;
