<script setup lang="ts">
import useValidate from "@vuelidate/core";
import { required, sameAs, minLength } from "@vuelidate/validators";
import { reactive } from "vue";

import InputText from "primevue/inputtext";
import Button from "primevue/button";

const formData = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const rules = {
  username: { required },
  email: { required },
  password: { required, minLength: minLength(6) },
  confirmPassword: { required, sameAs: sameAs(formData.password) },
};

const v$ = useValidate(rules, formData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  result ? alert("Form successfully submitted!") : alert("Form error!");
};
</script>

<template>
  <aside>
    <h1>Ingresa</h1>
    <form id="login" class="login-form" @submit.prevent="submitForm">
      <InputText
        v-model="formData.username"
        name="username"
        aria-label="Username"
        type="text"
        placeholder="Username"
      />
      <span v-for="error in v$.username.$errors" :key="error.$uid">{{
        error.$message
      }}</span>
      <InputText
        v-model="formData.email"
        name="email"
        aria-label="Email"
        type="email"
        placeholder="Email"
      />
      <InputText
        v-model="formData.password"
        name="password"
        aria-label="Password"
        type="password"
        placeholder="Password"
      />
      <InputText
        v-model="formData.password"
        name="confirm"
        aria-label="Confirm password"
        type="password"
        placeholder="Confirm password"
      />
    </form>
    <div>
      <Button type="submit" form="login">Login</Button>
    </div>
  </aside>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 700px;
}
</style>
