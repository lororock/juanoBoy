/* empty css                                 */
import { c as createComponent, d as createAstro, f as addAttribute, i as renderHead, j as renderSlot, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CZBS2EEg.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icono.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Yugen</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html><!-- Global styles now handled by Tailwind -->`;
}, "D:/proyectos/Personal/juanoBoy/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const API_URL = "https://ufff-digital.uc.r.appspot.com/api/testimonios/?populate=*";
  const API_TOKEN = "Bearer db0afe4b84307d9d3d38e010c8efc8d12037dba4f3b5c75d06f15a7a01da6e0f51f762c125c8b6fb1a9e185fa0ac14793e25710c09c54221fbeab58f0f2a9fcac8c3866fb40a3eb407adcd04aa65195469ec8641c1cdb3f00b550f6db845b52dca808d2621301a925edabe4a68e82aa22c1135a98491e12c755aa006a266ae8f";
  let testimonios = [];
  try {
    const res = await fetch(API_URL, { headers: { Authorization: API_TOKEN } });
    const { data = [] } = await res.json();
    testimonios = data.map((item) => {
      const attr = item.attributes ?? item;
      const imagenObj = attr.imagen ?? attr.imagen_local ?? {};
      const imagenUrl = imagenObj.url || imagenObj.data?.attributes?.url || "";
      return {
        negocio: attr.negocio ?? attr.titulo ?? "Cliente",
        comentario: attr.comentario ?? attr.testimonio ?? "",
        imagen: imagenUrl,
        autor: attr.autor ?? attr.nombre ?? "Cliente",
        rating: attr.calificacion ?? 5
      };
    });
  } catch (err) {
    console.error("Error fetching testimonios", err);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-cover text-white flex flex-col items-center" style="background-image: url('/fondo.webp')"> <div class="py-12 flex justify-center"> <img class="w-72 h-72" src="/LogoYugen.gif"> </div> <div class="w-full"> <img class="w-full" src="/HeadVisual.gif"> </div> <!-- barra de navegacion  --> <div class="w-full mt-12 bg-cover bg-no-repeat bg-center" style="background-image: url('/line-head.png')"> <ul class="flex justify-center items-center list-none p-0 m-0"> <li> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 24 24"> <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" fill="white"></path> </svg> </li> <li class="mx-4 text-2xl font-bold">DEBIL</li> <li class="mx-4 text-2xl font-bold">VIDA</li> <li class="mx-4 text-2xl font-bold">FANTASMA</li> <li> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 24 24"> <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" fill="white"></path> </svg> </li> </ul> </div> <!-- david titulo --> <div class="mt-12 flex justify-center"> <img src="/xDx.webp"> </div> <div class="flex justify-center"> <img class="w-1/2 h-1/2" src="/DebilCD.gif"> ${testimonios.map((testimonio) => renderTemplate`<div> <img${addAttribute(testimonio.imagen, "src")}${addAttribute(testimonio.autor, "alt")}> <p>${testimonio.comentario}</p> <p>${testimonio.autor}</p> <p>${testimonio.rating}</p> </div>`)} </div> </main> ` })}`;
}, "D:/proyectos/Personal/juanoBoy/src/pages/index.astro", void 0);

const $$file = "D:/proyectos/Personal/juanoBoy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
