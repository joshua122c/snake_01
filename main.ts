function move (num: number) {
    if (num == 1) {
        if (snake_x <= 0) {
            snake_x = 7
        } else {
            snake_x += -1
        }
        direction = 1
    } else if (num == 2) {
        if (snake_y <= 0) {
            snake_y = 7
        } else {
            snake_y += -1
        }
        direction = 2
    } else if (num == 3) {
        if (snake_y >= 7) {
            snake_y = 0
        } else {
            snake_y += 1
        }
        direction = 3
    } else if (num == 4) {
        if (snake_x >= 7) {
            snake_x = 0
        } else {
            snake_x += 1
        }
        direction = 4
    } else if (num == 5) {
    	
    } else {
    	
    }
}
let direction = 0
let snake_y = 0
let snake_x = 0
snake_x = 5
snake_y = 4
let snake_x1 = 4
let snake_y1 = 4
let snake_x2 = 3
let snake_y2 = 4
let snake_x3 = 2
let snake_y3 = 4
direction = 4
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
let snake = max7219_matrix.getEmptyMatrix()
max7219_matrix.setValueInMatrix(
snake,
snake_x,
snake_y,
1
)
max7219_matrix.setValueInMatrix(
snake,
snake_x1,
snake_y1,
1
)
max7219_matrix.setValueInMatrix(
snake,
snake_x2,
snake_y2,
1
)
max7219_matrix.setValueInMatrix(
snake,
snake_x3,
snake_y3,
1
)
max7219_matrix.displayLEDsForOne(
snake,
0
)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        direction = 1
    } else if (pins.analogReadPin(AnalogPin.P0) < 200) {
        direction = 2
    } else if (pins.analogReadPin(AnalogPin.P0) < 300) {
        direction = 3
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        direction = 4
    } else if (pins.analogReadPin(AnalogPin.P0) < 460) {
    	
    }
})
basic.forever(function () {
    move(direction)
    max7219_matrix.toogleValueInMatrix(
    snake,
    snake_x3,
    snake_y3
    )
    snake_x3 = snake_x2
    snake_y3 = snake_y2
    snake_x2 = snake_x1
    snake_y2 = snake_y1
    snake_x1 = snake_x
    snake_y1 = snake_y
    max7219_matrix.setValueInMatrix(
    snake,
    snake_x,
    snake_y,
    1
    )
    max7219_matrix.setValueInMatrix(
    snake,
    snake_x1,
    snake_y1,
    1
    )
    max7219_matrix.setValueInMatrix(
    snake,
    snake_x2,
    snake_y2,
    1
    )
    max7219_matrix.setValueInMatrix(
    snake,
    snake_x3,
    snake_y3,
    1
    )
    max7219_matrix.displayLEDsForOne(
    snake,
    0
    )
    basic.pause(300)
})
