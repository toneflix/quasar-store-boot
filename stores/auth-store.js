import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    registration_form: {
    },
    reg_step: 1,
  }),
  getters: {
    registrationForm: (state) => state.registration_form,
    registrationStep: (state) => state.reg_step,
  },
  actions: {
    setRegStep (step) {
      this.reg_step = step
    },
    addRegistrationData (data) {
      this.registration_form = {
        ...this.registrationForm,
        ...data
      };
    },
  },
});
