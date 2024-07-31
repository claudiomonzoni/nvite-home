const boda5 = new Proxy({"src":"/_astro/boda5.Bi5qIL0f.jpg","width":5760,"height":3840,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/bodas/nvitaPlus/boda5.jpg";
							}
							
							return target[name];
						}
					});

export { boda5 as default };
