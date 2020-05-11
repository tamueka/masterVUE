<template src="./Formulario.html">
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      biografia: {
        required,
        minLength: minLength(10)
      }
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        biografia: "",
        genero: ""
      }
    };
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid){
        return false;
      }
      alert("Validacion pasada");
    }
  }
};
</script>

<style scoped>
</style>