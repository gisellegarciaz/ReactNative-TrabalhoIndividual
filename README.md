<h1>App Novoto (Clone)</h1>
<h4>Dev: Giselle Garcia - React Native - Prof: Felipe - TIC/ Software Serratec 2025.2</h4>

<p>Para cumprir com os requisitos para o trabalho individual da diciplina de React Native, escolhi o app da "Novoto" para ser replicado.</p><br>

<h2>Requisitos do trabalho:</h2>

<p>Objetivos:  
Dois clones da sombra (2 páginas e 2 componentes) de algum aplicativo a sua escolha.
Criterios:
Usar typescript.
Usar Tags aprendidas nas aulas.
Usar StyleSheet (separadamente do tsx).
Colocar no git, junto com o seu código colocar a imagem que foi usada para clone no assets.
</p>

<p>O Novoto-Clone tem 2 telas, Login e Home, com Card de produtos e a Bottom Tab de navegação como componentes.</p>

<p>No app.tsx foi necessário usar a função de splash screen para que a fontFamily usada na Novoto tivesse tempo de ser totalmene carregada.</p>

<br>
<h2>Telas do app original Novoto:</h2><br>
<img width="1811" height="1054" alt="novoto app" src="https://github.com/user-attachments/assets/52065aac-a137-4638-8bcb-56943a0764b9" />


<h2>Telas do app de clone:</h2><br>

https://github.com/user-attachments/assets/2e9dbc5d-5d4c-448c-a9f9-492a21632dbd

<h1>Estrutura das pastas:</h1>

```
NovotoClone/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── @types/
│   │   ├── image.d.ts
│   │   └── navigation.d.ts
│   ├── assets/
│   │   ├── AppNovotoPrints/
│   │   ├── CloneNovotoBackground.png
│   │   ├── ImagemPerfilDefault.png
│   │   ├── Novoto_Logo_Dark-BG_Header.png
│   │   └── NovotoLogoDarkBGHeader.avif
│   ├── components/
│   │   ├── CardListaNotasFiscais/
│   │   └── CustomTabBar.tsx
│   ├── pages/
│   │   ├── Home/
│   │   └── Login/
│   ├── routers/
│   │   ├── index.tsx
│   │   ├── stackRouters.tsx
│   │   └── tabRouters.tsx
│   ├── types/
│   │   └── TiposGerais.ts
│   └── index.ts
├── .gitignore
├── app.json
├── App.tsx
├── index.ts
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
