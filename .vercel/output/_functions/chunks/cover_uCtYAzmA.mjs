const cover = new Proxy({"src":"/_astro/cover.t1foSSzc.webp","width":1440,"height":770,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/bodas/nvitaPlus/cover.webp";
							}
							
							return target[name];
						}
					});

export { cover as default };
