<template>
    <div class="main">
        <div class="article1">
            <div class="row2">
                <div><img class="profile" src="team-1.jpg" /></div>
                <div class="inputMain">
                    <textarea v-model="text" maxlength="250" placeholder="Enter text (max 250 characters)" rows="4"
                        cols="50"></textarea>
                        <div class="char-count">{{ charCount }} / 250</div>

                </div>
                <div class="up">
                    <p class="up1"><img id="up1" src="live-video.jpg" /> Live Video</p>
                    <p class="up1"><img id="up1" src="Photo.png" /> Photo/Video</p>
                    <p class="up1"><img id="up1" src="Smiley.jpg" /> Feeling/Activity</p>
                </div>
            </div>
            <!-- More content can go here -->
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',  // To bind the textarea value
    };
  },
  computed: {
    charCount() {
      return this.text.length;  // Computed property for character count
    },
  },
};
</script>

<style scoped>
.main {
    padding: 10px;
    float: left;
    font-family: Arial, Helvetica, sans-serif;
    z-index: 1;
}

.article1 {
    background-color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 25px;
    box-shadow: 0 1px 5px rgb(194, 193, 193);
}

.row2 {
    display: flex;
    align-items: center;
    margin-right: 5px;
    border-bottom: 1px solid rgb(231, 229, 229);
}


.up {
    display: flex;
    width: 460px;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
}

.up1 {
    margin-right: 15px;
    padding: 5px;
    background-color: whitesmoke;
    cursor: pointer;
}

.profile {
    border-radius: 100%;
    width: 42px;
    height: 42px;
}
</style>