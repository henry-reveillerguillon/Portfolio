const body = document.querySelector('body')
let bar
window.loading = {
  start: function () {
    window.loaded = false
    const loader = document.createElement('div')
    bar = document.createElement('div')
    loader.id = 'loader'
    bar.id = 'loader-bar'
    loader.appendChild(bar)
    body.appendChild(loader)

    const loadsteps = 10
    let i = 0
    window.loadTimeout = window.setTimeout(() => {
      if (i < loadsteps) {
        i++
        bar.style.width = (i * (20 / loadsteps)) + '%'
      }
    }, 200)


    console.log('debut')
  },
  end: function () {
    bar.style.width = "20%"
    body.classList.add('loaded')
    console.log('Everything loaded')
    window.loaded = true
    window.clearTimeout(window.loadTimeout)
  }
}



document.write(`<style>
#loader {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color:#fff;
    pointer-events: none;
    z-index: 10000;
    transition: all .2s;
}
#loader::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 40%;
    width: 20%;
    height: 10px;
    border-radius: 10px;
    background-color:#e6e8ee;
    transform-origin: left center;
}
#loader-bar {
    position: absolute;
    top: 50%;
    left: 40%;
    width: 0%;
    height: 10px;
    border-radius: 10px;
    background-color:#fce14b;
    animation: load 4s both;
    transition: all .2s;
    animation-play-state: paused;
}
body.loaded #loader {
    opacity: 0;
    transition-delay: .5s;
}
</style>`)

loading.start()
