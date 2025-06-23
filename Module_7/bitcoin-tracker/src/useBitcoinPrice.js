import { useReducer, useEffect } from "react";

const initialState = { price: null, loading: true, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { price: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { price: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    dispatch({ type: "FETCH_START" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
      {
        signal: controller.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.bitcoin[currency.toLowerCase()],
        });
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      });

    return () => controller.abort();
  }, [currency]);

  return state;
}
