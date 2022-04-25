const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8080 //deklarasi port

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => { // endpoint '/'
    res.send("Hello Programers!")
    })

app.get('/convert/celcius/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var fahrenheit = (nilai*9/5)+32
    var kelvin = (nilai*1)+273.15
    var reamur = nilai *(4/5)
    res.send({
        'Fahrenheit': fahrenheit,
        'Kelvin': kelvin,
        'Reamur': reamur,
    })
    })

app.get('/convert/Fahrenheit/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var celcius = (nilai-32)*(5/9)
    var kelvin = (nilai-32)*(5/9)+273.15
    var reamur = (nilai-32)*(4/9)
    res.send({
        'Celcius': celcius,
        'Kelvin': kelvin,
        'Reamur': reamur,
    })
})

app.get('/convert/reamur/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var celcius = nilai * (5/4)
    var kelvin = nilai * (5/4) + 273.15
    var fahrenheit = nilai * (9/4) + 32
    res.send({
        'Celcius': celcius,
        'Kelvin': kelvin,
        'Fahrenheit': fahrenheit,
    })
})

app.get('/convert/kelvin/:nilai', (req,res)=>{
    var nilai = req.params.nilai
    var celcius = nilai - 273.15
    var reamur = (nilai - 273.15) * (4 / 5)
    var fahrenheit = (nilai - 273.15) * (9 / 5) + 32
    res.send({
        'Celcius': celcius,
        'Reamur': reamur,
        'Fahrenheit': fahrenheit,
    })
})



app.post('/biner', (req,res)=>{
    var biner = req.body.nilai
    var h1 = parseInt(biner, 2)
    var h2 = parseInt(biner, 2).toString(8)
    var h3 = parseInt(biner, 2).toString(16)


    res.send({
        'Decimal' : h1,
        'Octal' : h2,
        'Hexa' : h3
    })
    
})

app.post('/decimal', (req,res)=>{
    var nilai = req.body.nilai
    var h1 = parseInt(nilai, 10).toString(2)
    var h2 = parseInt(nilai, 10).toString(8)
    var h3 = parseInt(nilai, 10).toString(16)


    res.send({
        'Biner' : h1,
        'Octal' : h2,
        'Hexa' : h3
    })
    
})

app.post('/hexa', (req,res)=>{
    var nilai = req.body.nilai
    var h1 = parseInt(nilai, 16)
    var h2 = parseInt(nilai, 16).toString(8)
    var h3 = parseInt(nilai, 16).toString(2)


    res.send({
        'Decimal' : h1,
        'Octal' : h2,
        'Biner' : h3
    })
    
})

app.post('/octal', (req,res)=>{
    var nilai = req.body.nilai
    var h1 = parseInt(nilai, 8)
    var h2 = parseInt(nilai, 8).toString(2)
    var h3 = parseInt(nilai, 8).toString(16)


    res.send({
        'Decimal' : h1,
        'Biner' : h2,
        'Hexa' : h3
    })
    
})

app.post('/bmi', (req, res)=>{
    var tinggi = req.body.tinggi
    var berat = req.body.berat
    var hasil = berat / (tinggi**2)
    // var a ="kekurangan berat badan"
    if(hasil > 30){
        var a ="kegemukan (Obesitas)"
    }

    else if((hasil >= 25) & (hasil <= 29.9)){
        var a ="Kelebihan berat badan"
    }

    else if((hasil >= 18.5) & (hasil <= 24.9)){
        var a ="Ideal"
    }

    else{
        var a ="Kekurangan berat badan"
    }
        res.send({
            'Tinggi': tinggi,
            'berat': berat,
            'Bmi': hasil,
            'Status ':a,
        })
    


})

app.delete('/orang/:id', (req, res) => {
    var id = req.params.id
    var namaOrang = req.body.nama
    res.end('ID'+id+' telah dihapus, atas nama '+namaOrang)
    });

app.put('/orang/:id', (req, res) => {
    var id = req.params.id
    var namaOrang = req.body.nama
    var alamat = req.body.alamat
    res.end('Seseorang dengan ID'+id+', telah terupdate')
    });

app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })