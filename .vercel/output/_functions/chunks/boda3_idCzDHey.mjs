const boda3 = new Proxy({"src":"/_astro/boda3.DN-U6HfH.jpg","width":5760,"height":3840,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/quince/quincePlus/boda3.jpg";
							}
							
							return target[name];
						}
					});

export { boda3 as default };
