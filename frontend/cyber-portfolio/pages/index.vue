<template>
  <div
    class="min-h-screen bg-cyber-black text-cyber-green font-mono flex flex-col items-center justify-center relative overflow-hidden"
  >
    <!-- Grid Background -->
    <div
      class="absolute inset-0 cyber-grid opacity-20 z-0 pointer-events-none"
    ></div>

    <main
      class="z-10 w-full max-w-4xl p-8 border border-cyber-green/30 bg-black/60 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.15)] rounded-sm mt-10 md:mt-0"
    >
      <header class="mb-10 border-b border-cyber-green/30 pb-4">
        <h1
          class="text-4xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-cyan glitch"
          data-text="SUKHUM@RUDEEMAETAKUL"
        >
          SUKHUM@RUDEEMAETAKUL
        </h1>
        <p class="mt-2 text-cyber-cyan text-sm md:text-base">
          ~ /home/portfolio/init.sh --run
        </p>
      </header>

      <!-- profile -->
      <section class="mb-8">
        <h2 class="text-xl font-bold mb-4 text-white">&gt; PROFILE()</h2>
        <img
          src="../assets/image/me (2).jpg"
          alt="profile"
          class="rounded-full w-100 h-100 mx-auto"
        />
      </section>

      <!-- contacts -->
      <section class="mb-8">
        <h2 class="text-xl font-bold mb-4 text-white">&gt; CONTACTS()</h2>
        <div class="bg-black/80 p-6 border-l-2 border-cyber-cyan rounded-r-md">
          <p class="opacity-80 leading-relaxed mb-6">
            Welcome to the mainframe. I am a
            <span class="text-cyber-green font-bold"
              >Cybersecurity Analyst & Full-Stack Developer</span
            >. Specializing in secure web applications, penetration testing, and
            scalable architecture.
          </p>

          <div class="flex flex-wrap gap-4 font-bold text-sm mb-8">
            <span
              class="px-3 py-1 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green"
              >Vue3 & Nuxt</span
            >
            <span
              class="px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan"
              >Node.js</span
            >
            <span
              class="px-3 py-1 bg-red-500/10 border border-red-500/50 text-red-500"
              >Security</span
            >
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-cyber-green/20 pt-8"
          >
            <!-- GitHub -->
            <a
              href="https://github.com/ksrddd"
              target="_blank"
              class="flex items-center gap-3 group text-cyber-cyan hover:text-white transition-all"
            >
              <div
                class="p-2 bg-cyber-cyan/5 border border-cyber-cyan/30 group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan transition-all rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <span
                class="font-bold tracking-widest text-xs uppercase group-hover:translate-x-1 transition-transform"
                >GitHub</span
              >
            </a>

            <!-- Email -->
            <a
              href="mailto:your-email@example.com"
              class="flex items-center gap-3 group text-cyber-cyan hover:text-white transition-all"
            >
              <div
                class="p-2 bg-cyber-cyan/5 border border-cyber-cyan/30 group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan transition-all rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span
                class="font-bold tracking-widest text-xs uppercase group-hover:translate-x-1 transition-transform"
                >Email</span
              >
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/sukhum-rudeemaetakul-b81a3b27b/"
              target="_blank"
              class="flex items-center gap-3 group text-cyber-cyan hover:text-white transition-all"
            >
              <div
                class="p-2 bg-cyber-cyan/5 border border-cyber-cyan/30 group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan transition-all rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span
                class="font-bold tracking-widest text-xs uppercase group-hover:translate-x-1 transition-transform"
                >LinkedIn</span
              >
            </a>

            <!-- Facebook -->
            <a
              href="https://www.facebook.com/sukhumqazwsx11"
              target="_blank"
              class="flex items-center gap-3 group text-cyber-cyan hover:text-white transition-all"
            >
              <div
                class="p-2 bg-cyber-cyan/5 border border-cyber-cyan/30 group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan transition-all rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  />
                </svg>
              </div>
              <span
                class="font-bold tracking-widest text-xs uppercase group-hover:translate-x-1 transition-transform"
                >Facebook</span
              >
            </a>

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/s_khumm"
              target="_blank"
              class="flex items-center gap-3 group text-cyber-cyan hover:text-white transition-all"
            >
              <div
                class="p-2 bg-cyber-cyan/5 border border-cyber-cyan/30 group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan transition-all rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <span
                class="font-bold tracking-widest text-xs uppercase group-hover:translate-x-1 transition-transform"
                >Instagram</span
              >
            </a>

            <!-- CV -->
            <a
              href="#"
              target="_blank"
              class="flex items-center gap-3 group text-cyber-cyan hover:text-white transition-all"
            >
              <div
                class="p-2 bg-cyber-green/5 border border-cyber-green/30 group-hover:bg-cyber-green/20 group-hover:border-cyber-green transition-all rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-text"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <span
                class="font-bold tracking-widest text-xs uppercase group-hover:translate-x-1 transition-transform text-cyber-green"
                >Download CV</span
              >
            </a>
          </div>
        </div>
      </section>

      <!-- projects -->
      <section>
        <h2 class="text-xl font-bold mb-4 text-white">&gt; FETCH_PROJECTS()</h2>

        <div v-if="pending" class="animate-pulse flex items-center gap-2">
          <span class="w-3 h-3 bg-cyber-green rounded-full"></span>
          <span>Establishing secure connection...</span>
        </div>

        <div
          v-else-if="error"
          class="text-red-500 border border-red-500/50 bg-red-500/10 p-4"
        >
          [!] CRITICAL ERROR: Failed to connect to backend server.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- เปลี่ยนจาก div เป็น NuxtLink เพื่อให้กดคลิกไปหน้ารายละเอียดได้ -->
          <NuxtLink
            v-for="project in projects?.data"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="group block relative bg-black/50 border border-cyber-green/30 hover:border-cyber-green p-5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] cursor-pointer"
          >
            <div
              class="absolute top-0 right-0 w-2 h-2 bg-cyber-green rounded-bl-sm"
            ></div>
            <h3 class="text-lg font-bold text-cyber-cyan mb-2">
              {{ project.name }}
            </h3>
            <p class="text-sm opacity-70 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 text-xs">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-white/60"
                >[{{ tech }}]</span
              >
            </div>
          </NuxtLink>
        </div>
      </section>

      <footer
        class="mt-12 text-center text-xs opacity-50 border-t border-cyber-green/20 pt-4"
      >
        CONNECTION SECURE. ENCRYPTED TERMINAL ESTABLISHED.
      </footer>
    </main>
  </div>
</template>

<script setup>
const {
  data: projects,
  pending,
  error,
} = await useFetch("http://localhost:5000/api/projects", {
  lazy: true,
});
</script>
