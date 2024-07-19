// listCountries: lista de paisea a pintar
// node: Elemento HTML donde se va pintar la lista
// https://daniela03h.github.io/countries-explorer/

export function renderCountryCard(listCountries, node) {
  const $countries = listCountries
    .map(function (country) {
      return countryCardTemplate(country)
    })
    .join('\n')

  node.innerHTML = $countries
}

function countryCardTemplate(country) {
  return `
  <a href="${generateHref(country.name.common)}">
  <div class="card-country">
    <img src="${country.flags.png}" class="flag-image" />
    <div class="text-countries">
      <h4>${country.name.common}</h4>
      <div class="description-countries">
        <span><span>Population:</span> ${country.population}</span>
        <span><span>Region:</span> ${country.region}</span>
        <span><span>Capital:</span> ${country.capital?.join(', ')}</span>
      </div>
    </div>
  </div>
</a>
`
}

export function rederBordes(borders) {
  const cca3 = JSON.parse(localStorage.getItem('countriesByCca3'))
  return borders
    .map(
      border => `
    <a class="borders" href="${generateHref(cca3[border].name.common)}">
    ${cca3[border].name.common}
    </a>`
    )
    .join('\n')
}

function generateHref(countryName) {
  if (window.location.hostname.includes('github')) {
    return `/countries-explorer/country.html?countryName=${countryName.toLowerCase()}`
  }

  return `/country.html?countryName=${countryName.toLowerCase()}`
}
