<template>
  <div class="container m-6">
    <div>
      <h1 class="title is-3 has-text-centered">
        Nuxt3 Server & Faker Users API
      </h1>
    </div>
    <div class="section has-text-centered">
      <h1 class="title is-4">Fake Users</h1>
      <input
        type="text"
        class="input my-3"
        placeholder="Enter number of users"
        @change="handleChange"
        v-model="take"
      />

      <div class="users is-flex is-justify-content-center is-flex-wrap-wrap	">
        <div class="card" v-for="user in users" :key="user.id">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="user.avatar" :alt="user.name" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="user.avatar" :alt="user.name" width="96" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ user.name }}</p>
                <p class="subtitle is-7">{{ user.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section buttons is-centered ">
          <a :href="`/api/fake-users?take=${take}`" class="button is-link">Nuxt3 Server API Endpoint</a>
          <a :href="`/fake-users?take=${take}`" class="button is-warning">Nuxt3 Server Route</a>
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

<style scoped>
.card {
  min-width: 200px;
  width: 270px;
}

.users {
    gap: 1rem;
}

.input {
    max-width: 100px;
    text-align: center;
}
</style>
