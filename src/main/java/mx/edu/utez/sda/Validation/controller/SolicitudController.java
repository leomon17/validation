package mx.edu.utez.sda.Validation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mx.edu.utez.sda.Validation.entity.Solicitud;
import mx.edu.utez.sda.Validation.service.SolicitudService;

import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(path = "/solicitud")
public class SolicitudController {
    
    @Autowired
    private SolicitudService solicitudService;

    @RequestMapping(value="/save", method = { RequestMethod.GET, RequestMethod.POST })
    public boolean save(@RequestBody Solicitud obj) {
        
        try {
            solicitudService.save(obj);
        return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());// Imprime el mensaje de error
            return false;// Retorna falso
        }
    }
     
}
