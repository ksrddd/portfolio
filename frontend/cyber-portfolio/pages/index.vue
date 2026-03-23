<template>
  <div class="min-h-screen bg-cyber-black text-cyber-green font-mono flex flex-col items-center justify-center relative overflow-hidden">
    
    <!-- Grid Background -->
    <div class="absolute inset-0 cyber-grid opacity-20 z-0 pointer-events-none"></div>

    <main class="z-10 w-full max-w-4xl p-8 border border-cyber-green/30 bg-black/60 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.15)] rounded-sm mt-10 md:mt-0">
      <header class="mb-10 border-b border-cyber-green/30 pb-4">
        <h1 class="text-4xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-cyan glitch" data-text="ROOT@SYSTEM">
          ROOT@SYSTEM
        </h1>
        <p class="mt-2 text-cyber-cyan text-sm md:text-base">~ /home/portfolio/init.sh --run</p>
      </header>
      
      <section class="mb-8">
        <h2 class="text-xl font-bold mb-4 text-white">&gt; SYSTEM.INFO</h2>
        <div class="bg-black/80 p-6 border-l-2 border-cyber-cyan rounded-r-md">
          <p class="opacity-80 leading-relaxed mb-4">
            Welcome to the mainframe. I am a  
            Specializing in secure web applications, penetration testing, and scalable architecture.
          </p>
          <div class="flex gap-4 font-bold text-sm">
            <span class="px-3 py-1 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green">Vue3 & Nuxt</span>
            <span class="px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan">Node.js</span>
            <span class="px-3 py-1 bg-red-500/10 border border-red-500/50 text-red-500">Security</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold mb-4 text-white">&gt; FETCH_PROJECTS()</h2>
        
        <div v-if="pending" class="animate-pulse flex items-center gap-2">
          <span class="w-3 h-3 bg-cyber-green rounded-full"></span>
          <span>Establishing secure connection...</span>
        </div>
        
        <div v-else-if="error" class="text-red-500 border border-red-500/50 bg-red-500/10 p-4">
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
            <div class="absolute top-0 right-0 w-2 h-2 bg-cyber-green rounded-bl-sm"></div>
            <h3 class="text-lg font-bold text-cyber-cyan mb-2">{{ project.name }}</h3>
            <p class="text-sm opacity-70 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 text-xs">
              <span v-for="tech in project.tech" :key="tech" class="text-white/60">[{{ tech }}]</span>
            </div>
          </NuxtLink>
        </div>
      </section>
      
      <footer class="mt-12 text-center text-xs opacity-50 border-t border-cyber-green/20 pt-4">
        CONNECTION SECURE. ENCRYPTED TERMINAL ESTABLISHED.
      </footer>
    </main>
  </div>
</template>

<script setup>
const { data: projects, pending, error } = await useFetch('http://localhost:5000/api/projects', {
  lazy: true
})
</script>
