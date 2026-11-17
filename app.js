/* Esquina Boston · comportamiento
   Página de exhibición: no hay carrito, buscador ni favoritos. Todo pedido va directo
   a PedidosYa o al teléfono. Los datos salen de data.js (window.EB). */
(() => {
  'use strict';

  const EB = window.EB;
  if (!EB) return;

  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];
  const pesos = (n) => EB.moneda.simbolo + n.toLocaleString('es-UY');

  /* ---------- precios: una sola fuente, data.js ---------- */

  const precios = new Map();
  for (const cat of EB.carta) {
    for (const item of cat.items) precios.set(item.id, item.precio);
    const desde = Math.min(...cat.items.map((i) => i.precio));
    $$(`[data-desde="${cat.id}"]`).forEach((el) => { el.textContent = pesos(desde); });
  }
  $$('[data-precio]').forEach((el) => {
    const p = precios.get(el.dataset.precio);
    if (p != null) el.textContent = pesos(p);
  });

  /* ---------- abierto o cerrado, en vivo, con la hora de Montevideo ---------- */

  const DIAS = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
  const aMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };

  function ahoraEnMontevideo() {
    const partes = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Montevideo', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(new Date());
    const v = Object.fromEntries(partes.map((p) => [p.type, p.value]));
    return { dia: DIAS[v.weekday], min: (Number(v.hour) % 24) * 60 + Number(v.minute) };
  }

  function estadoActual() {
    const semana = EB.horarios.google;
    const { dia, min } = ahoraEnMontevideo();
    const hoy = semana[dia];
    const ayer = semana[(dia + 6) % 7];

    // la noche de ayer puede seguir abierta pasada la medianoche
    if (ayer.abre && aMin(ayer.cierra) < aMin(ayer.abre) && min < aMin(ayer.cierra)) {
      return { abierto: true, texto: `Abierto ahora · hasta las ${ayer.cierra}` };
    }
    if (hoy.abre) {
      const abre = aMin(hoy.abre);
      const cierra = aMin(hoy.cierra);
      if (min >= abre && (cierra < abre || min < cierra)) return { abierto: true, texto: `Abierto ahora · hasta las ${hoy.cierra}` };
      if (min < abre) return { abierto: false, texto: `Cerrado · abrimos hoy a las ${hoy.abre}` };
    }
    for (let i = 1; i <= 7; i++) {
      const d = semana[(dia + i) % 7];
      if (d.abre) return { abierto: false, texto: i === 1 ? `Cerrado · abrimos mañana a las ${d.abre}` : `Cerrado · abrimos el ${d.dia.toLowerCase()} a las ${d.abre}` };
    }
    return { abierto: false, texto: 'Consultá el horario' };
  }

  function pintarEstado() {
    const e = estadoActual();
    $$('[data-estado]').forEach((el) => {
      el.dataset.abierto = String(e.abierto);
      $('[data-estado-txt]', el).textContent = e.texto;
    });
    const hoy = ahoraEnMontevideo().dia;
    $$('[data-horario] tr[data-dia]').forEach((fila) => {
      fila.dataset.hoy = String(Number(fila.dataset.dia) === hoy);
    });
  }
  pintarEstado();
  setInterval(pintarEstado, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) pintarEstado(); });

  /* ---------- cabecera ---------- */

  const cab = $('[data-cab]');
  const nav = $('[data-nav]');
  const menuBtn = $('[data-menu]');

  const alDesplazar = () => { cab.dataset.pegada = String(window.scrollY > 8); };
  alDesplazar();
  window.addEventListener('scroll', alDesplazar, { passive: true });

  function menu(abrir) {
    nav.dataset.abierta = String(abrir);
    cab.dataset.menuAbierto = String(abrir);
    menuBtn.setAttribute('aria-expanded', String(abrir));
  }
  menuBtn.addEventListener('click', () => menu(nav.dataset.abierta !== 'true'));
  nav.addEventListener('click', (ev) => { if (ev.target.closest('a')) menu(false); });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && nav.dataset.abierta === 'true') { menu(false); menuBtn.focus(); }
  });

  /* ---------- aparición al entrar en pantalla ---------- */

  // índice de cada elemento dentro de su grupo, para las cascadas del CSS (--n)
  $$('.tamanos, .gustos-grilla, .items').forEach((g) => {
    [...g.children].forEach((h, n) => h.style.setProperty('--n', n));
  });

  const observados = 'main > section, .cat';
  if ('IntersectionObserver' in window) {
    let anda = false;
    const obs = new IntersectionObserver((entradas) => {
      anda = true;
      for (const e of entradas) {
        if (e.isIntersecting) { e.target.dataset.visto = 'true'; obs.unobserve(e.target); }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    $$(observados).forEach((s) => obs.observe(s));
    // red de seguridad: si el observador nunca respondió, se muestra todo
    setTimeout(() => { if (!anda) $$(observados).forEach((s) => { s.dataset.visto = 'true'; }); }, 4000);
  } else {
    $$(observados).forEach((s) => { s.dataset.visto = 'true'; });
  }

  /* ---------- cinta de Instagram: infinita hacia la derecha ---------- */

  (() => {
    const cinta = $('[data-cinta]');
    const pista = $('[data-cinta-pista]');
    if (!cinta || !pista) return;
    // una copia exacta detrás de la original: al llegar a la mitad, vuelve sin salto
    const originales = [...pista.children];
    for (const el of originales) {
      const copia = el.cloneNode(true);
      copia.setAttribute('aria-hidden', 'true');
      copia.setAttribute('tabindex', '-1');
      pista.appendChild(copia);
    }
    // velocidad pareja en cualquier pantalla: unos 45 px por segundo
    const ajustar = () => {
      const mitad = pista.scrollWidth / 2;
      pista.style.setProperty('--cinta-dur', `${Math.max(30, mitad / 45)}s`);
    };
    const imgs = $$('img', pista);
    imgs.forEach((img) => { if (!img.complete) img.addEventListener('load', ajustar, { once: true }); });
    ajustar();
    cinta.dataset.lista = 'true';
  })();

  /* -- año del pie -- */
  $$('[data-anio]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
})();
