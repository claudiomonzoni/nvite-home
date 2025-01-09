import { onAuthStateChanged } from "firebase/auth";
import { NvitaAuth } from "./config";

export function monitorAuthState(callback) {
   
  onAuthStateChanged(NvitaAuth, (user) => {
    if (user) {
      // Usuario está autenticado
      callback({ authenticated: true, user });
    } else {
      // Sesión cerrada
      callback({ authenticated: false });
    }
  });
}
