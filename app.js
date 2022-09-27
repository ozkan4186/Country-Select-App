const select = document.getElementById("select")


const fetchCountryByAllName = async () => {
  const url = "https://restcountries.com/v3.1/all";

     try {
      const res= await fetch(url)
      if(!res.ok){
        hata()
        throw new Error("ikaz")

      }
      const data=  await res.json()
      renderNames(data)

      
    } catch (error) {
      console.log(error);
    }
};

const renderNames = (data) => {
let names = data.map((data) => data.name.common).sort();
  names.forEach((item) => {

    select.innerHTML += `
    <option value="${item}">${item}</option>
    `;

  })

}

select.addEventListener("change", (e) => {
  fetchCountryByName(e.target.value)
})



const fetchCountryByName = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  try {
    const res= await fetch(url)
    if(!res.ok){
      hata()
      throw new Error("ikaz")

    }
    const data= await res.json()
    renderCountries(data)

  } catch (error) {
    console.log(error);
    
  }





};

const hata= (e) =>{
  document.querySelector(".users").innerHTML = `
  ${e} düzgün şehir seçiniz
  `

}

const renderCountries = (data) => {

  const {capital,currencies,flags: {svg},languages,name: {common},region,maps: {googleMaps}} = data[0];


document.querySelector(".users").innerHTML = `
    <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
      <img src="${svg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${common}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="fas fa-lg fa-landmark"></i> ${capital}
        </li>
        <li class="list-group-item">
          <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
        </li>
        <li class="list-group-item">
          <i class="fas fa-lg fa-money-bill-wave"></i>
          ${Object.values(currencies).map((item) => Object.values(item) + " ")}
       </li>
      </ul>
 <div class="card-body text-center">
        <a href="${googleMaps}" target="_blank" class="card-link btn btn-secondary">Google Maps</a>
        
      </div>
    </div>
  `;
};





fetchCountryByName("turkey");
fetchCountryByAllName()
