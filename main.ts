input.onButtonPressed(Button.A, function () {
    Score += 1
})
input.onGesture(Gesture.Shake, function () {
    Score += -1
})
input.onButtonPressed(Button.B, function () {
    Score = 3
})
let Score = 0
Score = 3
basic.forever(function () {
    basic.showNumber(Score)
})
