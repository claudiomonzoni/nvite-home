const boda = new Proxy({"src":"/_astro/boda.02iMvaNc.jpg","width":2942,"height":3677,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/quince/quincePlus/boda.jpg";
							}
							
							return target[name];
						}
					});

export { boda as default };
