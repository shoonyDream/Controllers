<template>
  <div class="controller-model">
    <div class="controller-model__name">
      {{link}}
    </div>
    <div class="controller-model__properties properties">
      <div class="properties__item" v-for="(item , key) in params">
        <div class="properties__body">
          <div class="properties__name">
            {{key}}
          </div>
          <div class="properties__description" v-if="item.type === 'array' && item.items.$ref">
            <strong>Тип:</strong> {{item.items.$ref}}
          </div>
          <div class="properties__type" v-else-if="item.type">
            <strong>Тип:</strong> {{item.type}}
          </div>
          <div class="properties__description" v-if="item.description">
            <strong>Описание:</strong> {{item.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {models} from '../assets/controllers.js'

  export default {
    name: 'controllerModel',
    props: {
      link: String
    },
    data() {
      return {
        models,
        params:{}
      }
    },
    created(){
        this.params = models[this.link].properties
    }
  }
</script>

<style scoped lang="scss">
  .controller-model {
    display: none;
    padding: 20px;
    border: 1px solid #c1c1c1;

    &__name {
      font-size: 18px;
      font-weight: 600;
    }
  }

  .properties {
    margin: 20px -15px 0;

    &:empty {
      display: none;
    }

    &__item {
      margin-top: 10px;

      &:last-child {
        .properties__body {
          border: none;
        }
      }
    }

    &__body {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0;
      border-bottom: 1px solid #c9c9c9;

      > * {
        padding: 0 15px;
      }
    }

    &__name {
      font-size: 16px;
      max-width: 100%;
      flex-basis: 100%;
      padding: 5px 15px;
      margin-bottom: 10px;
      font-family: monospace;
      background-color: #d6d6d6;
    }

    &__type {
      max-width: 20%;
      flex-basis: 20%;
    }

    &__description {
      max-width: 80%;
      flex-basis: 80%;
    }
  }

</style>
