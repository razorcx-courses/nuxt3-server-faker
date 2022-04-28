<template>
  <div class="container m-6">
    <div>
      <h1 class="title is-3 has-text-centered">Nuxt3 Server & Faker Users API</h1>
    </div>
    <div class="section">
      <h1 class="title is-4 has-text-centered">Fake Users</h1>
      <input
        type="text"
        class="input my-3"
        placeholder="Enter number of users"
        @change="handleChange"
        v-model="take"
      />
      <div class="box" v-for="user in users" :key="user.id">
        <pre>{{ user }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = ref([]);
const take = ref(3);

const handleChange = () => {
  getUsers(take.value);
};

const getUsers = async (qty) => {
//   const data = await $fetch(`/fake-users?take=${qty}`);
  const data = await $fetch(`/api/fake-users?take=${qty}`);
  users.value = data.users;
};

onMounted(async () => {
  getUsers(take.value);
});
</script>

<style></style>
