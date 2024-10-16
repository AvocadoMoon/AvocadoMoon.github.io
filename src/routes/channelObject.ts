  /*
  Trying to create reactive elements using classes is to much of a pain.
  Svelte only seems to recognize top level abstraction elements, and does not bother with 
  reactivity of nested class objects
  */


import { SvelteComponent } from "svelte";
import { sfxController, musicController } from "../common/myLocalStorage";

const nRows = 4;
const nCols = 3;

let musicClipDir = "/Audio/Intro-Clips"

// Needs to be initalized with some form of variables or else compiler throws fit
export let channels: { coverImage: string; 
    gifImage: string, currentImage: string, 
    focused: boolean, hover: boolean, redirect: string, 
    musicClip: string,
    volumeLevel: number }[] = [
    {
        coverImage: '/Channel Covers/about me cover.webp',
        gifImage: '/Channel Covers/about me cover.webp',
        currentImage: '',
        focused: false,
        hover: false,
        redirect: '/about_me',
        musicClip: musicClipDir + '/About_Me_Intro.mp3',
        volumeLevel: .4
    },
    {
        coverImage: "/Channel Covers/Work_Exp.gif",
        gifImage: "/Channel Covers/Work_Exp.gif",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: '/work_experience',
        musicClip: musicClipDir + '/Work_Exp_Intro.mp3',
        volumeLevel: .5
    },
    {
        coverImage: "/Channel Covers/Zine_Cover.webp",
        gifImage: "Channel Covers/Zine_Cover.webp",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: "/zines",
        musicClip: musicClipDir + '/Zine_Intro.mp3',
        volumeLevel: .2
    },
    {
        coverImage: "/Channel Covers/personal_projects.jpg",
        gifImage: "Channel Covers/personal_projects.jpg",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: "/personal_projects",
        musicClip: musicClipDir + '/Personal_Projects_Intro.mp3',
        volumeLevel: .3
    },
    {
        coverImage: "/Channel Covers/open book.png",
        gifImage: "Channel Covers/open book.png",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: "/education",
        musicClip: musicClipDir + '/Education.mp3',
        volumeLevel: .3
    },
    {
        coverImage: "/Channel Covers/zekeanimsmall.gif",
        gifImage: "Channel Covers/zekeanimsmall.gif",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: "/web_ring",
        musicClip: musicClipDir + '/Web_Ring.mp3',
        volumeLevel: .3
    },
    {
        coverImage: "/Channel Covers/CTGrassRoots Cover.png",
        gifImage: "Channel Covers/CTGrassRoots Cover.png",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: "/ctgrassroots",
        musicClip: musicClipDir + "/It's Just Begun.mp3",
        volumeLevel: .3
    },
    // {
    //     coverImage: "/Channel Covers/music_player.png",
    //     gifImage: "Channel Covers/music_player.png",
    //     currentImage: '',
    //     focused: false,
    //     hover: false,
    //     redirect: "/music_player",
    //     musicClip: ""
    // },
    {
        coverImage: "/Channel Covers/cat-encryption.webp",
        gifImage: "Channel Covers/cat-encryption.webp",
        currentImage: '',
        focused: false,
        hover: false,
        redirect: "/cat_encryption",
        musicClip: musicClipDir + "/meow.mp3",
        volumeLevel: .3
    },
];
const channelPriorLength = channels.length

// Fill channels with default if still space
for (let index = 0; index < nRows * nCols; index++) {
    index < ((nRows * nCols) - channelPriorLength)
        ? channels.push({ coverImage: '/Channel Covers/no signal low con.gif', gifImage: '/Channel Covers/no signal low con.gif', currentImage: '', hover: false, focused: false, redirect: '', musicClip: '', volumeLevel:.5 })
        : null;
    channels[index].currentImage = channels[index].coverImage
};