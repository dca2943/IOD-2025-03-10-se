async function createAccount() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  if (!username || !password) return alert("Enter details.");

  alert(
    (
      await fetch("http://localhost:3000/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
    ).json().message
  );
}

async function getItinerary() {
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const travelers = document.getElementById("travelers").value;
  if (!destination || !date || !travelers) return alert("Fill all fields.");

  alert(
    (
      await fetch("http://localhost:3000/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, date, travelers }),
      })
    ).json().message
  );
}

//Frontend (script.js)
