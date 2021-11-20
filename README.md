# <p align="center"> - Gallery Joan Dupont -</p>


## <p align="center"> Contexto </p>

Un cliente muy importante proviniente de Francia nos encarga una solución para su problema, necesita dar visibilidad a sus obras. Joan Dupont es un famosos pintor francés que ha decidido actualizar su modelo de negocio y dar un salto al siglo XXI.

## <p align="center"> Análisis </p>
### <p align="center"> Técnica de Análisis 1 - Entrevista con el cliente </p>


#### <p align="center"> Comunicado del cliente (_leer con acento francés_) </P>

<div class="cuadroTexto">
Yo necesito un lugar en internet en donde colocar <span class="italic">mes oeuvres d'art</span>. Son cuadros preciosos de valor incalculable y necesito que el mundo los vea. <span class="italic">En plus</span>, estoy creando otras obras que pretendo enseñarlas al mundo.
<span class="italic">Les oeuvres</span> tienen distinto tamaño y formato, la digitalización la realizará un estudio independiente de fotografía. Ellos me hacen llegar la versión digitalizada y soy yo el que debe hacerla visible en internet.


De momento, solo necesito que sean visibles en pantallas grandes de ordenador.

Siempre les pongo nombre a mis obras de arte, un título, estaría bien poder utilizar un campo de búsqueda para hallar las distintas obras. <span class="italic">Et évidemment </span>, los derechos de uso del software deben ser restringidos, deben estar bajo una licencia privada. Además, debe quedar clara la autoría de las obras, todas serán creadas por mí.

<span class="italic">Finalment, mes oeuvres d'art</span> son de gran prestigio y no me puedo permitir la deshonra del mensaje de sitio web inseguro, la solución debe funcionar bajo un protocolo seguro.

<p align="center"> Cordialment, Messier Joan Dupont </P>
</div>

#### <p align="center"> Fin comunicado del cliente </P>


### <p align="center"> Técnica de Análisis 2 - Planificación conjunta de requsitos </p>

Tras una reunión con los direcores del proyecto se sacó la siguiente conclusión que será plasmada en el documento ERS( Especificación de Requisitos de Software ).

La solución tendrá forma de sitio web con los siguientes requerimientos funcionales y no funcionales.

**Requerimientos funcionales**

- Debe tener un formulario para subir archivos de imagen
- El formulario solo lo podrán usar usuarios con sesión iniciada
- Solo habrá una cuenta de usuario, la del señor Joan Dupont
- Las obras se almacenarán con un ID que será el título que elija el autor en el formulario de subida
- Debe de haber un menú/barra de búsqueda por título de la obra
- Entre los datos almacenados de las obras uno de ellos será el autor, el autor siempre será el cliente
- No hay que aplicar responsive design

**Requerimientos no funcionales**

- Funcionará sobre el protocolo HTTPS
- La plataforma elegida es Firebase por su reducido coste en los servicios de alojamiento, almacenamiento, provisión de certificados y métricas del tráfico. Además, tiene muy buen funcionamiento en conjunto con Github
- El cliente dispondrá de todo el almacenamiento gratuito que le proporcione la plataforma

<img src="mystyles.svg" width="800" height="400" alt="Styles not founds">