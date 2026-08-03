<!-- ============================================
         HEADER
         ============================================ -->
    <header class="header" id="header">
        <div class="header-inner">
            <a href="#" class="logo">
                <div class="logo-icon">MC</div>
                <span>Mundo Cancel</span>
            </a>
            <nav>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#sistemas" class="nav-link">Sistemas</a></li>
                    <li><a href="#cotizador" class="nav-link">Cotizador</a></li>
                    <li><a href="http://wa.me/5213328008949" class="nav-link nav-cta" target="_blank" rel="noopener">WhatsApp</a></li>
                </ul>
                <button class="mobile-menu-toggle" id="mobileToggle" aria-label="Menú">
                    <span></span><span></span><span></span>
                </button>
            </nav>
        </div>
    </header>

    <!-- ============================================
         HERO
         ============================================ -->
    <section class="hero" id="hero">
        <div class="hero-bg" id="heroBg"></div>
        <div class="hero-content">
            <div class="hero-badge">Sistemas Premium</div>
            <h1 class="hero-title">Aluminio y Cristal <span>de Alto Diseño</span></h1>
            <p class="hero-subtitle">Soluciones arquitectónicas en aluminio y cristal para espacios que inspiran. Explora, visualiza y cotiza en segundos.</p>
            <div class="hero-cta-group">
                <a href="#cotizador" class="hero-cta">Cotizar Ahora</a>
                <a href="https://mundocalculador-indalum.netlify.app" class="hero-cta hero-cta-secondary" target="_blank" rel="noopener">Abrir Calculador</a>
            </div>
        </div>
    </section>

    <!-- ============================================
         SISTEMAS (CATEGORÍAS)
         ============================================ -->
    <section class="section" id="sistemas">
        <div class="section-label">Explora</div>
        <h2 class="section-title">Nuestros Sistemas</h2>
        <p class="section-subtitle">Cada sistema está diseñado con precisión para ofrecer la máxima calidad y estética arquitectónica.</p>
        <div class="categories-grid" id="categoriesGrid"></div>
    </section>

    <!-- ============================================
         COTIZADOR VISUAL
         ============================================ -->
    <section class="cotizador-section" id="cotizador">
        <div class="section-label">Cotiza en Segundos</div>
        <h2 class="section-title">Visualiza tu Sistema</h2>
        <p class="section-subtitle">Selecciona la categoría y ajusta las dimensiones. El croquis se actualiza en tiempo real.</p>
        
        <div class="cotizador-grid">
            <div class="cotizador-controls">
                <div class="slider-group">
                    <label class="slider-label">Categoría</label>
                </div>
                <div class="category-selector" id="categorySelector"></div>
                
                <div class="slider-group">
                    <label class="slider-label">
                        <span>Ancho</span>
                        <span class="slider-value" id="widthValue">200 cm</span>
                    </label>
                    <input type="range" id="widthSlider" min="80" max="600" value="200" step="1">
                </div>
                
                <div class="slider-group">
                    <label class="slider-label">
                        <span>Alto</span>
                        <span class="slider-value" id="heightValue">220 cm</span>
                    </label>
                    <input type="range" id="heightSlider" min="80" max="400" value="220" step="1">
                </div>
                
                <div class="area-display">
                    <div class="area-stat">
                        <div class="area-stat-value" id="areaValue">4.40</div>
                        <div class="area-stat-label">m²</div>
                    </div>
                    <div class="area-stat">
                        <div class="area-stat-value" id="perimeterValue">8.40</div>
                        <div class="area-stat-label">m lineales</div>
                    </div>
                </div>
            </div>
            
            <div class="croquis-container" id="croquisContainer">
                <svg id="croquisSvg" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg"></svg>
                <div class="special-case-message" id="specialCaseMessage">
                    <div class="special-case-icon">🧠</div>
                    <div class="special-case-title">Este proyecto requiere al cerebro del equipo.</div>
                    <p class="special-case-text">Los sistemas especiales y acoples necesitan una evaluación personalizada para ofrecer la mejor solución.</p>
                    <a href="http://wa.me/5213328008949" class="special-case-btn" target="_blank" rel="noopener">💬 Consultar Cotizador Inteligente</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================================
         COTIZADOR INTELIGENTE
         ============================================ -->
    <section class="inteligente-section">
        <div class="inteligente-content">
            <div class="inteligente-badge">✨ IA + Expertos</div>
            <h2 class="inteligente-title">Cotizador Inteligente</h2>
            <p class="inteligente-subtitle">Para proyectos complejos que requieren asesoría especializada, cálculo avanzado y soluciones personalizadas.</p>
            <a href="http://wa.me/5213328008949" class="inteligente-btn" target="_blank" rel="noopener">Iniciar Cotización Inteligente</a>
        </div>
    </section>

    <!-- ============================================
         FOOTER
         ============================================ -->
    <footer class="footer">
        <p>&copy; 2026 Mundo Cancel. Todos los derechos reservados.</p>
    </footer>

    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    <script>
        // ============================================
        // CONFIGURACIÓN - ¡SOLO MODIFICA ESTO!
        // ============================================
        
        // 1. Formatos que quieres que intente (en orden de preferencia)
        const FORMATOS = ['webp', 'jpg', 'jpeg', 'png'];
        
        // 2. Datos de categorías (SOLO el nombre base, sin extensión)
        //    El código buscará automáticamente: nombre.webp, nombre.jpg, etc.
        const CATEGORIAS = [
            { id: 'corredizo', nombre: 'Corredizo', imagen: 'corredizo_real' },
            { id: 'abatible', nombre: 'Abatible', imagen: 'abatible_real' },
            { id: 'fijo', nombre: 'Fijo', imagen: 'fijo' },
            { id: 'plegable', nombre: 'Plegable', imagen: 'plegable' },
            { id: 'domo', nombre: 'Domo', imagen: 'domo' },
            { id: 'cristal-templado', nombre: 'Cristal Templado', imagen: 'templado' },
            { id: 'acoples', nombre: 'Acoples', imagen: 'acoples' },
            { id: 'especiales', nombre: 'Especiales', imagen: 'especiales_real' }
        ];
        
        // 3. Categorías que NO muestran croquis (solo mensaje especial)
        const CATEGORIAS_ESPECIALES = ['acoples', 'especiales'];
        
        // 4. Nombre de la imagen para el HERO (sin extensión)
        const HERO_IMAGEN = 'corredizo_real';
        
        // 5. WhatsApp
        const WHATSAPP_URL = 'http://wa.me/5213328008949';
        
        // 6. URL del calculador externo
        const CALCULADOR_URL = 'https://mundocalculador-indalum.netlify.app';
        
        // ============================================
        // ¡NO TOCAR DEBAJO DE ESTA LÍNEA!
        // ============================================
        
        // Estado
        let categoriaActual = 'corredizo';
        let anchoActual = 200;
        let altoActual = 220;
        
        // ============================================
        // UTILIDADES - DETECCIÓN DE FORMATO
        // ============================================
        
        function obtenerRutaImagen(nombreBase, formato) {
            return `assets/images/${nombreBase}.${formato}`;
        }
        
        function detectarFormato(nombreBase, callback) {
            let indice = 0;
            
            function probarSiguiente() {
                if (indice >= FORMATOS.length) {
                    // Si ningún formato funciona, usamos el primero como fallback
                    callback(FORMATOS[0]);
                    return;
                }
                
                const formato = FORMATOS[indice];
                const ruta = obtenerRutaImagen(nombreBase, formato);
                const img = new Image();
                
                img.onload = function() {
                    callback(formato);
                };
                
                img.onerror = function() {
                    indice++;
                    probarSiguiente();
                };
                
                img.src = ruta;
            }
            
            probarSiguiente();
        }
        
        function obtenerUrlImagen(nombreBase, callback) {
            detectarFormato(nombreBase, function(formato) {
                callback(obtenerRutaImagen(nombreBase, formato));
            });
        }
        
        // ============================================
        // GENERAR TARJETAS DE CATEGORÍAS
        // ============================================
        
        function generarTarjetas() {
            const grid = document.getElementById('categoriesGrid');
            grid.innerHTML = '';
            
            CATEGORIAS.forEach((cat, index) => {
                const card = document.createElement('div');
                card.className = 'category-card';
                card.dataset.category = cat.id;
                
                // Contenedor de imágenes (3 copias para rotación)
                let imagenesHTML = '';
                for (let i = 0; i < 3; i++) {
                    imagenesHTML += `
                        <img src="" alt="${cat.nombre}" class="${i === 0 ? 'active' : ''}" 
                             data-index="${i}" data-base="${cat.imagen}" loading="lazy">
                    `;
                }
                
                card.innerHTML = `
                    <div class="category-card-image">${imagenesHTML}</div>
                    <div class="category-card-body">
                        <h3 class="category-card-title">${cat.nombre}</h3>
                        <div class="category-card-arrow">→</div>
                    </div>
                `;
                
                grid.appendChild(card);
                
                // Cargar imágenes con detección automática
                const imgs = card.querySelectorAll('img');
                imgs.forEach((img, i) => {
                    const nombreBase = img.dataset.base;
                    obtenerUrlImagen(nombreBase, function(url) {
                        img.src = url;
                    });
                });
                
                // Click para ir al cotizador
                card.addEventListener('click', () => {
                    document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => seleccionarCategoria(cat.id), 400);
                });
                
                // Rotación automática
                if (imgs.length > 1) {
                    let imgIndex = 0;
                    setInterval(() => {
                        imgs.forEach(img => img.classList.remove('active'));
                        imgIndex = (imgIndex + 1) % imgs.length;
                        imgs[imgIndex].classList.add('active');
                    }, 3000 + index * 500);
                }
            });
        }
        
        // ============================================
        // COTIZADOR
        // ============================================
        
        function generarBotonesCategoria() {
            const selector = document.getElementById('categorySelector');
            selector.innerHTML = '';
            
            CATEGORIAS.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                btn.dataset.category = cat.id;
                btn.textContent = cat.nombre;
                btn.addEventListener('click', () => seleccionarCategoria(cat.id));
                selector.appendChild(btn);
            });
        }
        
        function seleccionarCategoria(catId) {
            categoriaActual = catId;
            
            // Actualizar botones
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === catId);
            });
            
            // Mostrar/ocultar croquis
            const croquisSvg = document.getElementById('croquisSvg');
            const specialMsg = document.getElementById('specialCaseMessage');
            
            if (CATEGORIAS_ESPECIALES.includes(catId)) {
                croquisSvg.style.display = 'none';
                specialMsg.classList.add('visible');
            } else {
                croquisSvg.style.display = 'block';
                specialMsg.classList.remove('visible');
                actualizarCroquis();
            }
        }
        
        function actualizarCroquis() {
            const svg = document.getElementById('croquisSvg');
            const w = anchoActual;
            const h = altoActual;
            
            const scaleX = 400 / 600;
            const scaleY = 300 / 400;
            const scaledW = w * scaleX;
            const scaledH = h * scaleY;
            const x = (500 - scaledW) / 2;
            const y = (400 - scaledH) / 2;
            
            let svgContent = `
                <defs>
                    <marker id="arrowStart" markerWidth="8" markerHeight="8" refX="0" refY="4" orient="auto">
                        <path d="M8,0 L0,4 L8,8" fill="#888"/>
                    </marker>
                    <marker id="arrowEnd" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                        <path d="M0,0 L8,4 L0,8" fill="#888"/>
                    </marker>
                </defs>
                <rect x="40" y="30" width="420" height="340" rx="8" fill="#f0f0f0" stroke="#e0e0e0" stroke-width="1.5" stroke-dasharray="6,3"/>
                <text x="250" y="20" text-anchor="middle" font-size="11" fill="#aaa" font-family="Inter, sans-serif">Vista frontal</text>
                <line x1="${x}" y1="${y + scaledH + 30}" x2="${x + scaledW}" y2="${y + scaledH + 30}" stroke="#888" stroke-width="1.5" marker-end="url(#arrowEnd)" marker-start="url(#arrowStart)"/>
                <text x="${x + scaledW/2}" y="${y + scaledH + 50}" text-anchor="middle" font-size="12" fill="#555" font-family="Inter, sans-serif">${w} cm</text>
                <line x1="${x - 25}" y1="${y}" x2="${x - 25}" y2="${y + scaledH}" stroke="#888" stroke-width="1.5" marker-end="url(#arrowEnd)" marker-start="url(#arrowStart)"/>
                <text x="${x - 25}" y="${y + scaledH/2}" text-anchor="middle" font-size="12" fill="#555" transform="rotate(-90, ${x - 25}, ${y + scaledH/2})" font-family="Inter, sans-serif">${h} cm</text>
            `;
            
            // Dibujo según categoría
            const cat = CATEGORIAS.find(c => c.id === categoriaActual);
            if (!cat) return;
            
            switch(categoriaActual) {
                case 'corredizo':
                    const panelW = scaledW * 0.48;
                    const gap = scaledW * 0.04;
                    svgContent += `
                        <rect x="${x}" y="${y}" width="${panelW}" height="${scaledH}" rx="3" fill="rgba(180,200,220,0.5)" stroke="#8ab4d6" stroke-width="2.5"/>
                        <rect x="${x + panelW + gap}" y="${y}" width="${panelW}" height="${scaledH}" rx="3" fill="rgba(180,200,220,0.35)" stroke="#8ab4d6" stroke-width="2" stroke-dasharray="5,3"/>
                        <line x1="${x + panelW/2}" y1="${y + 10}" x2="${x + panelW/2}" y2="${y + scaledH - 10}" stroke="#8ab4d6" stroke-width="1" opacity="0.6"/>
                        <line x1="${x + panelW + gap + panelW/2}" y1="${y + 10}" x2="${x + panelW + gap + panelW/2}" y2="${y + scaledH - 10}" stroke="#8ab4d6" stroke-width="1" opacity="0.4"/>
                        <text x="${x + scaledW/2}" y="${y + scaledH + 70}" text-anchor="middle" font-size="12" fill="#888" font-family="Inter, sans-serif">Hojas corredizas</text>
                    `;
                    break;
                    
                case 'abatible':
                    const panelW2 = scaledW * 0.7;
                    svgContent += `
                        <rect x="${x}" y="${y}" width="${panelW2}" height="${scaledH}" rx="3" fill="rgba(180,200,220,0.5)" stroke="#8ab4d6" stroke-width="2.5"/>
                        <rect x="${x + panelW2}" y="${y}" width="${scaledW - panelW2}" height="${scaledH}" rx="3" fill="rgba(180,200,220,0.2)" stroke="#8ab4d6" stroke-width="1.5" stroke-dasharray="4,4"/>
                        <circle cx="${x + panelW2}" cy="${y + scaledH/2}" r="5" fill="#666"/>
                        <text x="${x + scaledW/2}" y="${y + scaledH + 70}" text-anchor="middle" font-size="12" fill="#888" font-family="Inter, sans-serif">Apertura abatible</text>
                    `;
                    break;
                    
                case 'fijo':
                    svgContent += `
                        <rect x="${x}" y="${y}" width="${scaledW}" height="${scaledH}" rx="3" fill="rgba(180,200,220,0.4)" stroke="#8ab4d6" stroke-width="2.5"/>
                        <rect x="${x + 8}" y="${y + 8}" width="${scaledW - 16}" height="${scaledH - 16}" rx="2" fill="rgba(220,235,248,0.5)" stroke="#b0cfe0" stroke-width="1"/>
                        <text x="${x + scaledW/2}" y="${y + scaledH/2}" text-anchor="middle" font-size="14" fill="#8ab4d6" font-family="Inter, sans-serif" font-weight="600">Panel Fijo</text>
                        <text x="${x + scaledW/2}" y="${y + scaledH + 70}" text-anchor="middle" font-size="12" fill="#888" font-family="Inter, sans-serif">Vidrio fijo</text>
                    `;
                    break;
                    
                case 'plegable':
                    const segments = 4;
                    const segW = scaledW / segments;
                    for (let i = 0; i < segments; i++) {
                        const segX = x + i * segW;
                        const alpha = 0.3 + (i * 0.15);
                        svgContent += `
                            <rect x="${segX + 1}" y="${y}" width="${segW - 2}" height="${scaledH}" rx="2" fill="rgba(180,200,220,${alpha})" stroke="#8ab4d6" stroke-width="2"/>
                            <line x1="${segX + segW/2}" y1="${y + 10}" x2="${segX + segW/2}" y2="${y + scaledH - 10}" stroke="#8ab4d6" stroke-width="0.8" opacity="0.5"/>
                        `;
                    }
                    svgContent += `
                        <text x="${x + scaledW/2}" y="${y + scaledH + 70}" text-anchor="middle" font-size="12" fill="#888" font-family="Inter, sans-serif">Sistema plegable (${segments} hojas)</text>
                    `;
                    break;
                    
                case 'domo':
                    svgContent += `
                        <path d="M${x} ${y + scaledH} Q${x + scaledW/2} ${y - scaledH*0.3} ${x + scaledW} ${y + scaledH}" 
                              fill="rgba(180,210,235,0.35)" stroke="#8ab4d6" stroke-width="2.5"/>
                        <path d="M${x} ${y + scaledH} Q${x + scaledW/2} ${y - scaledH*0.3} ${x + scaledW} ${y + scaledH}" 
                              fill="none" stroke="#b0d0e8" stroke-width="1" stroke-dasharray="8,4"/>
                        <line x1="${x}" y1="${y + scaledH}" x2="${x + scaledW}" y2="${y + scaledH}" stroke="#8ab4d6" stroke-width="2.5"/>
                        <text x="${x + scaledW/2}" y="${y + scaledH + 70}" text-anchor="middle" font-size="12" fill="#888" font-family="Inter, sans-serif">Domo arquitectónico</text>
                    `;
                    break;
                    
                case 'cristal-templado':
                    svgContent += `
                        <defs>
                            <pattern id="temperedPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="1.5" fill="#b0cfe0" opacity="0.4"/>
                            </pattern>
                        </defs>
                        <rect x="${x}" y="${y}" width="${scaledW}" height="${scaledH}" rx="4" fill="rgba(200,220,240,0.5)" stroke="#8ab4d6" stroke-width="3"/>
                        <rect x="${x + 6}" y="${y + 6}" width="${scaledW - 12}" height="${scaledH - 12}" rx="2" fill="rgba(230,240,250,0.4)" stroke="#c0d8ec" stroke-width="1"/>
                        <rect x="${x + 10}" y="${y + 10}" width="${scaledW - 20}" height="${scaledH - 20}" rx="2" fill="url(#temperedPattern)"/>
                        <text x="${x + scaledW/2}" y="${y + scaledH/2}" text-anchor="middle" font-size="13" fill="#6a9ab8" font-family="Inter, sans-serif" font-weight="700">CRISTAL</text>
                        <text x="${x + scaledW/2}" y="${y + scaledH/2 + 18}" text-anchor="middle" font-size="11" fill="#6a9ab8" font-family="Inter, sans-serif">TEMPLADO</text>
                        <text x="${x + scaledW/2}" y="${y + scaledH + 70}" text-anchor="middle" font-size="12" fill="#888" font-family="Inter, sans-serif">Cristal templado de seguridad</text>
                    `;
                    break;
            }
            
            svg.innerHTML = svgContent;
            
            // Actualizar estadísticas
            const area = (w * h) / 10000;
            const perimeter = (2 * (w + h)) / 100;
            document.getElementById('areaValue').textContent = area.toFixed(2);
            document.getElementById('perimeterValue').textContent = perimeter.toFixed(2);
            document.getElementById('widthValue').textContent = w + ' cm';
            document.getElementById('heightValue').textContent = h + ' cm';
        }
        
        // ============================================
        // HERO - CARGA AUTOMÁTICA
        // ============================================
        
        function cargarHero() {
            const heroBg = document.getElementById('heroBg');
            if (!heroBg) return;
            
            obtenerUrlImagen(HERO_IMAGEN, function(url) {
                heroBg.style.backgroundImage = `url('${url}')`;
                heroBg.style.backgroundSize = 'cover';
                heroBg.style.backgroundPosition = 'center';
                heroBg.style.backgroundAttachment = 'fixed';
            });
        }
        
        // ============================================
        // EVENTOS
        // ============================================
        
        document.getElementById('widthSlider').addEventListener('input', function() {
            anchoActual = parseInt(this.value);
            if (!CATEGORIAS_ESPECIALES.includes(categoriaActual)) actualizarCroquis();
        });
        
        document.getElementById('heightSlider').addEventListener('input', function() {
            altoActual = parseInt(this.value);
            if (!CATEGORIAS_ESPECIALES.includes(categoriaActual)) actualizarCroquis();
        });
        
        // Menú móvil
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Header scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
        
        // ============================================
        // GSAP ANIMACIONES
        // ============================================
        
        function initAnimations() {
            gsap.registerPlugin(ScrollTrigger);
            
            document.body.classList.add('loaded');
            
            // Hero
            const tl = gsap.timeline();
            tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' })
              .from('.hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.3')
              .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')
              .from('.hero-cta-group', { opacity: 0, y: 15, duration: 0.6, ease: 'power3.out' }, '-=0.3');
            
            // Parallax hero
            gsap.to('#heroBg', {
                y: 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
            
            // Tarjetas
            gsap.from('.category-card', {
                opacity: 0,
                y: 60,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.categories-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
            
            // Cotizador
            gsap.from('.cotizador-section', {
                opacity: 0,
                y: 40,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cotizador-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
            
            // Inteligente
            gsap.from('.inteligente-section', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.inteligente-section',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        }
        
        // ============================================
        // INICIO
        // ============================================
        
        document.addEventListener('DOMContentLoaded', () => {
            cargarHero();
            generarTarjetas();
            generarBotonesCategoria();
            seleccionarCategoria('corredizo');
            initAnimations();
        });
