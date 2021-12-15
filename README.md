# TallerColaborativoElectivaII

## Instalación 🔧

Ejecutar el siguiente comando para instalar las dependencias

```bash
npm install
```
Para ejecutar la API ingrese el siguiente comando

```bash
npm run start
```
---
## Configuracion 🛠️

Puerto mongodb:    27017

Puerto nodeJS:     4000

Nombre Base Datos:     autoService

---

## Clases  📑
* Product
* Detail
* Bill
---

## Rutas 📌

 * **Product**   

    Prefijo: `/prod`

    *Rutas de las funciones*

    |Nombre función    | Método    | Ruta            |
    |------------------|:---------:|----------------:| 
    | index            | get       | `/`             |
    | newProduct       | post      | `/`             |
    | getProduct       | get       | `/:idProduct`   |
    | replaceProduct   | put       | `/:id`          |
    | updateProduct    | patch     | `/:id`          |
    | deleteProduct    | delete    | `/:id`          |

 
 * **Detail**   

    Prefijo: `/detail`

    *Rutas de las funciones*

    |Nombre función    | Método    | Ruta            |
    |------------------|:---------:|----------------:| 
    | index            | get       | `/`             |
    | newDetail        | post      | `/`             |
    | getDetail        | get       | `/:id`          |
    | replaceDetail    | put       | `/:id`          |
    | updateDetail     | patch     | `/:id`          |
    | deleteDetail     | delete    | `/:id`          |


 * **Bill**   

    Prefijo: `/bill`

    *Rutas de las funciones*

    |Nombre función    | Método    | Ruta             |
    |------------------|:---------:|-----------------:| 
    | index            | get       | `/`              |
    | newBill          | post      | `/`              |
    | getBill          | get       | `/:number`       |
    | replaceBill      | put       | `/:id`           |
    | updateBill       | patch     | `/:id`           |
    | deleteBill       | delete    | `/:id`           |
    | getDetails       | get       | `/:id/getDetails`|
  
