   import { countries } from "assests\data\countries.js";
   
   const loadCountries=()=>{
      let options="";

      for(let country of countries){
         options+=`<option>${country.name}</option>`
         console.log(country)
      }
      document.querySelector("#ddlCountries").innerHTML=options;
   };
   loadCountries();