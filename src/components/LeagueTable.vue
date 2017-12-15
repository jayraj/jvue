<script>
  export default {
    name: 'LeagueTable',
    data () {
      return {
        msg: 'League Table page',
        teams: [
          {
            id: 0,
            name: 'barca',
            stats: {
              pld: 4,
              wins: 3,
              losses: 4,
              draw: 2
            }
          },
          {
            id: 5,
            name: 'bbbb',
            stats: {
              pld: 4,
              wins: 0,
              losses: 0,
              draw: 0
            }
          },
          {
            id: 2,
            name: 'aaa',
            stats: {
              pld: 4,
              wins: 0,
              losses: 0,
              draw: 0
            }
          },
          {
            id: 1,
            name: 'cccc',
            stats: {
              pld: 5,
              wins: 0,
              losses: 0,
              draw: 0
            }
          }
        ]
      }
    },
    mounted: function () {
      console.log('the component is mounted')
      console.log(this.teams)
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
    props: {

    },
    methods: {
      calculate: function (team) {
        // this.$emit('calc')
        var w, d, l, pts
        w = team.stats.wins
        d = team.stats.draw
        l = team.stats.losses = 0
        pts = w * 3 + d + l
        return pts
      },
      sort: function () {
        function compare (a, b) {
          if (a.id < b.id) {
            return -1
          }
          if (a.id > b.id) {
            return 1
          }
          return 0
        }
        return this.teams.sort(compare)
      }
    },
    computed: {
      calculatePoints () {
        /* console.log(team)
        var w, d, l, pts;
        w= team.stats.wins
        d= team.stats.draw
        l= team.stats.losses = 0
        pts = w * 3 + d + l
        return team.stats.wins * 3 + team.stats.draw + team.stats.losses */
      }
    }
  }
</script>

<template>
  <div>

    <h1>{{msg}}</h1>
    <!--<ul>
      <li v-for="team in teams" v-text="team.name +'=='+team.stats.wins"></li>
    </ul>
-->    <table border="1">
      <tr>
        <td v-on:click="sort()">Pos</td>
        <td>Team v t e</td>
        <td v-on:click="sort('id')">Pid</td>
        <td>w</td>
        <td>D</td>
        <td>L</td>
        <td>Pts</td>
      </tr>
    <tr v-for="team in teams">
      <td>{{team.id}}</td>
      <td>{{team.name}}</td>
      <td>{{team.stats.pld}}</td>
      <td>{{team.stats.wins}}</td>
      <td>{{team.stats.draw}}</td>
      <td>{{team.stats.losses}}</td>
      <!--<td >{{team.stats.wins * 3 + team.stats.draw + team.stats.losses}}</td>-->
      <td v-text="calculate(team)"></td>
    </tr>

    </table>

  </div>


</template>

