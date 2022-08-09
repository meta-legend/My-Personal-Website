const left = document.getElementById('left')
const img = document.getElementById('img')
const right = document.getElementById('right')
const keypress = document.getElementsByTagName('body')[0]
const audio = document.getElementById('audio')
let counter = 0

const imgs = [
    './assets/18e4861e-c742-40a2-935b-657ec964e3fb.JPG',
    './assets/IMG-1540.jpg',
    './assets/IMG-1570.jpg',
    './assets/IMG-1652.jpg',
    './assets/IMG-1687.jpg',
    './assets/IMG-2019.jpg',
    './assets/IMG-2081.jpg',
    './assets/IMG-2117.jpg',
    './assets/IMG-2475.jpg',
    './assets/IMG-2960.jpg',
    './assets/IMG-2986.jpg',
    './assets/IMG-2988.jpg',
    './assets/IMG-3198.jpg',
    './assets/IMG-1690.jpg',
    './assets/IMG-20180107-WA0000.JPG',
    './assets/IMG-20171120-WA0066.JPG',
    './assets/IMG-20180101-WA0018.JPG',
    './assets/IMG-20180101-WA0042.JPG',
    './assets/IMG-20180415-WA0013.JPG',
    './assets/IMG-20180704-WA0051.JPG',
    './assets/IMG-20180809-WA0019.JPG',
    './assets/IMG-20180809-WA0032.JPG',
    './assets/IMG-20190714-WA0009.JPG',
    './assets/IMG-20190611-WA0015.JPG',
    './assets/IMG-20200102-WA0032.JPG',
    './assets/IMG-20200102-WA0052.JPG',
    './assets/IMG-20200413-WA0004.JPG',
    './assets/IMG-20200413-WA0006.JPG',
    './assets/IMG-20200416-WA0010.JPG',
    './assets/IMG-20200516-WA0005.JPG',
    './assets/IMG-20200519-WA0007.JPG',
    './assets/IMG-20200523-WA0016.JPG',
    './assets/IMG-20200530-WA0009.JPG',
    './assets/IMG-20200823-WA0000.JPG',
    './assets/Screenshot-20210422-231301-WhatsApp.JPG',
    './assets/20201004-151803.JPG',
    './assets/20201122-224833.JPG',
    './assets/20210218-191752.JPG'
]

console.log(imgs.length)

img.src = imgs[counter]

right.onclick = () => {
    counter += 1
    if (counter > 37) {
        counter = 0
    }
    img.src = imgs[counter]
    audio.play()
}

left.onclick = () => {
    counter -= 1
    if (counter < 0) {
        counter = 37
    }
    img.src = imgs[counter]
    audio.play()
}

keypress.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
        counter -= 1
        if (counter < 0) {
            counter = 37
        }
        img.src = imgs[counter]
        audio.play()
    } else if (e.keyCode === 39) {
        counter += 1
        if (counter > 37) {
            counter = 0
        }
        img.src = imgs[counter]
        audio.play()
    }
})

