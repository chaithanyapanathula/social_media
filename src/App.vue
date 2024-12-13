<template>
  <div id="app">
    <!-- Header Section -->
    <HeaderComponent />

    <!-- Content Section -->
    <div class="content">
      <!-- Sidebar (Left) -->
      <div class="sidebar">
        <SidebarComponent />
      </div>

      <!-- Main Content -->
      <div class="main-content"> 
        <MainContentComponent />
         <!-- <LoginPage></LoginPage> -->
      </div>

      <!-- Right Sidebar -->
      <div class="right-sidebar">
        <RightSidebarComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import MainContentComponent from './components/MainContentComponent.vue';
import RightSidebarComponent from './components/RightSidebarComponent.vue';
import LoginPage from './views/LoginPage.vue';



export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    RightSidebarComponent,
    LoginPage
  },
};
</script>

<style>
/* #app {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
} */

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 80px;
  /* Adjust to give space for the header */
  width: 100%;
}

/* Sidebar (Left) */
.sidebar {
  width: 15%;
  /* Adjust as needed */
  max-width: 250px;
  min-width: 150px;
  background-color: #ffffff;
  border-right: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
}

/* Main Content (Centered) */
.main-content {
  flex: 1;
  /* Allow to grow */
  margin: 0 20px;
  /* Space between sidebars */
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

/* Right Sidebar */
.right-sidebar {
  width: 15%;
  /* Adjust as needed */
  max-width: 250px;
  min-width: 150px;
  background-color: #ffffff;
  border-left: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    /* Stack components vertically */
    align-items: center;
  }

  .sidebar,
  .right-sidebar {
    width: 100%;
    max-width: none;
    border: none;
  }

  .main-content {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
