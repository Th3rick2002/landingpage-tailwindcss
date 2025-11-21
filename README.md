# Coffee Shop Landing page

## 👨‍💻 Tech stack
- Astro
- Tailwind CSS
- Boxicons

## 🚀 Estructura del proyecto

```text
/
├── public/                 //recursos estaticos
├── fonts/                  //fuentes del proyecto
├── src/
│   ├── assets/             //imagenes y otros recursos
│   ├── components/
│   │   └── layout/         //componentes que se repiten en varias paginas
│   │   └── section/        //componentes que se repiten en una sola pagina
│   │   └── shared/         //componentes que se reutilizan en más componentes
│   │   └── ui/             //componentes independientes
│   ├── layouts/
│   │   └── Layout.astro    //layout de la pagina
│   ├── pages/
│   │   └── about.astro     //pagina sobre nosotros
│   │   └── index.astro     //pagina principal
│   │   └── products.astro  //pagina de productos
│   │   └── season.astro    //pagina de productos y ofertas de temporada
│   └── styles/             //estilos globales de tailwind y css
└── package.json
```

## 🧞 Commandos

| Command                | Action                                                                           |
|:-----------------------|:---------------------------------------------------------------------------------|
| `pnpm install`         | Instalar dependencias                                                            |
| `pnpm dev`             | Iniciar servidor de desarrollo local en `localhost:4321`                         |
| `pnpm build`           | Construir version de producción en `./dist/`                                     |
| `pnpm preview`         | Obtenga una vista previa de su compilación localmente, antes de implementarla    |
| `pnpm astro ...`       | Ejecute comandos CLI como `astro add`, `astro check`                             |
| `pnpm astro -- --help` | Obtenga ayuda para usar Astro CLI                                                |

