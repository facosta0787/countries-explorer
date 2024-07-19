import('./toggle-dark-mode.js')
import {renderCountryCard} from "./render-funtions.js"
import {fetchCountries} from "./api.js"


const $countriesList = document.querySelector(".countries-list");
const $searchInput = document.querySelector(".search");
const $selectRegions = document.querySelector(".select-regions");

let countries = [];

$searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const query = $searchInput.value.trim().toLowerCase();
    const regionValue = $selectRegions.value.toLowerCase();
    const filteredCountries = countries.filter(function (country) {
      return (
        country.name.common.toLowerCase().includes(query) &&
        country.region.toLowerCase().includes(regionValue)
      );
    });
    renderCountryCard(filteredCountries, $countriesList);
  }
});

$selectRegions.addEventListener("change", function () {
  const query = $selectRegions.value;
  const searchValue = $searchInput.value.trim().toLowerCase();
  const filteredCountries = countries.filter(function (country) {
    return (
      country.region.toLowerCase().includes(query.toLowerCase()) &&
      country.name.common.toLowerCase().includes(searchValue)
    );
  });
  renderCountryCard(filteredCountries, $countriesList);
});

async function main() {

  countries = JSON.parse(localStorage.getItem('countries')) || []

  if(countries.length === 0){
    countries = await fetchCountries()
    const countriesByCca3 = countries.reduce((accum, country) => {
      return {
        ...accum,
        [country.cca3]: country
      }
    }, {})
    localStorage.setItem('countriesByCca3', JSON.stringify(countriesByCca3))
    localStorage.setItem('countries', JSON.stringify(countries))
  }
  renderCountryCard(countries, $countriesList);
}

main();



