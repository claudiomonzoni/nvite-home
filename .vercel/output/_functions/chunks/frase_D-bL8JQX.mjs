const frase = new Proxy({"src":"/_astro/frase.Ciwmm0Aj.webp","width":920,"height":815,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/frase.webp";
							}
							
							return target[name];
						}
					});

export { frase as default };
