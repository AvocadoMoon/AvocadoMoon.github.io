<script lang="ts">
  import Channels from './channels.svelte';
  import Menubar from './menubar.svelte';
  import { musicController, sfxController, hasVisited } from "../common/myLocalStorage";
  import { onMount } from 'svelte';
  import { clickedOff } from '../globals'

  onMount(async () => {
    document.addEventListener("click", (event) : void => {
      if (clickedOff("allowAudio", event)) {
        hasVisited.hasVisited();
      }
    });
  })

</script>

<div id="mainDiv">

  <Channels></Channels>
  
  <Menubar></Menubar>



  {#if $sfxController}
    <audio src="/Audio/hoverchannel.wav" id="channel-hover-audio"></audio>
    <script lang="ts">
      var audio = document.getElementById("channel-hover-audio");
      audio.volume = 0.1;
    </script>
    <audio src="/Audio/hover.wav" id="channel-click-audio"></audio>
  {/if}
  

  {#if !$hasVisited}
    <div id="allowAudio" class="menu-popup">
      <h2 class="menu-large-text">Allow Audio</h2>
      <p class="menu-med-text" style="margin-left: 2%; margin-right: 2%;">
        This website plays different background music and sound effects for each channel. 
        Do you want to allow this audio?
      </p>
      {#if $musicController}
        <u><p>Even if audio is turned on, autoplay needs to enabled in the browser.</p></u>
      {/if}
      <button
        id="music"
        class="music-option-buttons menu-med-text"
        on:click={(e) => {
          sfxController.toggle_sfx();
          musicController.toggle_music();
        }}
      >
        Turn Audio {$musicController ? "Off" : "On"}
      </button>
      
      <h2 class="menu-large-text">Resume</h2>
      <p style="margin-left: 2%; margin-right: 2%;" class="menu-med-text">For people who want to see everything I've done in the quickest manner possible.</p>
      <a href="https://docs.google.com/document/d/e/2PACX-1vQXG6xgS-gXDlE0v03SPC5k56cUHKYMERYuDSOsqoyo8cLsFWslB_Rmr0B_Het3GDX4m7YfRlge-lbo/pub">
      Link to Resume
      </a>
      <br>
      <br>
      <button class="music-option-buttons menu-med-text" on:click={(e) => {hasVisited.hasVisited()}}>Close</button>

    </div>
  {/if}

  {#if $musicController}
    <audio src="/Audio/bgm.wav" id="bgm" autoplay loop></audio>
    <script lang="ts">
      var audio = document.getElementById("bgm");
      audio.volume = 0.2;
    </script>
  {/if}

  

</div>

<style lang="scss">
  @use 'homeMenu';
  #mainDiv {
    height: 100vh;
    width: 100vw;
    // background: url('/Backgrounds/Waterfall.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: rgb(238, 236, 236);
    padding: 0%;
    position: fixed;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
    cursor: url("/Cursors/Wii-Curso-plain.png"), auto;
    // cursor: url("/Cursors/Wii-Curso-plain.png") pointer;

    // covers whole screen
    top:0px;
    left:0px;
  }
  
</style>
