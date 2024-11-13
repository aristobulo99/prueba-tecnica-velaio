# Proyecto Velaio - Actualización con NgRx

Este proyecto incluye una nueva actualización con la integración de NgRx para la gestión de estado en la aplicación. A continuación, se detallan los cambios realizados y la URL de la rama específica en la que se encuentran estas actualizaciones.

## Rama de la actualización

Se ha creado una nueva rama para esta actualización, denominada `feature/project-ngrx`. En esta rama se implementa la integración de NgRx, facilitando el manejo del estado de la aplicación de manera más eficiente y escalable.

- **URL de la rama**: [feature/project-ngrx](https://github.com/aristobulo99/prueba-tecnica-velaio/tree/feature/project-ngrx)

## Cambios realizados

1. **Integración de NgRx**:
   - Se instaló NgRx en el proyecto para manejar el estado de la aplicación de manera centralizada.
   - Se crearon `Actions`, `Reducers`, y `Effects` necesarios para gestionar el flujo de datos dentro de la aplicación.
   - La estructura de NgRx permite un flujo de datos más predecible y facilita la implementación de funcionalidades avanzadas, como la administración de datos en tiempo real y la optimización de la interfaz de usuario.

2. **Estructura de carpetas**:
   - Se agregó una carpeta para los módulos de NgRx (`store`) que contiene las subcarpetas `actions`, `reducers`, `effects`, y `selectors`.

3. **Actualización de componentes**:
   - Los componentes que manejan el estado han sido actualizados para usar NgRx.
   - Se suscriben al estado de NgRx y despachan acciones en lugar de manipular el estado localmente.

## Cómo usar la rama de actualización

Para revisar y probar la integración de NgRx, clona el repositorio y cambia a la rama `feature/project-ngrx`:

```bash
git clone https://github.com/aristobulo99/prueba-tecnica-velaio.git
cd prueba-tecnica-velaio
git checkout feature/project-ngrx
npm install
ng serve
