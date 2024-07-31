const boda5 = new Proxy({"src":"/_astro/boda5.DOsUZL7A.jpg","width":5248,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/quince/quincePlus/boda5.jpg";
							}
							
							return target[name];
						}
					});

export { boda5 as default };
