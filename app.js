const getFlags = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then((res) => {
            console.log(res);
            if (!res.ok) {
                hata(`something went wrong ${res.status}`);

                throw new Error("something went wrong ");
            }
            return res.json();
        })
        .then((data) => {

            randerCountries(data);
        })

        .catch((err) => console.log(err));
};




const hata = () => {
    const err = document.querySelector(".users");
    err.innerHTML += ` <h2> Countries can not fetched </h2> `;
}

const randerCountries = (data) => {
    console.log(data)
    const veri = document.querySelector(".users");
    const {
        capital,
        languages,
        region,
        flags: {
            svg
        },
        name: {
            common
        }
    } = data[0];
    veri.innerHTML += `<div class="card">
  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <h5 class="card-title"><i class="fa-solid fa-earth-americas"></i>${region}</h5>
    <h5 class="card-title"><i class="fa-solid fa-language"></i>${Object.values(
      languages
    )}</h5>
    <h5 class="card-title"><i class="fa-sharp fa-solid fa-landmark-flag"></i>${capital}</h5>
  </div>
</div>`;


}



getFlags("turkey");



// **************

// const fetchCountryByName = (name)=>{    
//     const url =`https://restcountries.com/v3.1/name/${name}`;  
//       fetch(url).then((res) =>{       
//          if(!res.ok){          
//               renderError(`Someting went wrong ${res.status}`);   
//                        throw new Error();    
//                         }      
//                           return res.json() 
//                            })  
//                              .then((data)=> {  
//                                   renderCountries(data)  
//                                   }) 
//                                    .catch((err) =>console.log(err));};

// const renderError =()=>{  
//       const countryDiv = document.querySelector(".countries"); 
//          countryDiv.innerHTML += ` <h2> Countries can not fetched </h2> `  
//           } 
//           const renderCountries = (data)=>{ 
//                console.log(data) 
//                   const countryDiv = document.querySelector(".countries"); 
//                      const {capital, currencies,flags:{svg},languages, name:{common}, region} =data[0]   
//                       countryDiv.innerHTML += `<div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">    <img src="${svg}" class="card-img-top" alt="...">    <div class="card-body">      <h5 class="card-title">${common}</h5>      <p class="card-text">${region}</p>    </div>    <ul class="list-group list-group-flush">      <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${capital}</li>      <li class="list-group-item"><i class="fa-solid fa-comments"></i> ${Object.values(languages)}</li>      <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(currencies).map((item)=>Object.values(item) + " ")}</li>    </ul>  </div>  `
// };
// fetchCountryByName("suisse");
// fetchCountryByName("usa");
// fetchCountryByName("germany");
// fetchCountryByName("Western Sahara");

























