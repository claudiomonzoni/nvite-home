const cover = new Proxy({"src":"/_astro/cover.i1QS1Je5.webp","width":400,"height":815,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/cover.webp";
							}
							
							return target[name];
						}
					});

export { cover as default };
