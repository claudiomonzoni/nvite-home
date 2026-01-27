const cover = new Proxy({"src":"/_astro/cover.teVpgfPN.png","width":400,"height":815,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/cover.png";
							}
							
							return target[name];
						}
					});

export { cover as default };
