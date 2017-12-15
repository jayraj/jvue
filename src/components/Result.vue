<script>
  import Match from './Match'

  // console.log('Match', Match)

  export default {
    name: 'Result',
    data () {
      return {
        msg: 'Result page'
      }
    },
    mounted: function () {
      console.log('the component is mounted')
    },
    created: function () {
      console.log('the component is created')
    },
    updated: function () {
      console.log('the component is updated')
    },
    destroyed: function () {
      console.log('the component is destroyed')
    },
    methods: {
      submitForm: function (e) {
        localStorage.setItem('jay', 'this is local storage')
      }
    },
    components: { Match }
  }
</script>

<template>
  <div>
    <h1>{{msg}}</h1>
    <Match>{{msg}}</Match>
    <!--<button class="btn btn-primary">results</button>
    <button class="btn btn-primary">new result</button>
    <button class="btn btn-primary"> table</button>
    <div class="match">
      <div><input type="text" placeholder="date"></div>
      <div class="team">
        <input type="text" placeholder="team name"/>
        <input type="text" placeholder="score"/>
      </div>

      <div class="team">
        <input type="text" placeholder="team name"/>
        <input type="text" placeholder="score"/>
      </div>
      <button class="btn btn-primary" @click="submitForm">submit</button>
    </div>-->
  </div>
</template>
