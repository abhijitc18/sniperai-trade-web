import React, { useEffect, useRef } from "react";
import "../styles/TradingViewTicker.css";

const TradingViewTicker = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = ""; // clear previous script if reloaded

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
        { proName: "BITSTAMP:ETHUSD", title: "ETH/USD" },
        { proName: "INDEX:SPX", title: "S&P 500" },
        { proName: "INDEX:IUXX", title: "Nasdaq 100" },
      ],
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="trading-view-ticker">
      <div className="trading-view-ticker-container" ref={container}>
        <div className="trading-view-ticker-container__widget"></div>
      </div>
    </div>
  );
};

export default TradingViewTicker;
