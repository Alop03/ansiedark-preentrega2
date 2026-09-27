# Ansiedark — Pre-entrega 2

Segunda etapa del e-commerce de Ansiedark, una joyería por suscripción dirigida a personas que hacen de su identidad una estética.

En esta instancia se desarrolló el layout inicial de la tienda mediante componentes funcionales de React, incorporando una navegación por categorías, un indicador visual del carrito y un contenedor principal que recibe contenido mediante props.

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript
- CSS
- React Icons
- Oxlint
- Git y GitHub

## Componentes principales

### Navbar

Contiene la identidad de Ansiedark y las categorías comerciales del catálogo:

- Anillos
- Collares
- Pulseras

### CartWidget

Representa el acceso visual al futuro carrito de compras. Actualmente muestra una cantidad fija de productos, que será reemplazada por información dinámica en próximas etapas.

### ItemListContainer

Funciona como contenedor principal del futuro catálogo. Recibe el mensaje de bienvenida mediante la prop `greeting`.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Alop03/ansiedark-preentrega2.git
```

Ingresar en la carpeta:

```bash
cd ansiedark-preentrega2
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

## Comandos disponibles

Ejecutar el entorno de desarrollo:

```bash
npm run dev
```

Analizar el código:

```bash
npm run lint
```

Generar la versión de producción:

```bash
npm run build
```

## Estructura relevante

```text
src/
├── components/
│   ├── CartWidget.jsx
│   ├── ItemListContainer.css
│   ├── ItemListContainer.jsx
│   ├── Navbar.css
│   └── Navbar.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Estado del proyecto

Pre-entrega 2: layout inicial y componentes del e-commerce.