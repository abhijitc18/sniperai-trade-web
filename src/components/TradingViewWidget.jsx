import React, { useEffect, useRef } from "react";
import "../styles/TradingViewWidget.css";

const TradingViewWidget = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Clean old content
    container.current.innerHTML = "";

    // Create a new script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;

    // You can customize the widget settings here
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "500",
      currencies: [
        "EUR",
        "USD",
        "AUD",
        "GBP",
        "NZD",
        "CAD",
        "CHF",
        "JPY",
        "CNY",
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    });

    try {
      container.current.appendChild(script);
    } catch (err) {
      console.error("TradingView script load error:", err);
    }
  }, []);

  return (
    <section className="tradingview-widget-container">
      <div className="container">
        <div className="section-title">
          <h2 className="forex-widget-title">
            Forex Trading
            <span className="angled-underline">
              <span className="skew-bar"></span>
              <span className="circle-dot"></span>
            </span>
          </h2>
          <h3>Overview rates</h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div ref={container}>
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewWidget;
