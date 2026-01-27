const mapa = new Proxy({"src":"/_astro/mapa.whloflWm.webp","width":400,"height":815,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/mapa.webp";
							}
							
							return target[name];
						}
					});

export { mapa as default };
