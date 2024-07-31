const boda3 = new Proxy({"src":"/_astro/boda3.DfxL-Lk7.jpg","width":4160,"height":5200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/bodas/nvitaPlus/boda3.jpg";
							}
							
							return target[name];
						}
					});

export { boda3 as default };
