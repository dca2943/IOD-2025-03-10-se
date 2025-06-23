import { useState } from "react";
import { useBitcoinPrice } from "./useBitcoinPrice";
import { useMood } from "./MoodContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);
  const { emoji } = useMood();

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate {emoji}</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <p>
          1 BTC = {price} {currency}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
