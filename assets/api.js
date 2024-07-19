const apiUrl = "https://restcountries.com/v3.1";

export async function fetchCountries() {
  const response = await fetch(`${apiUrl}/all`);
  const body = await response.json();
  return body;
}

export async function fetchCountry(Name) {
  const url = `${apiUrl}/name/${Name}`;
  const response = await fetch(url);
  const body = await response.json();
  return body[0];
}
