// ACTORES PRINCIPALES  OBRAS Y PINTORES
{
    class Obra {

        constructor(imgUrl, titulo, pintor) {
            this.imgUrl = imgUrl;
            this.titulo = titulo;
            this.pintor = pintor;
            this.html;
        }
    }


    class Pintor {

        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }

    var pintor1 = new Pintor('Joan', 'Dupont');

    var obra1 = new Obra('https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80', 'Mañana placida', pintor1);
    var obra2 = new Obra('https://media.istockphoto.com/photos/fairy-winter-landscape-picture-id1299765486?b=1&k=20&m=1299765486&s=170667a&w=0&h=Uyvpy3znLAdjUaELLP1cBspFnjH60KsPnYAdOR5Croo=', 'Navidad tranquila', pintor1);

    var obrasContainer = document.getElementById('obrasContainer');

    var obras = [obra1, obra2];
    obras.forEach(obra => {
        obra.html = `
    <div class="card w-25 m-4">
        <img src="${obra.imgUrl}" class="card-img-top" alt="img-not-found">
        <div class="card-body">
            <h5 class="card-title">${obra.titulo}</h5>
            <p class="card-text">Cuadro de ${obra.pintor.nombre} ${obra.pintor.apellido} </p>
        </div>
    </div>   
    `;

        obrasContainer.innerHTML += obra.html;
    });
}

// BUSCADOR
{
    var buscador = document.getElementsByName('buscador')[0];
    buscador.addEventListener('input', buscar);

    function buscar() {

        obrasContainer.innerHTML = '';
        let tituloBuscado = buscador.value.toLowerCase();

        obras.forEach(
            obra => {

                let tituloObra = obra.titulo.toLowerCase();

                if (tituloObra.includes(tituloBuscado)) {

                    obrasContainer.innerHTML += obra.html;
                }
            }
        )


    }
}