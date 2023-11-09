//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value.toLowerCase()
  // const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  // const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)

        document.querySelector("#pokeName").innerText = data.name.toUpperCase()
        document.querySelector("#shinyTitle").innerText = `SHINY ${data.name.toUpperCase()}`

        pokeImg.push(data.sprites.front_shiny)
        pokeImg.push(data.sprites.front_default)


        document.querySelector('#pokeImg1shiny').src = pokeImg[0]
        document.querySelector('#pokeImg1').src = pokeImg[1]

        document.querySelectorAll(".container").forEach(element => {
          element.classList.remove("hidden")
        });

        document.querySelector("header").style.margin = "1% 0 0 35%"


        document.querySelectorAll(".stat").forEach(element => {
          element.remove()
        })


        document.querySelector("#type").innerText = "Type: " + data.types[0].type.name.toUpperCase()
        document.querySelector("#weight").innerText = "Weight: " + data.weight + "g"

        document.querySelector("#statList").innerText = "Base Stats"

        data.stats.forEach(element => {
          const p = document.createElement("p")
          p.className = "stat"
          p.innerText = element.stat.name.toUpperCase() + " : " + element.base_stat
          document.querySelector("#stats").appendChild(p)

        });
        // document.querySelector("#hp").innerText = data.stats[0].stat.name.toUpperCase() + " : " + data.stats[0].base_stat
        
        // fetch(url2)
        // .then(res => res.json()) // parse response as JSON
        // .then(data => {
        //   console.log(data)
        //   pokeStore.push(data.types[0].type.name)
        //   pokeImg.push(data.sprites.front_shiny)
        //   document.querySelector('#pokeImg1').src = pokeImg[0]
        //   document.querySelector('#pokeImg2').src = pokeImg[1]

          // if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
          //   document.querySelector('#pokeImg1').src = pokeImg[0]
          //   document.querySelector('#pokeImg2').src = pokeImg[1]
          //   document.querySelector('h2').innerText = " 2x > "
          // }
        // })
        // .catch(err => {
        //     console.log(`error ${err}`)
        // });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}