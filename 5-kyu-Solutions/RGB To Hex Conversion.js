//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    function color (el){
        if(el<1){
            return '00'
        } else if(el>256){
            return 'FF'
        } else{
            return el.toString(16).toUpperCase().padStart(2,'0')
        }
    }
    return color(r) + color(g) +color(b)
}