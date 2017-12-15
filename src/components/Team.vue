<template>
  <div class="team" >
    <p>{{match.date}}</p>
    <!--<p>{{match.teams}}</p>-->
     <div style="display: inline-block" class="col-md-6" v-for="team in match.teams">{{team.name }} {{team.score}}</div>

    <!--<div v-for="team in match.teams"> {{team.name }} {{team.score}}</div>-->
  </div>
</template>

<script>
  export default {
    name: 'Team',
    props: ['match'],
    data () {
      return {
        msg: 'Team component'
      }
    }
  }
</script>


