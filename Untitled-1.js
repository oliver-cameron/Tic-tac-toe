
var board = []
for(var i = 1; i<257; i++){
    board = board.concat({id:i, path: i.toString(2).padStart(8, '0').split(''), result:0})
}