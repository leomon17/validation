package mx.edu.utez.sda.Validation.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="solicitud")
public class Solicitud {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "nombre")
	private String nombre;

	@Column(name = "apellido_paterno")
    private String apellidoPaterno;

	@Column(name = "correo")
    private String correo;

	@Column(name = "fecha_nacimiento")
    private String fechaNacimiento;

	@Column(name = "direccion")
    private String direccion;

	@Column(name = "sexo")
    private String sexo;

	@Column(name = "estado")
    private String estado;

	@Column(name = "municipio")
    private String municipio;

	@Column(name = "eatado_civil")
    private String estadoCivil;

	@Column(name = "telefono")
    private String telefono;
    
	@Column(name = "nivel_academico")
    private String nivelAcademico;

	@Column(name = "promedio")
    private float promedio;

	@Column(name = "instituto")
    private String instituto;

	@Column(name = "razon")
    private String razon;

    public Solicitud(long id, String nombre, String apellidoPaterno, String correo, String fechaNacimiento,
            String direccion, String sexo, String estado, String municipio, String estadoCivil, String telefono,
            String nivelAcademico, float promedio, String instituto, String razon) {
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.sexo = sexo;
        this.estado = estado;
        this.municipio = municipio;
        this.estadoCivil = estadoCivil;
        this.telefono = telefono;
        this.nivelAcademico = nivelAcademico;
        this.promedio = promedio;
        this.instituto = instituto;
        this.razon = razon;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getNivelAcademico() {
        return nivelAcademico;
    }

    public void setNivelAcademico(String nivelAcademico) {
        this.nivelAcademico = nivelAcademico;
    }

    public float getPromedio() {
        return promedio;
    }

    public void setPromedio(float promedio) {
        this.promedio = promedio;
    }

    public String getInstituto() {
        return instituto;
    }

    public void setInstituto(String instituto) {
        this.instituto = instituto;
    }

    public String getRazon() {
        return razon;
    }

    public void setRazon(String razon) {
        this.razon = razon;
    }
	
	
}
