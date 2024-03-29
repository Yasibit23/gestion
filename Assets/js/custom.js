// Here goes your custom javascript

function alertaPersonalizada(type, mensaje){
    Swal.fire({
        position: "top-end",
        icon: type,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      });
    }

    function eliminarRegistro(title, text, icono, accion, url){
        Swal.fire({
            title: title,
            text: text,
            icon: icono,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: accion
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }