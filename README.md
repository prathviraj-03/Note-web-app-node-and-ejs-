# SIMPLE NOTE BOOK NODE AND EJS

This is a small Node + Express + EJS notebook project.

## Goal
Add a video to the app and play it at 2x speed.

You asked: `ADD THIS VIDEO IN 2X SPEED` — below are ready-to-use snippets and quick steps to add a video and force 2× playback.

## Option A — HTML5 video (local or hosted file)
Place your video file under `public/videos/` (create that folder if missing), then add the following where you want the video to appear (for example in `views/read.ejs`):

```html
<video id="myVideo" controls src="/videos/your-video-file.mp4" width="640" height="360"></video>
<script>
  const v = document.getElementById('myVideo');
  // Set playback speed to 2x
  v.playbackRate = 2.0;
  // Optionally auto-play (note: browsers may block autoplay without user interaction)
  // v.play();
</script>
```

Notes:
- `playbackRate = 2.0` sets the speed to 2x.
- If the browser blocks autoplay, user must interact (click play) first.

## Option B — YouTube embed (use YouTube IFrame API)
To set playback rate on an embedded YouTube video, enable the JS API and use the YouTube iframe API:

```html
<!-- Example iframe: replace VIDEO_ID with the YouTube video id -->
<iframe id="ytplayer" width="640" height="360"
  src="https://www.youtube.com/embed/VIDEO_ID?enablejsapi=1"
  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<script src="https://www.youtube.com/iframe_api"></script>
<script>
  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
      events: {
        'onReady': (event) => {
          // Set playback rate to 2x when player is ready
          try {
            event.target.setPlaybackRate(2);
          } catch (err) {
            console.warn('Could not set playback rate:', err);
          }
        }
      }
    });
  }
</script>
```

Notes:
- Not all videos permit all playback rates; YouTube may clamp available rates.
- `enablejsapi=1` is required in the iframe src query string.

## Quick steps to add this to this project
1. Create `public/videos/` and copy your MP4 (or other supported format) there.
2. Edit `views/read.ejs` and add the HTML5 snippet above where you want the video.
3. Start your app (`node index.js`) and open the page that renders `read.ejs`.
4. Confirm the video plays at 2× speed (click play, then check behavior).

## Help/Next steps
- If you want, I can add a sample video tag into `views/read.ejs` for you and wire a sample placeholder file path. Tell me if you want me to modify `views/read.ejs` directly and whether you prefer HTML5 or YouTube.

---

Created by automated assistant to implement: "ADD THIS VIDEO IN 2X SPEED" in README form.
