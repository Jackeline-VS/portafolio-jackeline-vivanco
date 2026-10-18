const projects=[
{title:'TechStore',repo:'techstore-react-hooks',label:'SEMANA 07 · REACT HOOKS',desc:'Tienda de tecnología con catálogo desde una API, búsqueda, filtros por categoría, carrito y checkout. Aplica useState, useEffect, useContext, useRef, useMemo, useCallback, memo y los hooks personalizados useFetch y useForm.',tags:['React','Vite','Hooks','Context API'],art:'techstore'},
{title:'SaludMetrics',repo:'Practica-semana-05---salud-metrics',label:'SEMANA 05 · REACT',desc:'Dashboard demostrativo de salud: indicadores, pacientes y citas con datos ficticios. Organización por componentes, props, children y estilos modulares.',tags:['React','Vite','CSS Modules'],art:'dashboard'},
{title:'E-commerce · Semana 3',repo:'VivancoSolano-semana3-ecommerce',label:'SEMANA 03 · DISEÑO WEB',desc:'NovaSmart: interfaz de tienda con categorías, promociones, productos y formulario. Incluye informes y capturas en el cuaderno de la Semana 3.',tags:['HTML','Diseño web'],art:'shop'},
{title:'Simulador de epidemias',repo:'Practica-semana-4--epidemiologia',label:'SEMANA 04 · JAVASCRIPT',desc:'Simulación académica con JavaScript y Canvas: controles, estados, curvas de evolución y monitor de ejecución. Cuatro capturas documentan la práctica en la Semana 4.',tags:['JavaScript','HTML','CSS'],art:'epi'},
{title:'Componentes y diseño responsivo',repo:'practica-calificada-2-web',label:'PRÁCTICA CALIFICADA · EQUIPO',desc:'Trabajo colaborativo con tarjetas animadas, navegación entre páginas y composiciones responsivas. Mi participación documentada: página principal y tarjetas de navegación.',tags:['HTML','CSS','Flexbox'],art:'cards'}
];
const weeks=[
{title:'Fundamentos de la web',sub:'Tecnologías web · DNS · Roles · VS Code',topics:['Un sitio web reúne páginas relacionadas; una aplicación web permite realizar tareas mediante interacción.','DNS relaciona nombres de dominio con direcciones de red. HTTP define el intercambio de solicitudes y respuestas entre cliente y servidor.','Frontend es la interfaz que utiliza la persona; backend gestiona la lógica del servidor. Los estándares abiertos permiten interoperabilidad.'],procedure:['Identificar las partes de la interfaz de Visual Studio Code y organizar una carpeta de trabajo.','Revisar extensiones y atajos útiles para editar y previsualizar una página.','Reconocer tecnologías, estándares y roles a partir del material de la Semana 1.'],lab:'Laboratorio 01A: interfaz, extensiones y atajos de VS Code. Falta incorporar la evidencia de la práctica realizada.',repo:'portafolio-web-uncp',reflection:'¿Cómo cambió mi comprensión de la relación entre navegador y servidor? ¿Qué función de VS Code me ayudó a organizar el trabajo?'},
{title:'HTML y diseño responsivo',sub:'HTML5 · XML · DOM · CSS · Flexbox y Grid',topics:['HTML organiza el contenido mediante elementos con significado. XML permite representar información estructurada.','El DOM representa el documento como un árbol de nodos que el navegador puede consultar y modificar.','CSS define la presentación. Flexbox organiza elementos en una dirección y Grid permite componer filas y columnas. El diseño responsivo adapta la interfaz al espacio disponible.'],procedure:['Organizar una página con encabezado, contenido principal y pie.','Aplicar estilos, unidades relativas y una distribución flexible.','Revisar el resultado en distintos anchos y ajustar las media queries.'],lab:'Laboratorio 02A: Flexbox, diseño fluido y responsivo. Falta vincular la entrega específica de esta semana.',reflection:'¿Qué decisión de diseño mejoró la lectura en celular? ¿Qué diferencia reconocí entre estructura HTML y presentación CSS?'},
{title:'Librerías CSS e interfaces',sub:'Bootstrap · Tailwind · Layout y componentes',topics:['Una librería CSS ofrece patrones de estilo que ayudan a construir interfaces consistentes.','Bootstrap organiza componentes y un sistema de distribución; Tailwind ofrece clases de utilidad para componer estilos.','La jerarquía visual, el espaciado y la tipografía facilitan identificar las acciones y comprender el contenido.'],procedure:['Revisar el código de la práctica e-commerce disponible en GitHub.','Identificar la composición, los estilos utilizados y la adaptación de la página.','Añadir capturas del resultado y documentar qué librería se utilizó realmente.'],lab:'Repositorio e-commerce de Semana 3 disponible. La descripción de resultados y las capturas se completarán con la entrega.',repo:'VivancoSolano-semana3-ecommerce',reflection:'¿Cómo elegí colores y espacios? ¿Qué gané al reutilizar estilos y qué aspectos tuve que personalizar?'},
{title:'JavaScript e interacción',sub:'Variables · Funciones · DOM · Canvas',topics:['JavaScript permite responder a eventos y cambiar el contenido de la interfaz.','Las funciones organizan acciones reutilizables; los condicionales y bucles controlan el comportamiento.','El DOM permite modificar elementos y estilos. Canvas sirve para dibujar gráficos y animaciones. TypeScript añade tipos al desarrollo con JavaScript.'],procedure:['Revisar los archivos index.html, styles.css y app.js de la práctica de epidemiología.','Relacionar la estructura, los estilos y la lógica de interacción.','Documentar una interacción real con su código y captura de resultado.'],lab:'Práctica de epidemiología disponible con HTML, CSS y JavaScript. La evidencia de animación o Canvas queda pendiente de confirmar.',repo:'Practica-semana-4--epidemiologia',reflection:'¿Qué evento activa el cambio en la interfaz? ¿Cómo comprobé que la lógica funcionaba y qué error tuve que resolver?'},
{title:'React y componentes',sub:'Vite · JSX · Props · Children · Estilos',topics:['React permite componer una interfaz a partir de componentes. JSX expresa su estructura dentro del código JavaScript.','Las props transmiten información al componente hijo; children permite insertar contenido entre sus etiquetas.','Los estilos modulares ayudan a limitar el alcance de las clases. Vite proporciona herramientas para trabajar con el proyecto.'],procedure:['Separar la interfaz en Sidebar, Header, Dashboard, MetricCard y AtencionesChart.','Recorrer los datos de ejemplo y pasarlos a MetricCard mediante props.','Insertar la descripción como children y aplicar estilos modulares.'],lab:'SaludMetrics incluye tarjetas, indicadores y secciones de pacientes y citas. El código señala que los registros y métricas son ficticios. Capturas de la entrega por añadir.',repo:'Practica-semana-05---salud-metrics',reflection:'¿Por qué separé las tarjetas en un componente? ¿Qué información envié con props y qué contenido coloqué con children?'},
{title:'Eventos, rutas y APIs',sub:'Renderizado · Formularios · Async/await · Axios',topics:['Los eventos conectan las acciones de la persona con cambios en la aplicación. El renderizado condicional selecciona qué mostrar y el iterativo crea elementos desde una colección.','El routing organiza vistas. Los formularios recogen información y requieren control de sus valores.','Una API permite intercambiar datos. Las promesas y async/await organizan operaciones asíncronas; Axios facilita solicitudes HTTP.'],procedure:['Documentar en TaskFlow la navegación y los filtros de tareas.','Registrar cómo se solicitan los datos y cómo se muestran los estados de carga o error.','Añadir el código al repositorio y capturas de las tareas y sus filtros.'],lab:'TaskFlow fue trabajado con React Router, Axios y JSONPlaceholder. Al revisar GitHub, el repositorio taskflow está vacío: falta incorporar el código y la evidencia para completar esta semana.',repo:'taskflow',reflection:'¿Cómo distinguí una tarea pendiente de una completada? ¿Qué ocurre si falla la consulta a la API y cómo debería comunicarlo la interfaz?'},
{title:'Hooks y hooks personalizados',sub:'useState · useEffect · useContext · useMemo · useFetch',status:'PRÁCTICA DOCUMENTADA',topics:['Los hooks permiten que un componente funcional guarde estado, ejecute efectos y acceda a contexto.','useContext comparte datos globales sin prop drilling; useRef guarda referencias sin provocar renders.','useMemo, useCallback y memo evitan cálculos y renders innecesarios. Un hook personalizado reúne lógica reutilizable.'],procedure:['Crear el proyecto TechStore con Vite y React.','Aplicar los hooks paso a paso.','Registrar cada paso como un commit en GitHub.'],lab:'TechStore: catálogo, carrito y checkout construidos con hooks.',repo:'techstore-react-hooks',reflection:'¿Qué problema resolvió cada hook en TechStore? ¿En qué momento un hook personalizado hizo el código más claro? ¿Qué me costó más entender: los efectos, el contexto o la memorización?'}
];
weeks[1].theory = `
<h3>HTML y XML</h3><p>HTML organiza el contenido de una página con etiquetas. HTML5 incorporó elementos semánticos que describen la función de cada sección. XML permite definir etiquetas para representar e intercambiar datos estructurados. Son tecnologías presentes en la plataforma web abierta.</p>
<h3>Etiquetas principales de HTML</h3><div class="theory-table"><table><thead><tr><th>Función</th><th>Ejemplos</th></tr></thead><tbody><tr><td>Estructura del documento</td><td><code>&lt;html&gt;, &lt;head&gt;, &lt;body&gt;</code></td></tr><tr><td>Organización semántica</td><td><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;</code></td></tr><tr><td>Contenido</td><td><code>&lt;h1&gt;–&lt;h6&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;table&gt;</code></td></tr><tr><td>Formularios</td><td><code>&lt;form&gt;, &lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;</code></td></tr></tbody></table></div>
<h3>DOM: la página como árbol de nodos</h3><p>Al interpretar el HTML, el navegador construye el DOM, una representación del documento en memoria. JavaScript puede consultar los nodos, cambiar sus textos y estilos o añadir nuevos elementos.</p><div class="dom-visual"><b>document → html</b><div><span><strong>head</strong><br>title · meta</span><span><strong>body</strong><br>header · main · footer</span></div></div>
<h3>Ciclo de vida de una página</h3><ul><li><code>DOMContentLoaded</code>: el HTML se interpretó y el DOM está preparado; no espera a que terminen de cargar las imágenes.</li><li><code>load</code>: terminó la carga de la página y de los recursos dependientes correspondientes.</li><li><code>beforeunload</code>: puede intervenir antes de abandonar la página, por ejemplo para advertir sobre cambios sin guardar. No es fiable en todos los escenarios.</li><li><code>unload</code>: se relaciona con la descarga del documento, pero está obsoleto y no debe usarse como mecanismo fiable para guardar información.</li></ul>
<h3>SEO y compatibilidad</h3><p>Una estructura semántica, títulos descriptivos, metadatos pertinentes y un buen rendimiento ayudan a comprender y encontrar el contenido. El atributo <code>alt</code> describe las imágenes y favorece la accesibilidad. La compatibilidad se comprueba en diferentes navegadores y con información de soporte; los prefijos CSS se aplican únicamente cuando son necesarios.</p>
<h3>CSS y modos de presentación</h3><p>CSS controla la apariencia mediante reglas con selectores, propiedades y valores. La propiedad <code>display</code> determina cómo participa un elemento en la distribución.</p><div class="theory-table"><table><thead><tr><th>Display</th><th>Comportamiento habitual</th></tr></thead><tbody><tr><td><code>block</code></td><td>Comienza en una nueva línea y, con ancho automático en el flujo normal, ocupa el ancho disponible.</td></tr><tr><td><code>inline</code></td><td>Comparte la línea con otros elementos; en elementos no reemplazados, width y height no funcionan como en un bloque.</td></tr><tr><td><code>inline-block</code></td><td>Participa en la línea y permite definir ancho y alto.</td></tr></tbody></table></div><p class="small">Las etiquetas tienen estilos predeterminados, pero CSS puede cambiar su display. Una imagen no equivale necesariamente a inline-block.</p>
<h3>Unidades de medida</h3><div class="theory-table"><table><thead><tr><th>Unidad</th><th>Referencia</th></tr></thead><tbody><tr><td><code>px</code> / <code>pt</code></td><td>Unidades absolutas CSS. El píxel CSS no equivale siempre a un píxel físico; pt se utiliza habitualmente en impresión.</td></tr><tr><td><code>em</code></td><td>Tamaño de fuente del elemento; al definir font-size, toma como referencia el tamaño heredado.</td></tr><tr><td><code>rem</code></td><td>Tamaño de fuente del elemento raíz, normalmente html.</td></tr><tr><td><code>%</code></td><td>La referencia depende de la propiedad; para width suele ser el ancho del bloque contenedor.</td></tr><tr><td><code>vw</code> / <code>vh</code></td><td>1% del ancho o del alto del viewport correspondiente.</td></tr></tbody></table></div>
<h3>Flexbox</h3><p>Distribuye elementos en un eje principal, como fila o columna. <code>justify-content</code> organiza el espacio en ese eje y <code>align-items</code> alinea en el eje transversal.</p><div class="flex-demo"><span>1</span><span>2</span><span>3</span></div><pre><code>.contenedor { display: flex; gap: 1rem;
  justify-content: space-between; }</code></pre><p><code>flex-direction: column</code> cambia el eje principal a vertical. Valores como flex-start, center y space-between controlan la distribución.</p>
<h3>Grid Layout</h3><p>Organiza filas y columnas simultáneamente. Es útil para galerías, tarjetas y estructuras de página.</p><div class="grid-demo"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span></div><pre><code>.cuadricula { display: grid;
  grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.destacado { grid-column: span 2; }</code></pre>
<h3>Posicionamiento</h3><div class="theory-table"><table><thead><tr><th>Position</th><th>Cómo se comporta</th></tr></thead><tbody><tr><td><code>static</code></td><td>Conserva el flujo normal; los desplazamientos top, left, right y bottom no lo posicionan.</td></tr><tr><td><code>relative</code></td><td>Se desplaza desde su posición original conservando su espacio en el flujo.</td></tr><tr><td><code>absolute</code></td><td>Sale del flujo normal y se posiciona respecto a su bloque de referencia, habitualmente el ancestro posicionado más cercano.</td></tr><tr><td><code>fixed</code></td><td>Sale del flujo y suele tomar el viewport como referencia; ciertos ancestros pueden cambiar esa referencia.</td></tr><tr><td><code>sticky</code></td><td>Permanece en el flujo y se ajusta al umbral definido dentro de su contenedor de desplazamiento.</td></tr></tbody></table></div>
<h3>Diseño fluido, responsivo y mobile-first</h3><p>El diseño fluido usa medidas flexibles para adaptarse al espacio disponible. El diseño responsivo incorpora cambios de distribución mediante media queries. Mobile-first parte de una interfaz para pantallas pequeñas y añade mejoras para mayores anchos.</p><div class="breakpoints"><span>640 px<br><small>Ejemplo de corte</small></span><span>768 px<br><small>Ejemplo de corte</small></span><span>1024 px<br><small>Ejemplo de corte</small></span><span>1280 px<br><small>Ejemplo de corte</small></span></div><p class="small">Estos valores son referencias de diseño, no estándares universales ni una clasificación fija de dispositivos. Los puntos de corte se eligen según el contenido.</p>
`;
weeks[1].reflectionHtml = `<h4>¿Qué aprendí?</h4><p>Comprendí mejor cómo se organiza una página web y cómo el navegador interpreta su contenido. El árbol DOM me permitió relacionar las etiquetas HTML con una estructura de nodos que JavaScript puede consultar y modificar. También reconocí que las etiquetas semánticas, como article y nav, expresan la función del contenido y pueden favorecer la accesibilidad y su comprensión por los buscadores cuando se utilizan correctamente.</p><p>En CSS distinguí dos formas de distribuir los elementos: Flexbox resulta útil para organizar y alinear en un eje principal, mientras que Grid permite trabajar con filas y columnas. Estos conceptos me ayudan a pensar cómo construir interfaces ordenadas y adaptables.</p><h4>¿Cómo lo aprendí?</h4><p>Los diagramas del DOM y los ejemplos visuales de display y position me ayudaron a relacionar la teoría con el comportamiento de los elementos. En la práctica de Flexbox, observar el efecto de las propiedades sobre la distribución permitió comprender mejor la alineación y el espacio entre elementos.</p><p class="small">Borrador adaptado del texto de referencia. Confirmar que la descripción del laboratorio coincide con la práctica realizada antes de presentarlo.</p>`;
const safe=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function artwork(p,i){
if(p.art==='techstore')return `<div class="visual store-visual"><div class="visual-top"><b>⚡ Tech<span>Store</span></b><span>Catálogo · Carrito · Checkout</span></div><div class="store-hero">Tecnología que <span>impulsa</span> tu día</div><div class="store-search">Buscar productos…</div><div class="store-chips"><i>todas</i><i>laptops</i><i>smartphones</i><i>tablets</i></div><div class="store-grid"><div><i></i><span>Laptop</span><b>$1,299</b></div><div><i></i><span>Smartphone</span><b>$899</b></div><div><i></i><span>Tablet</span><b>$549</b></div><div><i></i><span>Audífonos</span><b>$129</b></div></div></div>`;
if(p.art==='dashboard')return `<div class="visual dashboard-visual"><div class="visual-top"><b>Salud<span>Metrics</span></b><span>Panel de control</span></div><div class="dash-layout"><div class="dash-side"><i></i><i></i><i></i><i></i></div><div class="dash-main"><div class="dash-title">Una mirada a los datos.</div><div class="dash-metrics"><div><small>Pacientes</small><b>1,250</b></div><div><small>Atenciones</small><b>320</b></div><div><small>Citas</small><b>48</b></div></div><div class="dash-chart"><span>Atenciones del mes</span><div class="chart-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div></div></div>`;
if(p.art==='shop')return `<div class="visual shop-visual"><div class="visual-top"><b>ESTUDIO / SHOP</b><span>Objetos · Colecciones</span></div><div class="shop-title">Un espacio para<br>lo extraordinario.</div><div class="shop-products"><div><i></i><span>Forma / 01</span></div><div><i></i><span>Equilibrio / 02</span></div><div><i></i><span>Esencia / 03</span></div></div></div>`;
if(p.art==='epi')return `<div class="visual epi-visual"><div class="visual-top"><b>EPIDEMIOLOGÍA</b><span>Interfaz web</span></div><div class="epi-body"><span class="epi-cross">+</span><div><small>INFORMACIÓN & INTERACCIÓN</small><h4>Diseño para<br>comprender.</h4><div class="epi-lines"><i></i><i></i><i></i></div></div></div></div>`;
return `<div class="visual cards-visual"><div class="visual-top"><b>EXPLORA.</b><span>Una interfaz, tres destinos</span></div><div class="cards-stack"><div>01<span>Mensajes</span></div><div>02<span>Destinos</span></div><div>03<span>Tienda</span></div></div></div>`;
}
document.querySelector('#projects').innerHTML=projects.map((p,i)=>`<article class="project"><div class="project-art" aria-hidden="true">${artwork(p,i)}<span class="visual-caption">COMPOSICIÓN ILUSTRATIVA · NO ES CAPTURA</span></div><div class="project-copy"><div class="project-heading"><span class="project-label">${p.label}</span><span class="project-index">0${i+1}</span></div><h3>${p.title}</h3><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><a href="https://github.com/Jackeline-VS/${p.repo}" target="_blank" rel="noopener">Explorar código <span>↗</span></a></div></article>`).join('');
document.querySelector('#weeks').innerHTML=weeks.map((w,i)=>`<button class="week" data-week="${i}" aria-haspopup="dialog"><span class="week-number">${String(i+1).padStart(2,'0')}</span><h3>${w.title}</h3><p>${w.sub}</p><span class="week-bottom"><span>${w.status||(i<=4?'PRÁCTICA DOCUMENTADA':i===5?'ENTREGA POR INCORPORAR':'EVIDENCIAS POR COMPLETAR')}</span><span>↗</span></span></button>`).join('');
const dialog=document.querySelector('#week-dialog');let lastButton;
const nbIcons = {
  theory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></svg>',
  lab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6M10 3v6L4.5 19A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10"/></svg>',
  reflection: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>'
};
document.querySelectorAll('[data-week]').forEach(button => button.addEventListener('click', () => {
  lastButton = button;
  openWeek(Number(button.dataset.week));
}));
function openWeek(index) {
  const w = weeks[index];
  const number = String(index + 1).padStart(2, '0');
  const theory = w.theory || `<h3>Temas y conceptos</h3><ul>${w.topics.map(text => `<li>${safe(text)}</li>`).join('')}</ul>`;
  const laboratory = w.labHtml || `<h3>Procedimiento</h3><ol>${w.procedure.map(text => `<li>${safe(text)}</li>`).join('')}</ol><h3>Laboratorio y resultados</h3><p>${safe(w.lab)}</p>${w.repo ? `<a class="lesson-repo" target="_blank" rel="noopener" href="https://github.com/Jackeline-VS/${w.repo}">Consultar el código en GitHub ↗</a>` : ''}<h3>Evidencias por incorporar</h3><div class="notice">Añadir capturas del resultado, código relevante e informe de la práctica. Los ejemplos de teoría son didácticos; no sustituyen las evidencias del laboratorio.</div>`;
  const reflection = w.reflectionHtml || `<h3>Preguntas para mi reflexión</h3><p>${safe(w.reflection)}</p><div class="notice">Completar con mi experiencia antes de la entrega.</div>`;
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.querySelector('#week-content').innerHTML = `
  <div class="nb-top">
    <button class="brand nb-brand" data-close aria-label="Volver al portafolio">JV<span>.</span></button>
    <div class="nb-top-actions">
      <button class="nb-pill" data-close>${nbIcons.theory} Cuaderno</button>
      <button class="nb-theme" aria-label="${isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}">${isDark ? '☀' : '☾'}</button>
    </div>
  </div>
  <div class="nb-wrap">
    <nav class="nb-crumbs" aria-label="Ruta"><button data-close>Semanas</button><span>/</span><b>Semana ${index + 1}</b></nav>
    <div class="nb-head">
      <div><p class="nb-eyebrow">CUADERNO DE CLASES</p><h2>Semana ${index + 1}</h2><p class="nb-sub">${safe(w.title)} · ${safe(w.sub)}</p></div>
      <div class="nb-arrows"><button data-go="${index - 1}" aria-label="Semana anterior" ${index === 0 ? 'disabled' : ''}>←</button><button data-go="${index + 1}" aria-label="Semana siguiente" ${index === weeks.length - 1 ? 'disabled' : ''}>→</button></div>
    </div>
    <div class="lesson-tabs" role="tablist" aria-label="Apartados de la semana"><button id="tab-theory" role="tab" aria-selected="true" aria-controls="panel-theory" tabindex="0">${nbIcons.theory} Teoría</button><button id="tab-lab" role="tab" aria-selected="false" aria-controls="panel-lab" tabindex="-1">${nbIcons.lab} Ejercicios de laboratorio</button><button id="tab-reflection" role="tab" aria-selected="false" aria-controls="panel-reflection" tabindex="-1">${nbIcons.reflection} Reflexión</button></div>
    <div class="nb-panel">
      <div id="panel-theory" class="lesson-panel" role="tabpanel" aria-labelledby="tab-theory" tabindex="0"><p class="nb-panel-label">${nbIcons.theory} TEORÍA</p><h3 class="nb-panel-title">${safe(w.title)}</h3>${theory}</div>
      <div id="panel-lab" class="lesson-panel" role="tabpanel" aria-labelledby="tab-lab" tabindex="0" hidden><p class="nb-panel-label">${nbIcons.lab} EJERCICIOS DE LABORATORIO</p>${laboratory}</div>
      <div id="panel-reflection" class="lesson-panel" role="tabpanel" aria-labelledby="tab-reflection" tabindex="0" hidden><p class="nb-panel-label">${nbIcons.reflection} REFLEXIÓN</p><div class="reflection-label">${w.reflectionConfirmed ? 'REFLEXIÓN PERSONAL' : 'REFLEXIÓN PERSONAL · BORRADOR PARA REVISIÓN'}</div>${reflection}</div>
    </div>
    <div class="lesson-footnote">Organizado a partir del sílabo IS093A y del material compartido. Revisar los resultados y la reflexión personal antes de la entrega.</div>
  </div>`;
  document.querySelectorAll('#week-content [data-close]').forEach(el => el.addEventListener('click', () => dialog.close()));
  document.querySelectorAll('#week-content [data-go]').forEach(el => el.addEventListener('click', () => openWeek(Number(el.dataset.go))));
  const nbTheme = document.querySelector('.nb-theme');
  nbTheme.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    nbTheme.textContent = next === 'dark' ? '☀' : '☾';
    nbTheme.setAttribute('aria-label', next === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  });
  const tabs = [...document.querySelectorAll('.lesson-tabs [role="tab"]')];
  function activate(tab, focus = false) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); activate(tabs[next], true); }
    });
  });
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.querySelector('#tab-theory').focus({ preventScroll: true });
}
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>lastButton?.focus());
const theme=document.querySelector('#theme');function setTheme(t){document.documentElement.dataset.theme=t;theme.textContent=t==='dark'?'☀':'☾';theme.setAttribute('aria-label',t==='dark'?'Cambiar a modo claro':'Cambiar a modo oscuro');try{localStorage.setItem('jv-theme',t)}catch{}}let saved;try{saved=localStorage.getItem('jv-theme')}catch{}setTheme(saved==='light'?'light':'dark');theme.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

// Menú activo: marca el apartado según la sección visible al desplazarse
const navLinks = [...document.querySelectorAll('nav a')];
const spySections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
function updateActiveLink() {
  const line = scrollY + innerHeight * 0.35;
  let current = spySections[0];
  spySections.forEach(section => { if (section.offsetTop <= line) current = section; });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) current = spySections[spySections.length - 1];
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === '#' + current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
  });
}
addEventListener('scroll', updateActiveLink, { passive: true });
addEventListener('resize', updateActiveLink);
updateActiveLink();

// Aparición al desplazarse: cada bloque se muestra al entrar en pantalla
const revealItems = document.querySelectorAll('.hero-copy > *, .portrait,.section-head, .welcome-card, .about-intro, .skills, .project, .notebook-intro, .week, .notebook-footer, .reflection > *, .sources > *, .contact > *');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reveal-on');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');
    observer.unobserve(el);
    // Al terminar, se quitan las clases para no interferir con los efectos hover
    setTimeout(() => el.classList.remove('reveal', 'visible'), 900 + (parseFloat(el.style.transitionDelay) || 0) * 1000);
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach(el => {
    const siblings = [...el.parentElement.children].filter(child => child.matches('.hero-copy > *, .welcome-card, .project, .week, .sources > *'));
    const order = siblings.indexOf(el);
    if (order > 0) el.style.transitionDelay = Math.min(order % 3, 2) * 0.12 + (el.closest('.hero-copy') ? order * 0.06 : 0) + 's';
    el.classList.add('reveal');
    observer.observe(el);
  });
}
