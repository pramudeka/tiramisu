<script>

export default {
  data() {
    return {
      source: '',
      btnMode: 'Dark Mode',
      darkMode: false,
      darkModeClass: ''
    }
  },
  computed: {
    output() {
      return (this.source)
    }
  },
  methods: {
    update(e) {
      this.source = e.target.value
    },
    toggleMode(e){
        this.darkMode = !this.darkMode

        this.darkModeClass = (this.darkMode?'dark-mode':'')
        this.btnMode = (this.darkMode?'Light Mode':'Dark Mode')
    },
    copy(e){
        var copyText = document.getElementById('preview-code')
        var tooltip = document.getElementById('myTooltip')
        tooltip.style.opacity = 1
        console.log(copyText.innerText)
        navigator.clipboard.writeText(copyText.innerText)
        .then(() => {
            setTimeout(function(){
                tooltip.style.opacity = 0
            }, 2000)
        })

    }
  }
}
</script>

<template>
    <div class="main">
        <div class="input">
            <textarea class="input-area" v-bind:value="source" @input="update" ></textarea>
        </div>
        <div class="preview" v-bind:class="darkModeClass">
            <button @click="toggleMode">Toggle {{btnMode}}</button>
            <div class="preview-area" v-html="output"></div>

            <div id="preview-code" class="preview-code">/roomintro {{source}}</div>
            <div class="tooltip">
                <button @click="copy">
                <span class="tooltiptext" id="myTooltip">Coppied to clipboard</span>
                Copy
                </button>
            </div>
        </div>
    </div>    
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
}
body {
  min-height: 100vh;
  line-height: 1.6;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main{
    display: flex;
}
.input{
    width: 50%;
    padding: 10px;
}
.preview{
    width: 50%;
    padding: 10px;
}
.dark-mode{
    background: rgb(32, 32, 32);
    color: #fff;
}
.input-area{
    width: 100%;
    height: 90vh;
    resize: none;
}
.preview-area{
    border: #555 solid 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 250px;
}
.preview-code,
#preview-code{
    margin-top: 10px;
    margin-bottom: 10px;
    border: #555 solid 1px;
    padding: 5px;
    font-size: small;
    font-family: 'Courier New', Courier, monospace;
}
.tooltip {
    position: relative;
    display: inline-block;
  }
  
  .tooltip .tooltiptext {
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  
</style>