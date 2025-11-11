<template>
  <div class="flex grow flex-col justify-between p-5">
    <div class="p-5 flex flex-col gap-16 md:gap-12">
      <div class="pb-0 md:pb-0">
        <img
          class="h-20 w-auto"
          src="/images/logo/gitmesh.png"
          alt="gitmesh.dev logo"
        />
      </div>
      <div class="flex flex-col gap-4">
        <h4>
          Code with purpose, Integrate with confidence
        </h4>
        <p class="text-sm leading-6">
          GitMesh is an intelligent Git collaboration network that uses AI to guide contributors toward mergeable contributions while helping enterprises safely adopt and fund quality open source projects.
        </p>
      </div>
<div class="flex items-center justify-center gap-10">

  <!-- Alveoli (Maintaining Company) -->
  <a href="https://www.alveoli.app/" target="_blank" rel="noopener noreferrer">
    <div class="flex flex-col items-center">
      <img
        src="/images/auth/alveoli.png"
        alt="Alveoli Logo"
        class="h-10 md:h-12 hover:opacity-90 transition"
      />
      <span class="text-xs text-gray-500 mt-1 text-center">
        Maintaining Company
      </span>
    </div>
  </a>

  <!-- Divider Line -->
  <div class="h-12 w-px bg-gray-300"></div>

  <!-- LFDT Lab -->
  <a href="https://www.lfdecentralizedtrust.org/" target="_blank" rel="noopener noreferrer">
    <div class="flex flex-col items-center">
      <img
        src="/images/auth/lfdt.png"
        alt="LFDT Logo"
        class="h-10 md:h-12 hover:opacity-90 transition"
      />
      <span class="text-xs text-gray-500 mt-1 text-center">
        A Lab under LFDT
      </span>
    </div>
  </a>

</div>

    </div>
    <div>
    <div class="bg-brand-500 rounded-lg p-6">
      <p id="t-text" class="text-white text-sm font-medium pb-6">
        “Building and engaging community is my top
        priority as a founder of an open-source startup.
        Crowd.dev is basically the operating system for
        that.”
      </p>
      <div class="flex items-center">
        <div class="pr-4">
          <img
            id="t-img"
            src="/images/auth/ryan.png"
            class="h-11 w-11 rounded-full"
          />
        </div>
        <div>
          <h6 id="t-name" class="text-sm font-semibold text-white leading-5">
            Ryan Madhuwala
          </h6>
          <p id="t-role" class="text-white text-xs leading-5">
            Founder, Alveoli Lab
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAuthLayoutSide',

  mounted() {
    const testimonials = [
      {
        text: `“As a founder building in open-source, community comes first. This platform keeps everything aligned and transparent.”`,
        img: "/images/auth/ryan.png",
        name: "Ryan Madhuwala",
        role: "Founder, Alveoli Lab",
      },
      {
        text: `“The contributor experience became drastically more welcoming and structured after adopting this workflow.”`,
        img: "/images/auth/ronit.png",
        name: "Ronit Raj",
        role: "Co-Founder, Alveoli Lab",
      },
      {
        text: `“This keeps open-source projects scalable without losing the collaborative spirit at the core of open-source.”`,
        img: "/images/auth/parv.png",
        name: "Parv Mittal",
        role: "Open Source Lead, GitMesh",
      },
    ];

    let i = 0;
    setInterval(() => {
      i = (i + 1) % testimonials.length;

      document.getElementById("t-text").innerText = testimonials[i].text;
      document.getElementById("t-img").src = testimonials[i].img;
      document.getElementById("t-name").innerText = testimonials[i].name;
      document.getElementById("t-role").innerText = testimonials[i].role;
    }, 4000);
  }
};
</script>


<style scoped></style>
