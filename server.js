const express = require('express')
const app = express()
const PORT = 8000


const cartoons = {
	'snoopy': {
		'cartoonName': 'snoopy',
		'show': 'peanuts',
		'breed': 'beagle'
},
	'pluto': {
			'cartoonName': 'pluto',
			'show': 'mickey Mouse',
			'breed': 'mixed breed'
	},
	'shelper': {
		'cartoonName': "santa's little helper",
		'show': 'the simpsons',
		'breed': 'greyhound'
	},
	'odie': {
		'cartoonName': "odie",
		'show': 'garfield',
		'breed': 'unspecified'
	},
	'scooby doo': {
		'cartoonName': "scooby doo",
		'show': 'scooby doo',
		'breed': 'great dane'
	},
	'clifford': {
		'cartoonName': "clifford",
		'show': 'clifford the big red dog',
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
})
//__dirname  will tell the computer to start looking in this area


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