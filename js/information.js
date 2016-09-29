$(document).ready(function(){
    cargarPagina("contIndex.html");//Con esta linea cargo lo que falta del Index.

    function cargarPagina(direccion){
        //Esta funcion carga la url pasada como parametro dentro del ID = "mostrador"
        $.ajax({            url: direccion,
            method: "GET",
            dataType: "html",
            success:function(data){
                $("#mostrador").html(data);
            } ,
            error: function(){
                alert("ABRI EL XAMP HIJO");
            }
        });

    }

    function obtenerTabla(){
        //Esta funcion utiliza la tecnica de ajax para Obtener informacion del servicio Rest y crea un la informacion
        //que va dentro del <tdoby> para luego ser mostrada en un div previamente creado.
        $.ajax({
            type: "GET",
            dataType: 'JSON',
            url: "http://web-unicen.herokuapp.com/api/group/40" ,
            success: function(data){
                var html = "";
                for (var i = 0; i < data.information.length; i++) {
                    html += "<tr>";
                    html += "<td>" + data.information[i]['thing'].campeon + "</td>";
                    html +="<td>" + data.information[i]['thing'].subCampeon + "</td>";
                    html += "<td>" + data.information[i]['thing'].dia + "</td>";
                    html += "<td>" + data.information[i]['thing'].mod + "</td>";
                    html += "</tr>";
                }
                $("#mostrarTabla").html(html);
            }
        });
    }

    $('.navItem').click(function(event){
        //Con esta funcion recupero los URL que esta en el data del nav y llamo a la funcion para cargar la pagina media Partial Render
        event.preventDefault();
        cargarPagina($(this).data("nombre-pagina"));
    });

    $("#navUltimos").on("click",function(){
        //esta funcion hace lo mismo de la anterior pero la funcionalidad es distinta; Ademas de cargar llama a la funcion Obtener Tabla
        $.ajax({            url:"contTabla.html",
            method: "GET",
            dataType: "html",
            success:function(data){
                $("#mostrador").html(data);
                obtenerTabla();
            } ,
            error: function(){
                alert("Ha ocurrido un error");
            }
        });
    });

});