<template>
  <div :class="$style['job-list']">
    <p>Ordered by {{ order }}</p>
    <transition-group tag="ul" name="list">
      <li v-for="job in orderdJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div :class="$style['salary']">
          <p>{{ job.salary }} UZS</p>
        </div>
        <div :class="$style['description']">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero repudiandae velit
            exercitationem fuga modi quo! Dolor, id omnis ex adipisci aliquid, reiciendis iste magni
            incidunt libero ut iusto consequatur soluta!
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, useCssModule, computed } from 'vue'
  import Job from '@/types/Job'
import { OrderTerm } from '@/types/helpers-type'

  export default defineComponent({
    name: 'JobList',

    props: {
      jobs: {
        required: true,
        type: Array as PropType<Job[]>,
      },
      order: {
        required: true,
        type: String as PropType<OrderTerm>
      }
    },

    setup(props) {
      const $style = useCssModule()

      const orderdJobs = computed(() => {
        return [...props.jobs].sort((a: Job, b: Job) => {
          return a[props.order] > b[props.order] ? 1 : -1
        })
      })

      return {
        $style,
        orderdJobs
      }
    },
  })
</script>

<style module>
  .job-list {
    max-width: 960px;
    margin: 40px auto;
  }
  .job-list ul {
    padding: 0;
  }
  .job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .salary {
    display: flex;
  }
  .salary img {
    width: 30px;
  }
  .salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }

  :global(.list-move) {
    transition: all 1s;
  }
</style>
