(function() {
  var vm;

  vm = new Vue({
    el: "#app",
    methods: {
      changeAndPlay: function(e) {
        var linkText, src;
        src = "http://www.bensound.org/bensound-music/bensound-";
        this.track.title = e.currentTarget.textContent;
        linkText = this.track.title.replace(/\s+/g, "").toLowerCase();
        return this.track.play = src + linkText + ".mp3";
      }
    },
    mounted: function() {
      return this.$watch("track.title", function() {
        return this.$refs.player.load();
      });
    },
    data: function() {
      return {
        track: {
          title: "",
          play: ""
        },
        musics: ["Cute", "Little Idea", "Acoustic Breeze", "Epic", "Buddy", "Happiness", "Funny Song", "Energy", "Memories", "Ukulele", "Instinct", "Jazzy Frenchy", "Sunny", "House", "Tenderness"]
      };
    }
  });

}).call(this);