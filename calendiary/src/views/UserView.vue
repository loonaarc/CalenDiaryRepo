
<!-- src/views/UserView.vue -->
<template>
    <v-app>
      <v-main>
        <v-container>
          <UserForm @user-created="loadUsers" />

          <v-data-table
            :headers="headers"
            :items="users"
            class="elevation-1"
          />
        </v-container>
      </v-main>
    </v-app>
  </template>

  <script setup>
  import UserForm from '@/components/UserForm.vue'
import api from '@/services/api'
import { onMounted, ref } from 'vue'

  const users = ref([])

  const headers = [
    { text: 'ID', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Username', value: 'username' },
    { text: 'Active', value: 'active' },
    { text: 'Created At', value: 'createdAt' }
  ]

  const loadUsers = async () => {
    try {
      const response = await api.get('/users')
      users.value = response.data
    } catch (error) {
      console.error('Error loading users:', error)
    }
  }

  onMounted(() => {
    loadUsers()
  })
</script>
