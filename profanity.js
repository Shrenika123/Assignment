
const file = './data.txt'
let words = ['kike',"coon","spook","nigger"]
var res = []
let checkProfonity = (line) => {
    let m = line.split(' ')
    let count=0
    for (let i = 0; i < m.length; i++) {
        if(words.includes(m[i]))
       {
            count++
       } 
       
}
res.push(count)

return res
}



var lineReader =  require('readline').createInterface({
    input: require('fs').createReadStream(file)
})
let a = []
lineReader.on('line', function (line) {
    a = checkProfonity(line)
}).on('close', () => {
    for(let i=1;i<=a.length;i++)
    {
        console.log('line'+i+' degres is '+a[i-1])
    }
});


