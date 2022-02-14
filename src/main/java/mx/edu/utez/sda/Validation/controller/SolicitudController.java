package mx.edu.utez.sda.Validation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mx.edu.utez.sda.Validation.entity.Solicitud;
import mx.edu.utez.sda.Validation.entity.DataTransferObject.SolicitudDTO;
import mx.edu.utez.sda.Validation.service.SolicitudService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(path = "/solicitud")
public class SolicitudController {
    
    @Autowired
    private SolicitudService solicitudService;

    @GetMapping(value = "")
    @Transactional(readOnly = true)
    public List<SolicitudDTO> findAllRequests(){
        return solicitudService.findAllRequests();
    }
    
    @RequestMapping(value="/save", method = { RequestMethod.GET, RequestMethod.POST })
    public boolean save(@RequestBody @Validated Solicitud obj, BindingResult bindingResult) {
        
        try {
            if(bindingResult.hasErrors()){
                for (FieldError fieldError : bindingResult.getFieldErrors()) {
                    System.out.println(fieldError.getDefaultMessage());// Imprime el mensaje de error
                }
                return false;// Retorna falso
            }

            solicitudService.save(obj);
        return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());// Imprime el mensaje de error
            return false;// Retorna falso
        }
    }
     
}
