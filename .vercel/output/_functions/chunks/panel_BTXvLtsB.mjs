const panel = new Proxy({"src":"/_astro/panel.DH_8kvo5.png","width":1047,"height":815,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/assets/home/gale/panel.png";
							}
							
							return target[name];
						}
					});

export { panel as default };
