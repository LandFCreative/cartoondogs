const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const cartoons = {
	'snoopy': {
		'cartoonName': 'Snoopy',
		'show': 'Peanuts',
		'breed': 'beagle'
},
	'pluto': {
			'cartoonName': 'Pluto',
			'show': 'Mickey Mouse',
			'breed': 'mixed breed'
	},
	'shelper': {
		'cartoonName': "Santa's Little Helper",
		'show': 'The Simpsons',
		'breed': 'greyhound'
	},
	'odie': {
		'cartoonName': "Odie",
		'show': 'Garfield',
		'breed': 'unspecified'
	},
	'scooby doo': {
		'cartoonName': "Scooby Doo",
		'show': 'Scooby Doo',
		'breed': 'great dane'
	},
	'clifford': {
		'cartoonName': "Clifford",
		'show': 'Clifford The Big Red Dog',
		'breed': 'vizsla'
	},
	'Unknown': {
			'cartoonName': 'unknown',
			'show': 'unknown',
			'breed': 'unknown',
},
}



app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
//__dirname  will tell the computer to start looking in this area
})

app.get("/api/:name",(request, response)=>{
	const dog = request.params.name.toLowerCase();
	 
	 if (cartoons[dog]) {
         response.json( cartoons[dog] )
	} else {
	 response.json( cartoons['unknown'])
	 }
    })

app.listen( PORT, () => {
console.log(`Serving running on Port ${PORT}`)
})


//Git 2H09m