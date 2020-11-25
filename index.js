'use strict';

const WALL = 1
const PLAYER = 2
const PRICE = 3

const WALL_HEIGHT = '3'
const WALL_WIDTH = '5'
const WALL_DEPTH = '5'
const WALLS_CONTAINER = document.querySelector('#wallsContainer')
const PRICES_CONTAINER = document.querySelector('#pricesContainer')

const gameMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 3, 1, 0],
    [0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 3, 0, 1, 1, 0, 0],
    [0, 1, 3, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 2],
]

const createWall = position => {
    const wall = document.createElement('a-box')
    WALLS_CONTAINER.appendChild(wall)
    wall.setAttribute('color', '#fff')
    wall.setAttribute('material', 'src: #wall')
    wall.setAttribute('height', WALL_HEIGHT)
    wall.setAttribute('width', WALL_WIDTH)
    wall.setAttribute('depth', WALL_DEPTH)
    wall.setAttribute('position', position)
    wall.setAttribute('static-body', '')
}

const createPrice = position => {
    const price = document.createElement('a-sphere')
    WALLS_CONTAINER.appendChild(price)
    price.setAttribute('position', position)
    price.setAttribute('class', 'price')
    price.setAttribute('color', 'orange')
    price.setAttribute('radius', 1)
}

gameMap.map((set, setIndex) => {
    set.map((element, elementIndex) => {
        const position = (setIndex - gameMap.length / 2) * WALL_WIDTH + ' ' + 1.5 + ' ' + (elementIndex - set.length / 2) * WALL_WIDTH

        switch(element) {
            case WALL:
                createWall(position)
                break
            case PLAYER:
                const player = document.querySelector('#player')
                player.setAttribute('position', position)
                break
            case PRICE:
                createPrice(position)
                break
        }
    })
})
