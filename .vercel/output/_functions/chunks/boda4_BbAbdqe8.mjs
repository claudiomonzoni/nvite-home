const boda4 = new Proxy({"src":"/_astro/boda4.CL99jjr2.jpg","width":4160,"height":5200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/quince/quincePlus/boda4.jpg";
							}
							
							return target[name];
						}
					});

export { boda4 as default };
