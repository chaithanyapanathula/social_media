<template>
    <header class="border">
        <div class="border1">
            <img :src="logo" width="33px" />
            <input type="search" placeholder="Search..." class="search-input" />
        </div>
        <div class="border2">
            <img src="home.jpg" width="33px" height="33px" />
            <img src="watch.png" width="33px" height="33px" />
            <img src="groupnewsfeed.JPG" width="33px" height="33px" />
            <img src="newsfeed.JPG" width="33px" height="33px" />
        </div>
        <div class="border3">
            <img src="team-1.jpg" class="profile" />
            <span>Christopher</span>
        </div>
        <div class="border4">
            <img src="black_plus.jpg" width="33px" height="33px" />
            <img src="messangerGray.png" width="33px" height="33px" />
            <img src="bell.webp" width="33px" height="33px" />
        </div>
    </header>
</template>
<script>
import logo from '@/assets/images/apple-touch-icon.jpg';  // Importing the image from src/assets

export default {
  data() {
    return {
      logo  // This will store the image path
    };
  }
};

</script>

<style scoped>
.border {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
}

.border1 {
    flex: 1.2;
    display: flex;
    justify-content: space-evenly;
}

.border2 {
    flex: 4;
    display: flex;
    justify-content: space-evenly;
}

.border3 {
    flex: 1;
    display: flex;
    align-items: center;
}

.border4 {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
}

.search-input {
    border-radius: 15px;
    /* background-image: url(icons8-search-36.png); */
    background-repeat: no-repeat;
    background-position: 5px 5px;
    text-indent: 25px;
    font-size: 15px;
    background-color: whitesmoke;
    border: none;
}

.profile {
    border-radius: 100%;
    width: 42px;
    height: 42px;
}
</style>