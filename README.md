# TallerColaborativoElectivaII

Iniciar:     npm run start;

Puerto mongodb:    27017

Puerto nodeJS:     4000

Nombre Base Datos:     autoService



Producto->   

Prefijo:     /prod

Rutas de acceso a las funciones:

Nombre Funcion                  Método           Ruta 
index                           get              '/'
newProduct                      post             '/'
getProduct                      get              '/:idProduct'
replaceProduct                  put              '/:id'
updateProduct                   patch            '/:id'
deleteProduct                   delete           '/:id'


Detail->     

Prefijo: /detail

Rutas de acceso a las funciones:

Nombre Funcion                  Método           Ruta 
index                           get              '/'
newDetail                       post             '/'
getDetail                       get              '/:id'
replaceDetail                   put              '/:id'
updateDetail                    patch            '/:id'
deleteDetail                    delete           '/:id'

  
Bill->      

Prefijo: /bill

Rutas de acceso a las funciones:

Nombre Funcion                  Método           Ruta 
index                           get              '/'
newBill                         post             '/'
getBill                         get              '/:number'
replaceBill                     put              '/:id'
updateBill                      patch            '/:id'
deleteBill                      delete           '/:id'
getDetails                      get              '/:id/getDetails'


