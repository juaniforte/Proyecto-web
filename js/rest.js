$(document).ready(function(){
  function obtenerTabla(){
  //obtengo los datos del servicio rest y los muestro en el Div "MostrarTabla"
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

  $("#btnInfoPorGrupo").on("click",function (){
  //Muestra todos los objetos, con sus respectivos ID, de cada Grupo.
  event.preventDefault();
  var grupo = $("#groupid")[0].value;
  $.ajax({
    type: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
    success: function(data){
      var html = "";
      for (var i = 0; i < data.information.length; i++) {
        html += "Id: " + data.information[i]['_id'] + "</br>";
        html += "Grupo: " + data.information[i]['group'] + "</br>";
        html += "Informacion: " + data.information[i]['thing'] + "</br>";
        html += "informacion: " + data.information[i]['thing'].campeon + "</br>";
        html += "--------------------- </br>";
      }
      $("#infoGroup").html(html);
    }
  });
  });

  $("#obtenerInfo").on("click",function (){
  //Muestra los datos de los JSON que hay en el Servicio.
  event.preventDefault();
  var item = $("#itemid")[0].value;
  $.ajax({
    type: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/get/" + item,
    success: function(data){
      var html = "";
      html += "Id: " + data.information['_id'] + "</br>";
      html += "Grupo: " + data.information['group'] + "</br>";
      html += "Informacion: " + data.information['thing'] + "</br>";
      html += "informacion: " + data.information['thing'].campeon + "</br>";
      html += "informacion: " + data.information['thing'].subCampeon + "</br>";
      html += "informacion: " + data.information['thing'].dia + "</br>";
      html += "informacion: " + data.information['thing'].mod + "</br>";
      html += "--------------------- </br>";
      $("#infoItem").html(html);
    },
    error:function(data){
      console.log(data);
    }

  });
  });
  $("#borrar").on("click",function (){
  //Borra el objeto del ID ingresado por pantalla
  event.preventDefault();
  var item = $("#idBorrar")[0].value;
  $.ajax({
    type: "DELETE",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/delete/" + item,
    success: function(data){
      $("#infoBorrar").removeClass("alert-danger");
      $("#infoBorrar").addClass("alert-success");
      $("#infoBorrar").html(data.message);

    },
    error:function(data){
      alert("no borro");
      $("#guardarAlert").addClass("alert-danger")
      $("#guardarAlert").html("Error por favor intente mas tarde");
      console.log(data);
    }
  });
  });

  $("#btnGuardarInfo").on('click', function(event){
  //Guarda en el servicio un JSON con la informacion necesaria para crear la tabla
  event.preventDefault();
  var grupo = "40";
  var iCampeon = $("#campeon").val();
  var iSubCampeon = $("#subCampeon").val();
  var iMod = $("#mod").val();
  var iDia = $("#dia").val();
  var informacion = {
    campeon: iCampeon,
    subCampeon: iSubCampeon,
    mod: iMod,
    dia: iDia
  }
  var info = {
    group: grupo,
    thing: informacion
  };
  $.ajax({
    type: "POST",
    dataType: 'JSON',
    data: JSON.stringify(info),
    contentType: "application/json; charset=utf-8",
    url: "http://web-unicen.herokuapp.com/api/create",
    success: function(data){
      $("#guardarAlert").removeClass("alert-danger")
      $("#guardarAlert").addClass("alert-success")
      $("#guardarAlert").html("Informacion guardada con ID=" + data.information._id);
      obtenerTabla();
    },
    error:function(data){
      $("#guardarAlert").addClass("alert-danger")
      $("#guardarAlert").html("Error por favor intente mas tarde");
      console.log(data);
    }
  });


  });
});
