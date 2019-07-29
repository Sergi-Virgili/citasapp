
$(function () {
    //VARIABLE PARA COMPROVAR EDICION O NUEVA RESERVA
    let editar = false;
    
    //LISTAR LAS RESERVAS
    listaReservas();
    let now = new Date($.now());
    
    
    
    // DOM MODAL CLOSE
    $('#modal-close').click( function(e) {
        e.preventDefault();
        closeModal();
    });

    //FUNCTIONES PARA EL MODAL
    function closeModal() {
        $('#vmodal').addClass('novisible')
    }
    function openModal() {
        $('#vmodal').removeClass('novisible')
    }


    //CONTROL DEL TIEMPO
    setInterval(function reloj() {
        let now = new Date($.now());
        $('#tiempo').text(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
        } , 1000)

    
    
     //NUEVA RESERVA Y EDITAR 
   
     $('#nueva-reserva').submit(function (e) { 
        e.preventDefault();
        
        let reservaData = {
            id: $('#reservaID').val(),
            nombre: $('#nombre').val(),
            apellidos: $('#apellidos').val(),
            telefono: $('#telefono').val(),
            comensales: $('#comensales').val(),
            time: $('#time').val(),
         
        }
        nuevareserva (reservaData);
        $('#nueva-reserva')[0].reset();
              
        
    });

    //FUNCION NUEVA RESERVA
    function nuevareserva(reservaData) {
      
        let url = editar === false ? 'reserve-add.php' : 'editar.php'
        $.post(url, reservaData,
            function (response) {
                
                console.log(response);
                editar = false
                listaReservas()
                
                          
            }
             
        );
        
    } 

    //ELIMIINAR UNA RESERVA

    $(document).on('click', '.deleteReserva', function() {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('reservaID')
        console.log(id);
        $.post('reserve-delete.php', { id }, function(response) {
            listaReservas();
        }
        )
    })



    // DETALLE DOM
    $(document).on('click', '.detalle', function() {
        
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('reservaID')
        single(id);
        openModal();
     
         
    })

    //FUNCION PARA DATOS SINGULAR
    function single(id) {
        $.post('detail.php', { id }, function(response) {
           
            let reserva = JSON.parse(response)[0];
            console.log(reserva);
            $('#detalleNombre').text(reserva.nombre);
            $('#detalleApellidos').text(reserva.apellidos);
            $('#detalleComensales').text(reserva.comensales);
            $('#detalleTelefono').text(reserva.telefono);
            $('#detalleFecha').text(reserva.fecha);
            
         }
         )
        
    }
    
    // EDITAR DOM
    $(document).on('click', '.edit', function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('reservaID')
        editar = true;
       
         $.post('detail.php', { id }, function(response) {
           
            let reserva = JSON.parse(response)[0];
            console.log(reserva);
            $('#reservaID').val(reserva.id);
            $('#nombre').val(reserva.nombre);
            $('#apellidos').val(reserva.apellidos);
            $('#comensales').val(reserva.comensales);
            $('#telefono').val(reserva.telefono);
            $('#time').val(reserva.fecha);
            
            
          }
          )

    });
   

    //FUNCION PARA LISTAR LAS RESERVAS

    function listaReservas() {
    $.ajax({
        type: 'GET',
        url: 'reserve-list.php',
       
        success: function (response) {
         
            let template = '';
            let reservas = JSON.parse(response);


            reservas.forEach(reserva => {
                template += `
                <tr reservaID="${reserva.id}">
                    <th scope="row" >${reserva.id}</th>
                    <td>${reserva.nombre}</td>
                    <td>${reserva.apellidos}</td>
                    <td>${reserva.fecha}</td>
                    <td>${reserva.telefono}</td>
                    <td>${reserva.comensales}</td>
                    <td>
                        <button class="btn btn-outline-primary detalle">Detalle</button>
                        <button class="btn btn-outline-secondary edit">Modificar</button>
                        <button class="btn btn-outline-danger deleteReserva">Eliminar</button>

                    </td>

                  </tr>
                `
            });
            $('#tabla').html(template);
            
        }
    });
    }

});
