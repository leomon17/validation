package mx.edu.utez.sda.Validation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.edu.utez.sda.Validation.entity.Solicitud;

public interface ISolicitudRepository extends JpaRepository<Solicitud, Long>{
    
}
