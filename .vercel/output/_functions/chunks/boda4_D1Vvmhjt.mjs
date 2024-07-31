const boda4 = new Proxy({"src":"/_astro/boda4.CafUAyfH.jpg","width":5248,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/bodas/nvitaPlus/boda4.jpg";
							}
							
							return target[name];
						}
					});

export { boda4 as default };
