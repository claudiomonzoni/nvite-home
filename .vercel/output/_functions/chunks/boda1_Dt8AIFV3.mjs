const boda1 = new Proxy({"src":"/_astro/boda1.CcIJ9arW.jpg","width":4160,"height":6240,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/quince/quincePlus/boda1.jpg";
							}
							
							return target[name];
						}
					});

export { boda1 as default };
