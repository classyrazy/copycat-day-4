<template>
    <section class=" bg-[#fafafa] flex main-container overflow-visible">
        <div class="first-sec flex items-center pl-52">
            <img src="../assets/images/hero_img.jpeg" alt="Hero Image" class="max-w-[800px]">
            <div class="min-w-[50vw] ml-40 fade-in fade-in-trigger c-text-trigger">
                <h1 class="text-8xl w-full font-bold leading-[0.9] c-text">
                    Meet the <br />
                    new iPad Pro.
                </h1>
                <div class="links flex text-main-blue mt-4 gap-10 text-xl">
                    <a href="#" class="flex items-center">Watch the film <span class=""> <arrow-right-icon
                                class="w-8 h-8" /> </span></a>
                    <a href="#" class="flex items-center gap-2">Watch the keynote <span class="material-symbols-outlined">
                            <play-circle /> </span></a>
                </div>
            </div>
            <div class="min-w-[70vw] flex relative w-full fade-in-trigger">
                <video autoplay data-speed="0.9" muted playsinline
                    src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/keyboard/medium.mp4"></video>
                <div class="absolute top-[200px] left-[400px]">
                    <p class="text-4xl max-w-[700px] text-grey-txt font-medium">
                        <span class="fade-in text-black">It’s all new, all screen, and all powerful.</span>

                        Completely redesigned and packed with our most advanced technology, it will make you rethink what
                        iPad is capable of.
                    </p>
                    <p class=" small-tag">And what a computer is capable of.</p>
                </div>
            </div>
        </div>
        <div class="second-sec ml-[120%] flex items-center">
            <img src="https://www.apple.com/v/ipad-pro/s/images/overview/two_sizes_2__eq5zmevfgfqu_medium_2x.jpg"
                alt="Ipad Design Image" class="max-w-[600px] fade-in fade-in-trigger" />
            <img src="https://www.apple.com/v/ipad-pro/s/images/overview/two_sizes_1__y8zl65wgpfmy_medium_2x.png"
                alt="Ipad design Image" class="max-w-[700px]" />
            <p class="text-4xl max-w-[700px] text-grey-txt font-medium min-w-[40vw] mx-20 fade-in-trigger">
                The new <span class="fade-in text-black">all-screen design</span> means <br />
                iPad Pro is a magical piece of glass that does everything you need, any way you hold it.1
            </p>
            <video data-speed=".5" muted playsinline autoplay
                src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/ipad/medium.mp4"></video>
            <p class="text-4xl max-w-[700px] text-grey-txt font-medium min-w-[40vw] mx-32 fade-in-trigger">
                With new, <span class="fade-in text-black">intuitive gestures</span>, getting <br />
                around is simple
            </p>
        </div>
        <div class="third-sec ml-[165rem] flex items-center gap-40 relative pad-trigger">
            <div>
                <div class="relative overflow-hidden z-[2] pad">
                    <img src="https://www.apple.com/v/ipad-pro/s/images/overview/horizontal_ipad_hw__gmuhqxe15jyy_medium_2x.png"
                        alt="Plain Ipad Image" class="max-w-[900px] relative z-[2]" />
                    <div
                        class="absolute top-[0px]  max-w-[840px] h-full w-auto right-0 left-0 mx-auto rounded-3xl overflow-hidden z-[1]">
                        <video autoplay muted playsinline
                            src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/swipe-up-screen/medium.mp4"
                            width="100%" height="100%"
                            class="w-auto h-full bg-blend-screen rounded-3xl overflow-hidden"></video>
                    </div>
                </div>
                <img 
                    src="https://www.apple.com/v/ipad-pro/s/images/overview/swipe_startframe__ekeztlf5fpaq_large.png"
                    alt="Hand pointing to video"
                    class="absolute bottom-[-150px] z-[3] right-0 left-[-400px] mx-auto max-w-[400px] hand" />
            </div>
            <div class="text">
                <p class="text-4xl max-w-[700px] text-grey-txt font-medium min-w-[50vw] mx-20 fade-in-trigger">
                    The new <span class="fade-in text-black">Liquid Retina display</span> goes from edge to edge. True-to-life color and ProMotion
                    technology make everything look gorgeous and feel responsive.
                </p>
                <p class="small-tag fade-in fade-in-trigger">You’ve got to see it — and touch it — to believe it.</p>
            </div>
        </div>
        <div class="fourth-sec ml-[50rem] flex items-center gap-40">
            <div class="flex gap-x-40 ">
                <div class="relative overflow-hidden z-[2] bottom-[-200px] fade-up fade-up-trigger">
                    <img src="https://www.apple.com/v/ipad-pro/s/images/overview/horizontal_ipad_hw__gmuhqxe15jyy_medium_2x.png"
                        alt="Plain Ipad Image" class="max-w-[800px] relative z-[2]" />
                    <div
                        class="absolute top-[10px]  max-w-[750px] h-full w-auto right-0 left-0 mx-auto rounded-3xl overflow-hidden z-[1]">
                        <img src="https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_1__csuokryyjb42_medium_2x.jpg"
                            alt="" class="w-full h-full max-h-[590px]" />
                    </div>
                </div>
                <div class="relative overflow-hidden z-[2] top-[-200px] fade-down fade-down-trigger">
                    <img src="https://www.apple.com/v/ipad-pro/s/images/overview/horizontal_ipad_hw__gmuhqxe15jyy_medium_2x.png"
                        alt="Plain Ipad Image" class="max-w-[800px] relative z-[2]" />
                    <div
                        class="absolute top-[10px]  max-w-[750px] h-full w-auto right-0 left-0 mx-auto rounded-3xl overflow-hidden z-[1]">
                        <img src="https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_2__dg5i2euzd3ee_medium_2x.jpg"
                            alt="" class="w-full h-full max-h-[590px]" />
                    </div>
                </div>
            </div>
            <p class="text-4xl max-w-[700px] text-grey-txt font-medium min-w-[50vw] mx-20 fade-in-trigger"><span class="fade-in text-black">Face ID</span> comes to iPad. It’s engineered for secure unlocking and works seamlessly
                whether you hold it in portrait or landscape.</p>
            <img src="https://www.apple.com/v/ipad-pro/s/images/overview/face_id__8ez3e4w0imay_medium_2x.jpg"
                alt="Ipad Lock screen" class="max-w-[700px] relative bottom-[-200px] fade-up fade-up-trigger" />
            <p class="text-4xl max-w-[700px] text-grey-txt font-medium min-w-[50vw] fade-in-trigger">
                Use Face ID to unlock your iPad Pro, <br />
                log in to apps, and pay with a glance.
            </p>
        </div>
        <div class="last-sec ml-[200rem] flex items-center gap-40">
            <div class="flex relative items-center">
                <div class="relative overflow-hidden z-[2] min-w-[900px] h-full">
                    <img src="https://www.apple.com/v/ipad-pro/s/images/overview/horizontal_ipad_hw__gmuhqxe15jyy_medium_2x.png"
                        alt="Plain Ipad Image" class="max-w-[1000px] w-full h-full relative z-[2]" />
                    <div
                        class="absolute top-[2px]  max-w-[840px]  h-full w-auto right-0 left-0 mx-auto rounded-3xl overflow-hidden z-[1]">
                        <img src="https://www.apple.com/v/ipad-pro/s/images/overview/usb_c_screen__ems2xs6v94wi_medium_2x.jpg"
                            alt="" class="w-full h-full object-contain" />
                    </div>
                </div>
                <img src="https://www.apple.com/v/ipad-pro/s/images/overview/usb_c__cwd81vbzageq_medium_2x.jpg" alt=""
                    class=" w-full relative h-full top-[-12rem] z-[2]" />
                <p data-speed=".2"
                    class="text-grey-txt absolute bottom-[25%] z-[5] right-[-10rem] max-w-[600px] text-4xl font-medium mx-20 fade-in-trigger">
                    <span class="fade-in text-black">USB-C</span> gives you a high-performance connection to accessories
                    like an <br />external display or camera</p>
            </div>
        </div>
        <div class="flex items-center ml-[65rem] min-w-[90vw] gap-40 h-full">
            <p class="text-4xl min-w-[50vw] font-medium fade-in-trigger text-grey-txt">
                iPad Pro has <span class="fade-in text-black">two great cameras</span> equipped with Smart HDR. A 12MP camera for stunning photos, 4K
                video, document scanning, and AR experiences. And a TrueDepth camera perfect
                for Portrait selfies, FaceTime, Animoji, and Memoji.
            </p>
            <img src="https://www.apple.com/v/ipad-pro/s/images/overview/two_cameras__epctxn42bjwy_medium_2x.jpg"
                alt="Girl Image on Ipad" class="max-w-[800px] my-auto mt-20 ml-20 fade-up fade-up-trigger" />
            <div class="thin min-w-[100vw] relative">
                <p class="absolute bottom-[1rem] text-4xl max-w-[800px] z-[3] font-medium fade-in-trigger text-grey-txt">At just over a pound, it’s more portable than ever. Connect on the go with fast Wi-Fi and Gigabit-class
                    LTE</p>
                <img
                    src="https://www.apple.com/v/ipad-pro/s/images/overview/portable__gkha84qrj4ii_medium_2x.jpg" alt=""
                    class="w-full relative bottom-[-300px] z-[2] h-full object-contain min-h-[130%]" />
            </div>
            <!-- <p>That’s a look at the new iPad Pro. It’s the biggest change to</p> -->
        </div>
    </section>
</template>

<script setup lang="ts">
import PlayCircle from './icons/play-circle.vue'
import ArrowRightIcon from './icons/arrow-right-icon.vue'

</script>

<style scoped>
.main-container>div {
    height: calc(100vh - 51px);
    min-height: calc(100vh - 51px);
    max-height: calc(100vh - 51px);
    min-width: 100vw;
}

/* .video-rounded{
    border-radius: 3rem;
} */
.video-rounded::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
    border-radius: 1.5rem;
}</style>