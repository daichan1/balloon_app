const balloonList = [
  {left: "8%", bottom: "-140px", width: "80px", height: "100px", color: "red"},
  {left: "20%", bottom: "-155px", width: "80px", height: "100px", color: "blue"},
  {left: "36%", bottom: "-175px", width: "80px", height: "100px", color: "green"},
  {left: "48%", bottom: "-200px", width: "80px", height: "100px", color: "yellow"},
  {left: "55%", bottom: "-130px", width: "80px", height: "100px", color: "black"},
  {left: "75%", bottom: "-180px", width: "80px", height: "100px", color: "lime"},
  {left: "90%", bottom: "-190px", width: "80px", height: "100px", color: "purple"}
]

const audioList = [
  document.getElementById("audio_cute"),
  document.getElementById("audio_camera"),
  document.getElementById("audio_cupe"),
  document.getElementById("audio_caco")
]

const flyClassList = ["normal-fly", "fast-fly", "slow-fly"]

function setParams(element, params, index) {
  element.id = `balloon_${index}`
  element.style.position = "absolute"
  element.style.left = params.left
  element.style.bottom = params.bottom
  element.style.width = params.width
  element.style.height = params.height
  element.style.background = params.color
  element.style.borderRadius = "50%"
  element.style.boxShadow = "-6px -6px 0 rgba(0, 0, 0, 0.15) inset"
}

function createBalloon(params, index) {
  const balloon = document.createElement('div')

  const flyOrder = Math.floor(Math.random() * flyClassList.length)
  balloon.classList.add(flyClassList[flyOrder])

  setParams(balloon, params, index)

  const balloonCode = document.createElement("div")
  balloonCode.classList.add("balloon-code")

  balloon.appendChild(balloonCode)
  balloon.addEventListener('click', (e) => {
    const audioOrder = Math.floor(Math.random() * audioList.length)
    audioList[audioOrder].currentTime = 0
    audioList[audioOrder].play()
    balloon.remove()
    const balloonOrder = Math.floor(Math.random() * balloonList.length)
    createBalloon(balloonList[balloonOrder], index + balloonList.length)
  })
  document.body.prepend(balloon)
}

function main() {
  balloonList.forEach((params, index) => {
    createBalloon(params, index)
  })
}

main()
