angular.module("routingApp").controller("SolicitudCtrl", [
    "$rootScope",
    "$scope",
    "$http",
    "APP_URL",
    "$routeParams",
    "$window",
    function ($rootScope, $scope, $http, APP_URL, $routeParams, $window) {
      const notyf = new Notyf({
        duration: 2500,
        position: {
          x: "right",
          y: "top",
        },
      });

      (() => {
        'use strict';
        const forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach((form) => {
          form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              notyf.error('Hay campos vacios o incorrectos');
            }
            else {
              this.create(); 
            }
            form.classList.add('was-validated');
          }, false);
        });
      })();

      $(document).ready(function () {

        $('#state').select2({
          placeholder: 'SELECCIONAR UN ESTADO...'
          
        });
        $('#municipality').select2({
          placeholder: 'SELECCIONAR UN MUNICIPIO...'
          
        });
      })

      $scope.solicitud = {
          id : null,
          name : null,
      }


      this.create = () => {

        let content = document.querySelectorAll('trix-editor');
        $scope.notificationReport.textContent = content[0].value;
        
        if (content[0].value.length > 0){
          return $http({
            method: "POST",
            url: APP_URL.url + "/solicitud/save",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + $scope.token,
            },
            data: $scope.solicitud
  
          }).then(res => {
            console.log(res);
      
            if (res.data) {
              notyf.success('Notificación registrada correctamente');
            } else {
              notyf.error('Ocurrió un error al crear la Notificación');
            }
      
          }, e => console.log("Error", e.message));
        }
      };
    },
  ]);