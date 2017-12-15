<script>
  export default {
    name: 'NewMatch',
    data () {
      return {
        msg: 'New Result',
        newmatch: {
          date: '',
          hTeam: '',
          hScore: '',
          aTeam: '',
          aScore: ''
        },
        matches: []
      }
    },
    mounted: function () {
      console.log('the component is mounted')
    },
    created: function () {
      console.log('the component is created, load match data from localStorage or API')
      if (localStorage.getItem('matches')) {
        this.matches = JSON.parse(localStorage.getItem('matches'))
      }
    },
    updated: function () {
      console.log('the component is updated')
    },
    destroyed: function () {
      console.log('the component is destroyed')
    },
    methods: {
      addNewMatch (e) {
        if (!this.newmatch.date || !this.newmatch.hTeam || !this.newmatch.hScore || !this.newmatch.aTeam || !this.newmatch.aScore) {
          alert('please fill value')
        } else {
          console.log('FORM SUBMIT')
          this.matches.push(this.newmatch)
          this.newmatch = {
            date: '',
            hTeam: '',
            hScore: '',
            aTeam: '',
            aScore: ''
          }
          const url = '../src/api/matches.json'
          var self = this
          fetch(url, {
            method: 'post',
            body: JSON.stringify(self.matches)
          }).then(response => response.json()).then(function (data) {
            console.log(data, 'sumitted successfuly')
          })
          e.preventDefault()
        }
        e.preventDefault()
      }
    }
  }
</script>

<template>
  <div>
    <form v-on:submit="addNewMatch">

      <div>
        <input type="text" id="hTeam"  placeholder="team name" v-model="newmatch.hTeam"/>
        <input type="text"  placeholder="score" id="hScore" v-model="newmatch.hScore"/>
      </div>

      <div>
        <input type="text" id="aTeam"  placeholder="team name" v-model="newmatch.aTeam"/>
        <input type="text"  placeholder="score" id="aScore" v-model="newmatch.aScore"/>
      </div>


      <div><input type="text" placeholder="date" id="matchDate" v-model="newmatch.date"></div>
      <button type="submit" class="btn btn-primary">Add new Result</button>
    </form>
    <h1>{{msg}}</h1>




  </div>


</template>
