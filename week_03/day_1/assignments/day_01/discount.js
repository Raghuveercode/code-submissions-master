function program(input) {
    // input
    // console.log(input)
    // write code here
    var total
    var dis
    if (input<300){
        return input + " " + 0 + " " + input
    }
    else if (input>=300 && input<=1000){
        dis = input * 0.1
        total = input - dis
       return input + " " + dis + " " + total
    }
    else (input>1000);{
        dis = 100
        total = input - dis
        return input + " " + dis + " " + total
        }


    // return output
    return 'output'
}


module.exports = program