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
      {/* <meta property="og:image" content={`${siteUrl}/trader-og.jpg`} /> */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SniperAI" />

      {/* Canonical + Mobile + Robots */}
      <link rel="canonical" href={pageUrl} />

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
              Trade Smarter.
              <br />
              <span className="hero-highlight">Grow Your Money Faster.</span>
            </h1>
            <p className="hero-desc">
              Access high-probability forex and crypto opportunities with
              precise entries, controlled risk, and transparent signal execution
              designed for consistent results.
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
            <div className="testm-header">
              <h2 className="testm-title">Success Stories from Our Traders</h2>
              <div className="testm-subtitle">
                Real traders leveraging structured signals and precise risk
                control to generate steady profits.
              </div>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={FeedbackImg} alt="Trader success story" />
                </div>
                <div className="testimonial-meta">
                  <span className="profit-badge">+187%</span>
                </div>
                <div className="testimonial-content">
                  <p>
                    "Started with a small $400 test account and ended the week
                    at $1,150 a clean 187% gain. The signal structure is
                    systematic, risk-focused, and extremely easy to execute."
                  </p>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={FeedbackImg} alt="Trader success story" />
                </div>
                <div className="testimonial-meta">
                  <span className="profit-badge">+92%</span>
                </div>
                <div className="testimonial-content">
                  <p>
                    "Put $600 into a new setup and closed the week at $1,150 a
                    sharp 92% return. Entries are precise, updates are timely,
                    and execution stays completely stress-free."
                  </p>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={FeedbackImg} alt="Trader success story" />
                </div>
                <div className="testimonial-meta">
                  <span className="profit-badge">+$430</span>
                </div>
                <div className="testimonial-content">
                  <p>
                    "Made a clean $430 in a single session using the intraday
                    signals. Clear confirmations, tight stops, and fast momentum
                    breakouts made the trade flow smoothly."
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
