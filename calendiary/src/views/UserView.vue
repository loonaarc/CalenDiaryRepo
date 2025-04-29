<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Header with add button -->
        <v-row class="justify-space-between align-center">
          <v-col>
            <h1>Users</h1>
          </v-col>
          <v-col cols="auto">
            <v-btn color="primary" @click="showDialog = true">Add User</v-btn>
          </v-col>
        </v-row>

        <!-- Table with users -->
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
        ></v-data-table>

        <!-- Dialog with user form -->
        <v-dialog v-model="showDialog" max-width="500">
          <v-card>
            <v-card-title class="text-h6">Add User</v-card-title>
            <v-card-text>
              <UserForm @user-created="onUserCreated" />
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import UserForm from '@/components/UserForm.vue'
import userService from '@/services/userService'
import { onMounted, ref } from 'vue'

const users = ref([])
const showDialog = ref(false)

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Username', value: 'username' },
  { text: 'Active', value: 'active' },
  { text: 'Created At', value: 'createdAt' },
]

// Load user list
const loadUsers = async () => {
  const response = await userService.getAll()
  users.value = response.data
}

// Called when user is successfully created
const onUserCreated = () => {
  loadUsers()
  showDialog.value = false // close the dialog
}

onMounted(() => {
  loadUsers()
})
</script>
