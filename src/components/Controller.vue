<template>
  <div class="controllers">
    <div v-for="controller in groupItem.children" class="controllers__item">
      <div class="controllers__header">
        <div class="controllers__name">
          {{ controller.name }}
        </div>
        <div class="controllers__type">
          <strong>Тип:</strong> {{ controller.type }}
        </div>
        <div class="controllers__description">
          <strong>Описание:</strong> {{ controller.description }}
        </div>
      </div>
      <div class="controllers__body">
        <div class="controllers__parameters parameters" v-if="controller.parameters.length !== 0 ">
          <div class="controllers__title">Параметры:</div>
          <div class="parameters__item" v-for="parameter in controller.parameters">
            <div :class="`controllers__in controllers__in--${parameter.in}`" v-if="parameter.in === 'path'">
              <strong>Тип параметра:</strong> {{ parameter.type }}
            </div>
            <div :class="`controllers__in controllers__in--${parameter.in}`" v-else>
              <!-- {{ parameter.in }} -->
              <div class="controllers__toggle" v-on:click="accordion">&rarr; <span>{{ parameter.schema.$ref }}</span></div>
              <controllerModel :link="parameter.schema.$ref"/>
            </div>
          </div>
        </div>
        <div class="controllers__result">
          <div class="controllers__title">Ответ:</div>
          <div v-if="controller.result.$ref" class="controllers__accordion">
            <div class="controllers__toggle" v-on:click="accordion">&rarr; <span>{{controller.result.$ref}}</span></div>
            <controllerModel :link="controller.result.$ref"/>
          </div>
          <div v-else-if="controller.result.items" class="controllers__accordion">
            <div v-for="item in controller.result.items">
              <div class="controllers__toggle" v-on:click="accordion">&rarr; <span>{{controller.result.items.$ref}}</span></div>
              <controllerModel :link="controller.result.items.$ref"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import controllerModel from '@/components/Controller-model.vue'

  export default {
    name: 'controllers',
    props: {
      groupItem: {}
    },
    components: {
      controllerModel
    },
    methods: {
      accordion: function(e) {
        e.target.parentElement.classList.toggle('active')
      }
    }
  }
</script>

<style scoped lang="scss">
  .controllers {
     &__title {
      font-weight: 600;
    }

    &__item {
      padding: 20px;
      margin-top: 20px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    }

    &__body {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #c1c1c1;
    }

    &__name {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    &__parameters + &__result {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #c1c1c1;
    }

    &__toggle {
      color: #FF9E7F;

      > span {
        cursor: pointer;
        border-bottom: 1px solid transparent;
        transition: border-bottom-color 0.2s linear;
      }

      &:hover {
        > span {
          border-bottom-color: #FF9E7F;
        }
      }

      &.active + .controller-model {
        display: block;
        margin-top: 20px;
      }
    }

    &__accordion {
      margin-top: 10px;
    }
  }

  .parameters {
    &__item {
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    .controllers__name {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

</style>