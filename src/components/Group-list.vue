<template>
  <section class="section">
    <Group :Grouplist="GroupList" />
  </section>
</template>

<script>
  import Group from '@/components/Group.vue'
  import {controllersArr} from '../assets/controllers.js'

  export default {
    name: 'Grouplist',
    components: {
      Group
    },
    data() {
      return {
        controllersArr,
        GroupList: []
      }
    },
    methods: {
      groupedList(rawData) {
        let data = rawData.reduce((r, e) => {
          let group = e.name[0];
          if(!r[group]) r[group] = {group, children: [e]}
          else r[group].children.push(e);
          return r;
        }, {});

        let result = Object.values(data);
        
        return this.GroupList = result;
      },
      accordion: function(e) {
        e.target.classList.toggle('active')
      }
    },
    mounted: function() {
      this.groupedList(controllersArr)
    }
  }
</script>