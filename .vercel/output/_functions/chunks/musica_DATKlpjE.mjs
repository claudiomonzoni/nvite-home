const musica = new Proxy({"src":"/_astro/musica.B9R-L3MR.webp","width":920,"height":815,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/musica.webp";
							}
							
							return target[name];
						}
					});

export { musica as default };
