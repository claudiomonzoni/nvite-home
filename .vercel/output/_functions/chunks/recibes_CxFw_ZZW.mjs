const recibes = new Proxy({"src":"/_astro/recibes.DcJHCabD.webp","width":1047,"height":1151,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/recibes.webp";
							}
							
							return target[name];
						}
					});

export { recibes as default };
