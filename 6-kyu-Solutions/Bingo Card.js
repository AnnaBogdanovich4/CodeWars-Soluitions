//After yet another dispute on their game the Bingo Association decides to change course and automate the game.
// Can you help the association by writing a method to create a random Bingo card?

// Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:
// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:
// [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

function getCard() {
    let arr = []
    function getRandomNum(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let a = 1; a<6; a++){
        let b =('B' + getRandomNum(1, 15));
        if (arr.includes(b)){
            b =('B' + getRandomNum(1, 15))
        }
        arr[a-1]=b
    }
    for (a = 6; a<11; a++){
        let i = ('I' + getRandomNum(16, 30));
        if (arr.includes(i)){
            i = ('I' + getRandomNum(16, 30))
        }
        arr[a-1]=i
    }
    for (a = 11; a<15; a++){
        let n =('N' + getRandomNum(31, 45));
        if(arr.includes(n)){
            n = ('N' + getRandomNum(31, 45))
        }
        arr[a-1]=n
    }
    for (a = 15; a<20; a++){
        let g = ('G' + getRandomNum(46, 60));
        if (arr.includes(g)){
            g = ('G' + getRandomNum(46, 60));
        }
        arr[a-1]=g
    }
    for (a = 20; a<25; a++){
        let o = ('O' + getRandomNum(61, 75));
        if (arr.includes(o)){
            o = ('O' + getRandomNum(61, 75));
        }
        arr[a-1]= o
    }
    return arr
}