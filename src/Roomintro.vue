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
  mounted(){
    if(localStorage.source){
      this.source = localStorage.source
    }
  },
  watch:{
    source(newSource){
      localStorage.source = newSource
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
    <div class="main" v-bind:class="darkModeClass">
        <div class="input">
            <textarea class="input-area" v-bind:value="source" @input="update" ></textarea>
        </div>
        <div class="preview">
            <button @click="toggleMode">Toggle {{btnMode}}</button>
            <div class="preview-area" v-html="output"></div>

            <div class="tooltip">
                <button @click="copy">
                <span class="tooltiptext" id="myTooltip">Coppied to clipboard</span>
                Copy Code
                </button>
            </div>
            <div id="preview-code" class="preview-code">/roomintro {{source}}</div>
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
    width: 100%;
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
    height: calc(100vh - 5%);
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
    overflow-wrap: break-word;
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
  
  /*media--------------------*/
  @media screen and (max-width: 660px) {
    .main{
      display: block;
    }
    .input{
      width: 100%;
      padding: 10px;
    }
    .preview{
      width: 100%;
      padding: 10px;
    }
    .input-area{
        height: 75vh;
    }
  }
</style>