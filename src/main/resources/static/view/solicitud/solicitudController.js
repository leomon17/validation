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
          placeholder: 'SELECCIONAR ESTADO...',
        });
        $('#municipality').select2({
          placeholder: 'SELECCIONAR MUNICIPIO...',
        });
        $('#academicLevel').select2({
          placeholder: 'SELECCIONAR NIVEL ÁCADEMICO...',
        });
      })

      $scope.solicitud = {
          id : null,
          name : "",
          lastname : "", 
          surname : "",
          dateBirth : null,
          email: "",
          phone: "",
          sexo: null,
          state: { id: null },
          municipality : { id: null },
          address : "",
          institution: "",
          academicLevel: { id: null },
          average: null,
          reason: "",
      }

      this.getRequests = () => {
        return $http({
          method: 'GET',
          url: APP_URL.url + "/solicitud",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + $scope.token,
          },
        }).then((res) => {
          setTimeout(executeDataTable, 1);
          $scope.listRequests = res.data;
          // document.getElementById('state').remove(0);
          // document.getElementById('municipality').remove(0);
          // document.getElementById('academicLevel').remove(0);
        }).catch((e) => {
          console.log(e);
        })
      }
      
      this.create = () => {

        let content = document.querySelectorAll('trix-editor');
        $scope.solicitud.reason = content[0].value;
        
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
              this.getRequests();
            } else {
              notyf.error('Ocurrió un error al crear la Notificación');
            }
      
          }, e => console.log("Error", e.message));
        }
        notyf.error('Hay campos vacios o incorrectos');
      };

      this.getStates = () => {
        return $http({
          method: 'GET',
          url: APP_URL.url + "/state",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + $scope.token,
          },
        }).then((res) => {
          $scope.listStates = res.data;
          // document.getElementById('state').remove(0);
        }).catch((e) => {
          console.log(e);
        })
      }

      this.getMunicipalities = () => {
        return $http({
          method: 'GET',
          url: APP_URL.url + "/municipality",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + $scope.token,
          },
        }).then((res) => {
          $scope.listMunicipalities = res.data;
          // document.getElementById('municipality').remove(0);
        }).catch((e) => {
          console.log(e);
        })
      }

      this.getAcademicLevels = () => {
        return $http({
          method: 'GET',
          url: APP_URL.url + "/academic-level",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + $scope.token,
          },
        }).then((res) => {
          $scope.listAcademicLevels = res.data;
        }).catch((e) => {
          console.log(e);
        })
      }

      this.deleteIndexOne = () => {
        document.getElementById('state').remove(0);
        document.getElementById('municipality').remove(0);
        document.getElementById('academicLevel').remove(0);
      }

      const cleanIndexOne = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() =>{
            resolve(this.getStates(), this.getMunicipalities(), this.getAcademicLevels());
          },100)
        });
      }

      cleanIndexOne()
        .then(() => this.deleteIndexOne());
      
     
      // -----------------------DATA TABLES------------------------------

    function executeDataTable() {
      $('#solicitudTable').DataTable({
      language: {
          url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      });
    }
},]);