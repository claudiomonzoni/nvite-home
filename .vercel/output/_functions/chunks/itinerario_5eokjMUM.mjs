const itinerario = new Proxy({"src":"/_astro/itinerario.CsmpuEcp.webp","width":400,"height":815,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/itinerario.webp";
							}
							
							return target[name];
						}
					});

export { itinerario as default };
