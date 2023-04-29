      const animalForm = document.getElementById("animal_form");
      const animalLista = document.getElementById("lista");
      const mostrarListaBoton = document.getElementById("mostrar_lista");
      const limpiarListaBoton = document.getElementById("limpiar_lista");
      const agregarAnimal = document.getElementById("agregar");
    

    agregarAnimal.addEventListener("click", event => {
        event.preventDefault();
        const animalNombre = document.getElementById("animal_nombre").value;
        const peligro = document.getElementById("peligro").checked;
        if(animalNombre==""){
            alert("Introduzca el nombre del animal por favor..");
        }
        else{
            localStorage.setItem(animalNombre, peligro);
            registro_Animales(animalNombre, peligro);
            animalForm.reset();
        }
       
    });

      function registro_Animales(animalNombre, peligro) {
        const animal = document.createElement("li");
        if(peligro==true)
        {
            animal.innerText =animalNombre + " - "+"En peligro de extinción"
        }
        else
        {
            animal.innerText =animalNombre + " - "+"No en peligro de extinción"
        }
       
        animalLista.appendChild(animal);
      }

    

    limpiarListaBoton.addEventListener("click", () => {
        localStorage.clear();
        limpiar_Lista_Animales();
    });

    function limpiar_Lista_Animales() {
        animalLista.innerHTML = "";
    }

    mostrarListaBoton.addEventListener("click", () => {
        mostrar_Animales_Lista();
    });

    function mostrar_Animales_Lista() {
        limpiar_Lista_Animales();
        for (let i = 0; i < localStorage.length; i++) {
          const animalNombre = localStorage.key(i);
          const peligro = localStorage.getItem(animalNombre)==="true";
          registro_Animales(animalNombre, peligro);
        }

      
      }