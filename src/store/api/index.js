const local = window.location.hostname.indexOf("localhost") !== -1;

const host = local ? "http://localhost:3007/v2" : "https://api.vicin.co.uk/v2";

export const saveItinerary = payload => {
  fetch(`${host}/itineraries/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const loadItinerary = planId =>
  fetch(`${host}/itineraries/${planId}`, {
    method: "GET",
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    return undefined;
  });
