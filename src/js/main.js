const cep = document.querySelector('#cep')

const showData = (results)=>{
    for(const campo in results){
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value = results[campo]
        }
    }
}

cep.addEventListener("blur",(e)=>{
    let serch = cep.value.replace("-","")

    
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${serch}/json/`)
    .then((response) => {
        response.json()
    .then ( data => showData(data))
    })

    .catch(e => console.log("deu erro"))

    console.log(cep.value);
})