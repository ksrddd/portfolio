<template>
  <div
    class="min-h-screen bg-cyber-black text-cyber-green font-mono flex flex-col items-center justify-center relative overflow-hidden p-4 md:p-8"
  >
    <!-- Grid Background -->
    <div
      class="absolute inset-0 cyber-grid opacity-20 z-0 pointer-events-none"
    ></div>

    <div
      class="z-10 w-full max-w-3xl border border-cyber-cyan p-6 bg-black/80 shadow-[0_0_20px_rgba(0,240,255,0.15)] mt-10 md:mt-0"
    >
      <!-- ปุ่มกดย้อนกลับ -->
      <NuxtLink
        to="/"
        class="text-sm border border-cyber-green px-3 py-1 hover:bg-cyber-green hover:text-black transition-all mb-6 inline-block"
      >
        &lt; cd ..
      </NuxtLink>

      <div v-if="pending" class="animate-pulse flex gap-2">
        <span class="w-3 h-3 bg-cyber-cyan rounded-full"></span>
        <span>Loading system file...</span>
      </div>

      <div
        v-else-if="error || !project?.data"
        class="text-red-500 border border-red-500/50 bg-red-500/10 p-4"
      >
        [!] DATA CORRUPTED: 404 PROJECT NOT FOUND.
      </div>

      <!-- แสดงรายละเอียดโปรเจค -->
      <div v-else>
        <h1
          class="text-3xl font-bold text-cyber-cyan border-b border-cyber-cyan mb-4 pb-2"
        >
          {{ project.data.name }}
        </h1>

        <p class="text-white/80 leading-relaxed mb-6">
          {{ project.data.description }}
        </p>
        <div class="mb-6" v-if="project.data.full_detail">
          <h3 class="text-xl text-cyber-green mb-2">> FULL_DOCUMENTATION.md</h3>
          <p class="text-white/70">{{ project.data.full_detail }}</p>
        </div>

        <div v-if="project.data.tech" class="mb-4">
          <h3 class="text-white mb-2">TARGET_VULNERABILITIES (Tech Stack):</h3>
          <div class="flex flex-wrap gap-2 text-xs">
            <span
              v-for="tech in project.data.tech"
              :key="tech"
              class="px-2 py-1 bg-cyber-black border border-white/30 text-white/80"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="p-4 bg-cyber-green/10 mt-6 border-l-4 border-cyber-green">
          > SYSTEM: DATA RETRIEVED SUCCESSFULLY.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const projectId = route.params.id;

const {
  data: project,
  pending,
  error,
} = await useFetch(`http://localhost:5000/api/projects/${projectId}`, {
  lazy: true,
});
</script>
