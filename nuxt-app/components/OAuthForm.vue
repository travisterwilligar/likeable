<template>
  <div class="oauth-form-container">
    <div class="form-card">
      <h2>OAuth Configuration</h2>
      <p>Configure your OAuth provider settings for the Dev Portal application.</p>

      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group">
          <KInput
            v-model="formData.issuerUrl"
            type="url"
            label="Issuer URL"
            help="Enter the URL of your DCR provider."
            placeholder="https://xyz.auth0.com/abcdefg"
            required
          />
        </div>

        <div class="form-group">
          <KInput
            v-model="formData.scopes"
            type="text"
            label="Scopes"
            help="Defines the permissions that Dev Portal applications will receive when registered with the DCR provider."
            placeholder="open_id"
            required
          />
        </div>

        <div class="form-actions">
          <KButton appearance="secondary" @click="handleCancel">
            Cancel
          </KButton>
          <KButton appearance="primary" type="submit">
            Save Configuration
          </KButton>
        </div>
      </form>
    </div>

    <div v-if="savedData" class="result-card">
      <h3>Saved Configuration</h3>
      <div class="result-data">
        <div class="result-item">
          <strong>Issuer URL:</strong>
          <code>{{ savedData.issuerUrl }}</code>
        </div>
        <div class="result-item">
          <strong>Scopes:</strong>
          <code>{{ savedData.scopes }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  issuerUrl: '',
  scopes: ''
})

const savedData = ref(null)

const handleSubmit = () => {
  if (!formData.value.issuerUrl || !formData.value.scopes) {
    alert('Please fill in all required fields')
    return
  }

  savedData.value = {
    issuerUrl: formData.value.issuerUrl,
    scopes: formData.value.scopes
  }
}

const handleCancel = () => {
  formData.value = {
    issuerUrl: '',
    scopes: ''
  }
  savedData.value = null
}
</script>

<style scoped>
.oauth-form-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 600px;
}

.form-card h2 {
  margin-top: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

.result-card {
  background: #f0f7ff;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
  max-width: 600px;
}

.result-card h3 {
  margin-top: 0;
  color: #0066cc;
}

.result-data {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.result-item {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.result-item strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.result-item code {
  background: #f5f5f5;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #666;
  display: block;
  word-break: break-all;
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column-reverse;
  }
}
</style>