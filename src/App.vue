<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
  @import './assets/styles/ui/main.scss';

  .content {
    > * + * {
      margin-top: 2.5rem;
    }

    img {
      display: inline-block;
      max-width: 100%;
      vertical-align: top;
    }
  }

  .header {
    flex: none;
    font-size: 13px;
    position: relative;
    padding: 20px 40px;
    background-color: #c9c9c9;
  }

  .footer {
    flex: none;
    color: #fff;
    padding: 20px 40px;
    background-color: #302a31;
  }

  .page-wrapper {
    flex: 1 0 auto;
    overflow: hidden;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .container {
    margin-left: auto;
    max-width: 1120px;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;

    &--wide {
      max-width: 1350px;
    }
  }
</style>