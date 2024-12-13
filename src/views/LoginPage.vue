<template>
    <div class="login-container">
      <h1>Login</h1>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username && this.password) {
          alert(`Username: ${this.username}\nPassword: ${this.password}`);
        } else {
          alert('Please fill in both fields.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
  }
  .login-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  .login-container h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  .login-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .login-container button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .login-container button:hover {
    background-color: #0056b3;
  }
  </style>
  