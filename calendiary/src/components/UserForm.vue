<template>
  <v-form @submit.prevent="submitUser" v-model="formValid" ref="formRef">
    <v-alert
      v-if="errorMessage"
      type="error"
      dismissible
      class="mb-4"
    >
      {{ errorMessage }}
    </v-alert>

    <v-text-field
      v-model="formData.name"
      label="Name"
      :rules="[rules.required]"
      required
    />
    <v-text-field
      v-model="formData.email"
      label="Email"
      :rules="[rules.required, rules.email]"
      required
    />
    <v-text-field
      v-model="formData.username"
      label="Username"
      :rules="[rules.required]"
      required
    />
    <v-btn type="submit" color="success" :disabled="!formValid">Create</v-btn>
  </v-form>
</template>

<script setup>
import userService from '@/services/userService'
import { ref } from 'vue'

// Emits event to parent component to refresh and close dialog
const emit = defineEmits(['user-created'])

// Flag for Vuetify form validation
const formValid = ref(false)

// Reference to the form element
const formRef = ref(null)

// Reactive user input fields
const formData = ref({
  name: '',
  email: '',
  username: ''
})

// Error message to show in UI
const errorMessage = ref('')

// Validation rules
const rules = {
  required: v => !!v || 'Required.',
  email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
}

// Submits the form and creates the user
const submitUser = async () => {
  if (!formRef.value?.validate()) return

  try {
    // Try to send data
    await userService.create({ ...formData.value })
    // If success, clear error and reset form
    errorMessage.value = ''
    emit('user-created')
    formData.value = { name: '', email: '', username: '' }
  } catch (error) {
    console.error('User creation failed:', error)
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage.value = error.response.data.message
    } else {
      errorMessage.value = 'An unexpected error occurred.'
    }
  }
}
</script>

<style scoped>
.v-form {
  margin-bottom: 24px;
}
</style>
