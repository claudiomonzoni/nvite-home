const boda = new Proxy({"src":"/_astro/boda.BO1NGXL4.jpg","width":2942,"height":3677,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/bodas/nvitaPlus/boda.jpg";
							}
							
							return target[name];
						}
					});

export { boda as default };
