// SERVICIOS DE FIREBASE
{
    // Initialize Cloud Firestore, Storage, Authentication through Firebase
    firebase.initializeApp({
        apiKey: 'AIzaSyBTbpc9ZvsNceq8Z1wmwWXjOdrbQHU46kY',
        authDomain: 'gallery-joan-dupont.firebaseapp.com',
        projectId: 'gallery-joan-dupont',
        storageBucket: "gallery-joan-dupont.appspot.com"
    });

    var db = firebase.firestore();
    var collectionObras = db.collection('obras');
    var storageRef = firebase.storage().ref();
}

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
            this.nombreCompleto = this.nombre + ' ' + this.apellido;
        }

        pintar(titulo, file) {

            let extension = file.name.substring(file.name.search(/\./));
            let obraRef = storageRef.child(`${titulo}${extension}`);

            let thisPintor = this;
            obraRef.put(file)
                .then(function(snapshot) {

                    // Obtener url de imagen recien subida
                    let uploadedImgUrl;
                    obraRef.getDownloadURL().then(function(url) {
                        uploadedImgUrl = url;
                    });

                    let obraCreada = {
                        imgUrl: uploadedImgUrl,
                        titulo: titulo,
                        pintor: thisPintor.nombreCompleto
                    }

                    // Agregar documento a la collección
                    collectionObras.doc(titulo).set(obraCreada)
                        .then(function() {
                            location.reload();
                        })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                });
        }

        mostrarObras() {


        }
    }

    var pintor1 = new Pintor('Joan', 'Dupont');

    var obrasContainer = document.getElementById('obrasContainer');
    pintor1.mostrarObras();



    var obra1 = new Obra('https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80', 'Mañana placida', pintor1);
    var obra2 = new Obra('https://media.istockphoto.com/photos/fairy-winter-landscape-picture-id1299765486?b=1&k=20&m=1299765486&s=170667a&w=0&h=Uyvpy3znLAdjUaELLP1cBspFnjH60KsPnYAdOR5Croo=', 'Navidad tranquila', pintor1);



    var obras = [obra1, obra2];
    obras.forEach(obra => {
        obra.html = `
            <div class="card w-25 m-4">
                <img src="${obra.imgUrl}" class="card-img-top" alt="img-not-found">
                <div class="card-body">
                    <h5 class="card-title">${obra.titulo}</h5>
                    <p class="card-text">Cuadro de ${obra.pintor.nombre} ${obra.pintor.apellido} </p>
                </div>
            </div> `;

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

// FUNCIONALIDAD SUBIR OBRA
{
    var form = document.getElementById('formularioSubida');
    var fileInput = document.getElementById('obraNueva');
    var titulo = document.getElementById('tituloObra');

    form.addEventListener('submit', subirObra);

    function subirObra(event) {
        event.preventDefault();
        let file = fileInput.files[0];

        pintor1.pintar(titulo.value, file);
    }
}

// FUNCIONALIDAD LOGIN
{

    var formLogin = document.getElementById('formLogin');
    var user = document.getElementById('user');
    var password = document.getElementById('password');

    formLogin.addEventListener('submit', iniciarSesion);


    function iniciarSesion(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(user.value, password.value)
            .then((userCredential) => {
                // Signed in
                location.reload();
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode + ' : ' + errorMessage);
            });
    }

    // Mostrar boton / formulario correspondiente
    var loginButton = document.getElementsByName('loginButton')[0];
    var exitButton = document.getElementsByName('exitButton')[0];
    var uploadButton = document.getElementsByName('uploadButton')[0];

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            loginButton.style.display = 'none';
            exitButton.style.display = 'block';

            let targetModal = uploadButton.attributes.getNamedItem('data-bs-target');
            targetModal.value = '#modalSubida';
        } else {
            // User is signed out
            loginButton.style.display = 'block';
            exitButton.style.display = 'none';

            let targetModal = uploadButton.attributes.getNamedItem('data-bs-target');
            targetModal.value = '#modalLogin';
        }
    });

    // Funcionalidad de logout

    exitButton.addEventListener('click', cerrarSesion);

    function cerrarSesion() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
        }).catch((error) => {
            // An error happened.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode + ' : ' + errorMessage);
        });
    }

}