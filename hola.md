# Propusta Alquiler de AUTOS

## Grupo

### Integrantes

- Alvarez, Thiago
- Joffre, Lucas
- Tell, Nino
- 48964, Tolaba Agustin

### Repositorios

- [frontend app](http://hyperlinkToGihubOrGitlab)
- [backend app](http://hyperlinkToGihubOrGitlab)

## Tema

### Descripción

\_ La empresa objeto de nuestro trabajo brinda el servicio de alquiler de vehículos particulares a clientes en diversas ciudades de Argentina.

### Modelo

![imagen del modelo]()

_Nota_: incluir un link con la imagen de un modelo, puede ser modelo de dominio, diagrama de clases, DER.

## Alcance Funcional

### Alcance Mínimo

_Nota_: el siguiente es un ejemplo para un grupo de 3 integrantes para un sistema de hotel. El

| Req                     | Detalle                                                                                                                                                                                                                                                                                                                           |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CRUD simple             | 1. CRUD Tipo Habitacion<br>2. CRUD Servicio<br>3. CRUD Localidad                                                                                                                                                                                                                                                                  |
| CRUD dependiente        | 1. CRUD Habitación {depende de} CRUD Tipo Habitacion<br>2. CRUD Cliente {depende de} CRUD Localidad                                                                                                                                                                                                                               |
| Listado<br>+<br>detalle | 1. Listado de habitaciones filtrado por tipo de habitación, muestra nro y tipo de habitación => detalle CRUD Habitacion<br> 2. Listado de reservas filtrado por rango de fecha, muestra nro de habitación, fecha inicio y fin estadía, estado y nombre del cliente => detalle muestra datos completos de la reserva y del cliente |
| CUU/Epic                | 1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva                                                                                                                                                                                                                                              |
