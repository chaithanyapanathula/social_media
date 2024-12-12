import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Global state initialization
    currentUser: null, // The currently logged-in user
    userList: [], // The list of all users
    posts: [], // The list of all posts in the feed
  },
  mutations: {
    // Define methods to modify the global state (synchronous)
    setCurrentUser(state, user) {
      // Set the currently logged-in user
      state.currentUser = user;
    },
    setUserList(state, users) {
      // Update the list of all users
      state.userList = users;
    },
    setPosts(state, posts) {
      // Update the list of all posts in the feed
      state.posts = posts;
    },
    updateUserFollowStatus(state, { userId, followed }) {
      // Update the follow/unfollow status of a user in the userList
      const targetUser = state.userList.find(user => user.id === userId);
      if (targetUser) {
        targetUser.followed = followed;
      }
    },
    addPost(state, post) {
      // Add a new post to the posts list
      state.posts.unshift(post); // Add the new post at the top of the feed
    },
  },
  actions: {
    // Define asynchronous operations
    fetchUserList({ commit }) {
      // Simulate an API call to fetch the user list
      const users = [
        { id: 1, name: 'UserA', followed: false },
        { id: 2, name: 'UserB', followed: true },
        { id: 3, name: 'UserC', followed: false },
      ];
      commit('setUserList', users);
    },
    fetchPosts({ commit }) {
      // Simulate an API call to fetch posts
      const posts = [
        { id: 1, username: 'UserB', content: 'First post!' },
        { id: 2, username: 'UserC', content: 'Vue is awesome!' },
      ];
      commit('setPosts', posts);
    },
    toggleFollowStatus({ commit }, { userId, followed }) {
      // Simulate an API call to update the follow status of a user
      commit('updateUserFollowStatus', { userId, followed });
    },
    createPost({ commit }, postContent) {
      // Simulate an API call to create a new post
      const newPost = {
        id: Date.now(), // Generate a unique ID for the post
        username: this.state.currentUser, // Set the current user's name as the post author
        content: postContent,
      };
      commit('addPost', newPost);
    },
  },
  getters: {
    // Define global computed properties
    followedUsers: state =>
      // Filter and return users that the current user is following
      state.userList.filter(user => user.followed),
    postCount: state =>
      // Return the total number of posts
      state.posts.length,
    isUserLoggedIn: state =>
      // Check if a user is logged in
      !!state.currentUser
    ,
  },
});
