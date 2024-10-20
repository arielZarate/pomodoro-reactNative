# Pomodoro App - React Native 💥

Este es un proyecto de una aplicación móvil de temporizador Pomodoro desarrollado con **React Native** y **Expo**. La aplicación permite a los usuarios establecer ciclos de trabajo y descanso utilizando la técnica Pomodoro, y cuenta con diferentes modos de temporización y temas de color por seleccion.

## Características principales

- **Temporizador Pomodoro**: Tres modos predefinidos (Trabajo, Descanso corto, Descanso largo).
- **Interfaz simple y clara**: Temporizador en el centro con un anillo de progreso que indica el tiempo restante.
- **Botones de control**: Comenzar, pausar y resetear el temporizador.
- **Temas de color**: Los colores cambian según el modo seleccionado.
- **Sonido de Inicio/fin de time**
- **Funcionalidad de reinicio**: Permite restablecer el temporizador.

## Tecnologías utilizadas

- **React Native**: Para la interfaz de usuario y la lógica de la aplicación.
- **Expo**: Plataforma para ejecutar y probar la aplicación.
- **React Hooks**: Para manejar el estado de la aplicación (uso de un hook personalizado para el temporizador).
- **TypeScript** : tipado estático para mejorar el desarrollo.

## Requisitos previos

Antes de poder ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **Expo CLI**: Puedes instalar Expo CLI globalmente con el siguiente comando:

  ```bash
  npm install -g expo-cli
  ```

## Estructura del proyecto

```bash

pomodoro-app/
│
├── assets/                   # Imágenes y recursos gráficos (logo, íconos)
├── components/               # Componentes reutilizables
│   ├── Header/               # Componente del encabezado
│   ├── MenuTop/              # Menú para seleccionar el modo (Pomodoro, Descanso)
│   ├── Display/              # Temporizador y control de inicio/pausa
│   └── Icons/                # Íconos personalizados
├── hook/                     # Hook personalizado para manejar la lógica del temporizador
│   └── hookPomodoro.ts       # Lógica del temporizador
├── App.tsx                   # Componente principal de la aplicación
├── app.json                  # Configuración de Expo (íconos, splash screen, etc.)
└── package.json              # Dependencias del proyecto y scripts

```

## PORTADA

![fp](/repoImages/fp.jpeg)
![fp](/repoImages/fb.jpeg)
![fp](/repoImages/fc.jpeg)
![fp](/repoImages/fa.jpeg)
![fp](/repoImages/fv.jpeg)

## instalacion

😀😀😀
`git clone https://github.com/arielZarate/pomodoro-reactNative.git:grinning  `

# Contribuir

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio y crear una Pull Request con tus cambios.
