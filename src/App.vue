<template>
  <div class="app">
    <header>
      <div :class="$style['order']">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, useCssModule } from 'vue'
  import JobList from '@/components/job-list.vue'

  import Job from '@/types/Job'
  import type { OrderTerm } from '@/types/helpers-type'

  export default defineComponent({
    name: 'App',
    components: {
      JobList,
    },

    setup() {
      const $style = useCssModule()
      const jobs = ref<Job[]>([
        {
          title: 'Farm worker',
          location: 'lon lon ranch',
          salary: 30000,
          id: 1,
        },
        {
          title: 'Quarryman',
          location: 'death mountain',
          salary: 40000,
          id: 2,
        },
        {
          title: 'Flute player',
          location: 'the lost woods',
          salary: 35000,
          id: 3,
        },
        {
          title: 'fisherman',
          location: 'lake hylia',
          salary: 21000,
          id: '4',
        },
      ])

      const order = ref<OrderTerm>('title')

      const handleClick = (term: OrderTerm) => {
        order.value = term
      }

      return {
        $style,
        jobs,
        order,
        handleClick,
      }
    },
  })
</script>

<style module>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
</style>
