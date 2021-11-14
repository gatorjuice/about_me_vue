<template>
  <form
    @submit.prevent="
      $store.dispatch('login', {
        username,
        password,
      })
    "
  >
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email address</label>
      <input
        v-model="username"
        type="email"
        class="form-control"
        id="inputEmail"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        Use the provided demo user for access.
      </div>
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="inputPassword"
        aria-describedby="passwordHelp"
      />
      <div id="passwordHelp" class="form-text">
        Passwords are stored encrypted.
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      username: "demo_user@test.com",
      password: "p@ssw@rd",
    };
  },
};
</script>
<style scoped></style>
