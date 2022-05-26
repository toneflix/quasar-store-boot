import { useAuthStore } from "stores/auth-store";

export default {
  auth: useAuthStore(),
  cart: useAuthStore()
}
