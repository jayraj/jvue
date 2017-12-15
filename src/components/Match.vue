<template>
  <div class="match">
    <!--<div v-for="match in sortMatch" :key="match.id" class="row">
      <div class="col-md-12">{{match.date}}</div>
      <div v-for="team in match.teams" style="display: inline-block" class="col-md-6"> {{team.name | uppercase }} {{ '('+ team.score +')'}}</div>
    </div>-->
    <!--<Team v-for="match in matches" v-bind:match="match"/>-->
    <div v-for="match in sortMatch" :key="match.id" class="row">
      <div class="col-md-12">{{match.date}}</div>
      <div style="display: inline-block" class="col-md-6">{{match.aTeam +'('+ match.aScore + ')'}}</div>
      <div style="display: inline-block" class="col-md-6">vs {{match.hTeam +'('+ match.aScore + ')'}}</div>
    </div>
  </div>


</template>

<script>
  // import Team from './Team'
  // console.log('Team', Team)

  export default {
    name: 'Match',
    data () {
      return {
        // msg: 'Match component',
        matches: [
          /* {
            id: 'm1',
            date: new Date() + 1,
            teams: [{name: 'barce', score: 2}, {name: 'yyy', score: 3}]
          },
          {
            id: 'm2',
            date: new Date() + 4,
            teams: [{name: 'arce', score: 2}, {name: 'aaa', score: 1}]
          },
          {
            id: 'm3',
            date: new Date() + 3,
            teams: [{name: 'xxx', score: 3}, {name: 'vvv', score: 0}]
          },
          {
            id: 'm4',
            date: new Date() + 3,
            teams: [{name: 'xxx', score: 3}, {name: 'vvv', score: 0}]
          } */
        ]
      }
    },
    computed: {
      sortMatch: function () {
        function compare (a, b) {
          if (a.date < b.date) {
            return -1
          }
          if (a.date > b.date) {
            return 1
          }
          return 0
        }

        return this.matches.sort(compare)
      },
      setWin: function () {
        function compare (a, b) {
          if (a.score < b.score) {
            return -1
          }
          if (a.score > b.score) {
            return 1
          }
          return 0
        }

        return this.matches.sort(compare)
      }
    },
    filters: {
      desc (id) {
        // console.log('id ===', id)
        return id
      },
      uppercase (val) {
        return val.toUpperCase()
      }
    },
    created () {
      console.log('fetch match data here from API')
      // take data from localstorage
     // debugger
      // const url = 'https://randomuser.me/api/?results=10'
      const url = '../src/api/matches.json'
      var self = this
      fetch(url).then(response => response.json()).then(function (data) {
        // console.log(data.matches)
        var matches = data.matches
        self.matches = matches
      })
      // this.matches = JSON.parse(localStorage.getItem('matches'));
      /* this.matches = [
         {
           id: '5',
           date: '2017/12/09',
           hTeamId: 1,
           hTeam: 'xxx',
           hScore: 2,
           aTeamId: 2,
           aTeam: 'yyy',
           aScore: 3,
           winnerTeamId: 2
         },
         {
           id: '6',
           date: '2017/12/19',
           hTeamId: 1,
           hTeam: 'aaa',
           hScore: 2,
           aTeamId: 2,
           aTeam: 'bbb',
           aScore: 3,
           winnerTeamId: 2
         },
         {
           id: '7',
           date: '2017/12/01',
           hTeamId: 1,
           hTeam: 'barce',
           hScore: 2,
           aTeamId: 2,
           aTeam: 'yyy',
           aScore: 3,
           winnerTeamId: 2
         }
       ] */
    }
  }

  /*
  var matches= [
    {
      matchId: 1,
      matchDate: new Date();
      teams: [
        {
          teamId: 0,
          name: 'barca',
          score: 4
          stats: {
            pld: 4,
            wins: 3,
            losses: 4,
            draw: 2
          }
        },
        {
          teamId: 0,
          name: 'barca',
          stats: {
            pld: 4,
            wins: 3,
            losses: 4,
            draw: 2
          }
        }
      ]
    }
  ] */
</script>

