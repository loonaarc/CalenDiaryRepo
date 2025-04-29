// src/components/UserForm.vue
<template>
  <v-form @submit.prevent="submitForm" ref="formRef" v-model="valid">
    <v-text-field
      v-model="form.name"
      label="Name"
      :rules="[rules.required]"
      required
    />

    <v-text-field
      v-model="form.email"
      label="Email"
      :rules="[rules.required, rules.email]"
      required
    />

    <v-text-field
      v-model="form.username"
      label="Username"
      :rules="[rules.required]"
      required
    />

    <v-btn type="submit" color="success" :disabled="!valid">
      Create User
    </v-btn>
  </v-form>
</template>

<script setup>
import api from '@/services/api'
import { ref } from 'vue'

// Emit the event to parent
const emit = defineEmits(['user-created'])

const form = ref({
  name: '',
  email: '',
  username: ''
})

const valid = ref(false)
const formRef = ref(null)

const rules = {
  required: v => !!v || 'Required.',
  email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
}

const submitForm = async () => {
  if (!formRef.value?.validate()) return

  try {
    await api.post('/users', form.value)
    emit('user-created') // Let the parent reload the table
    form.value = { name: '', email: '', username: '' } // Reset form
  } catch (error) {
    console.error('Error creating user:', error)
  }
}
</script>

<style scoped>
.v-form {
  margin-bottom: 24px;
}
</style>

