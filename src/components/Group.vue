<template>
  <section class="section group-list">
    <div
      v-for="(GroupItem, i) in Grouplist" 
      class="group-list__item">
      <div class="group-list__title" v-on:click="accordion">
        {{GroupItem.group}}
      </div>
      <div class="group-list__body">
        <Controller :groupItem="GroupItem" />
      </div>
    </div>
  </section>
</template>

<script>
  import Controller from '@/components/Controller.vue'

  export default {
    name: 'Group',
    props: {
      Grouplist: {}
    },

    components: {
      Controller
    },
   
    methods: {
      accordion: function(e) {
        e.target.classList.toggle('active')
      }
    }
  }
</script>

<style scoped lang="scss">
  .group-list {
    &__item {
      + .group-list__item {
        margin-top: 40px;
      }
    }

    &__title {
      padding: 20px;
      cursor: pointer;
      background-color: #c9c9c9;
      transition: background-color 0.2s linear;
      
      &:hover {
        background-color: #ff9e7f;
      }

      &.active {
        background-color: #ff9e7f;

        + .group-list__body {
          display: block;
        }
      }
    }

    &__body {
      display:none;
      padding: 30px 20px;
      border: 1px solid #c9c9c9;
    }
  }
</style>
