<template>
    <div class="left">
        <div class="left1"><img src="team-1.jpg" class="profile" /> Christopher</div>
        <div class="left1"><img src="covid.png" class="profile" /> Covid-19 Info</div>
        <div class="left1"><img src="page.png" class="profile" /> Pages</div>
        <div class="left1"><img src="friends.png" class="profile" /> Friends</div>
        <div class="left1"><img src="groups.png" class="profile" /> Groups</div>
        <div class="left1"><img src="watch.png" class="profile" /> Watch</div>
        <div class="left1"><img src="events.png" class="profile" /> Events</div>
        <div class="left1"><img src="memories.png" class="profile" /> Memories</div>
        <div class="left1"><img src="saved.JPG" class="profile" /> Saved</div>
    </div>
</template>

<style scoped>
.left {
    width: 15%;
    padding: 10px;
    float: left;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 40px;
}

.left1 {
    text-transform: capitalize;
    display: flex;
    font-size: 15px;
    align-items: center;
}

.profile {
    border-radius: 100%;
    width: 42px;
    height: 42px;
}
</style>
