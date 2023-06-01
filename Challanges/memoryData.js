let memoryData = [];
let responses = [];

const search = (req) => {
	let memoryIndex = [...Array(memoryData.length).keys()];

	req.forEach( (value, index) => 
		memoryIndex = memoryIndex.filter( position => 
			value === memoryData[position][index]
		)
	);

	let result = { exists: !!memoryIndex.length }

	if ( result.exists ) 
		result.index = memoryIndex[0];

	return result;
};

const getData = (req) => {
	const data = search( req );

	return data.exists 
		? responses.push( memoryData[data.index].at(-1) )
		: responses.push( "" );
};

const setData = (req) => {
	const data = search( req.slice(0, -1) );

	data.exists
	? memoryData[ data.index ] = req
	: memoryData.push( req );

	return responses.push("");
};

const deleteData = (req) => {
	const data = search( req );

	if ( data.exists ) 
		memoryData = memoryData.filter( (value, index) => index !== data.index );

	return responses.push( String( data.exists ) );
};

const solution = requests => {
	requests.forEach( req => {
		switch( req[0] ) {
			case 'SET':
				setData( req.slice(1) );
				break;

			case 'GET':
				getData( req.slice(1) );
				break;

			case 'DELETE':
				deleteData( req.slice(1) );
				break;
		}
	});

	return { requests, memoryData, responses };
};


// Testing

let queries1 = [
	["SET","employee1","city","Annapolis"],
	["SET","employee2","id","0123"],
	["GET","employee1","city"]
];
// console.log( solution(queries1) );

let queries2 = [
	["GET","dept4","name"], 
	["GET","dept4","name"], 
	["SET","dept4","name","Main"], 
	["GET","dept4","name"],
	["GET","dept4","name"]
];
// console.log( solution(queries2) );

let queries3 = [
	["SET","book1","title","Island"], 
	["GET","book1","title"], 
	["DELETE","book1","title"], 
	["GET","book1","title"]
];
// console.log( solution(queries3) );

let queries4 = [
	["SET","user1","firstName","Greg"],
	["SET","user1","lastName","Wright"],
	["SET","lastName","user1","error"],
	["GET","user1","lastName"], 
	["GET","user1","firstName"], 
	["GET","user1","city"],
	["SET","user1","city","London"],
	["GET","user1","firstName"], 
	["GET","user1","lastName"], 
	["GET","user1","city"],
	["GET","lastName","user1"]
];
// console.log( solution(queries4) );

let queries5 = [
	["SET","A","BC","D"],
	["SET","AB","C","E"],
	["DELETE","BC","A"],
	["GET","BC","A"],
	["GET","A","BC"],
	["DELETE","A","BC"],
	["DELETE","A","BC"],
	["DELETE","B","AC"],
	["DELETE","A","BC"],
	["GET","A","BC"],
	["GET","AB","C"],
];
// console.log( solution(queries5) );

let queries6 = [
	["SET","foo","bar","baz"],
	["SET","foo","two","three"],
	["SET","foo","bar","boo"],
	["GET","foo","bar"],
	["GET","foo","two"],
	["SET","foo","two", "four"],
	["DELETE","foo","bar"],
	["GET","foo","bar"],
	["SET","foo","two", "four"],
	["SET","foo","two", "four"],
	["SET","foot","wo", "five"],
	["SET","foo","bar","baz"],
	["GET","foo","bar"],
	["GET","foo","two"],
];
// console.log( solution(queries6) );

let queries7 = [
	["SET","key1","filed1","value1"],
	["SET","key1","filed2","value2"],
	["SET","key2","filed1","value3"],
	["SET","key3","filed1","value4"],
	["SET","key3","filed2","value5"],
	["SET","key3","filed3","value6"],
	["SET","key1","filed2","value7"],
	["SET","key2","filed1","value8"],
	["SET","key3","filed1","value9"],
	["DELETE","key1","filed1"],
	["DELETE","key3","filed2"],
	["DELETE","key2","filed1"],
	["DELETE","key4","filed1"],
	["GET","key1","filed1"],
	["GET","key1","filed2"],
	["GET","key2","filed1"],
	["GET","key2","filed2"],
	["GET","key3","filed1"],
	["GET","key3","filed2"],
	["GET","key3","filed3"]
];
// console.log( solution(queries7) );

let queries8 = [
	["DELETE","key","key"],
	["DELETE","key","key2"],
	["GET","A","B"],
	["GET","key","key"],
	["DELETE","key","key"],
	["SET","key","key","aaaaa"],
	["SET","foo","bar","baz"],
	["DELETE","key","bar"],
	["DELETE","key","key2"],
	["GET","key","key"],
	["GET","k","eykey"],
	["SET","key","key","otherValue"],
	["GET","key","key"]
];
// console.log( solution(queries8) );

let queries9 = [
	["SET","a","b","c"],
	["SET","a","c","d"],
	["GET","c","a"],
	["SET","a","d","e"],
	["DELETE","a","c"],
	["DELETE","a","c"],
	["SET","a","e","f"],
	["DELETE","a","b"],
	["SET","a","f","g"],
	["GET","a","c"],
	["GET","a","b"],
	["GET","a","d"],
];
// console.log( solution(queries9) );

let queries10 = [
	["SET","a","a","b"],
	["SET","a","A","c"],
	["GET","a","a"],
	["DELETE","a","a"],
	["DELETE","a","A"],
	["SET","a","A","b"],
	["SET","a","A","c"],
	["GET","a","a"],
	["GET","a","A"],
];
// console.log( solution(queries10) );

