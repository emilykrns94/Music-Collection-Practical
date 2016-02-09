var musicCollection = angular.module('musicCollection',[]);

musicCollection.controller('musicCollectionCtrl', function($scope){
	this.doReverse = false;
	this.artists = ['Bon Jovi', 'Fall Out Boy', '3 Doors Down', 'Eagle Eye Cherry','Walking on Cars'];

	this.albums = [{
		image: 'images/bonJoviGreatHits.png',
		artist: 'Bon Jovi',
		name: 'Greatest Hits',
		genre: 'Rock',
		year: '2010'
	},{
		image: 'images/BonJoviLostHigh.jpe',
		artist: 'Bon Jovi',
		name: 'Lost Highway',
		genre: 'Rock',
		year: '2007'
	},{
		image: 'images/FOBABAP.jpg',
		artist: 'Fall Out Boy',
		name: 'American Beauty/American Psycho',
		genre: 'Punk',
		year: '2015'
	},{
		image: 'images/FOBFUTCT.jpe',
		artist: 'Fall Out Boy',
		name: 'From Under The Cork Tree',
		genre: 'Emo',
		year: '2005'
	},{
		image: 'images/3DDKrypt.jpg',
		artist: '3 Doors Down',
		name: 'Kryptonite',
		genre: 'Alternative Rock',
		year: '2002'
	},{
		image: 'images/3DDUATN.jpg',
		artist: '3 Doors Down',
		name: 'Us & The Night',
		genre: 'Hard Rock',
		year: '2016'
	},{
		image: 'images/EECST.jpg',
		artist: 'Eagle Eye Cherry',
		name: 'Save Tonight',
		genre: 'Rock',
		year: '1997'
	},{
		image: 'images/EECCGE.jpg',
		artist: 'Eagle Eye Cherry',
		name: 'Cant Get Enough',
		genre: 'Rock',
		year: '2012'
	},{
		image: 'images/WOCCMIYC.jpg',
		artist: 'Walking on Cars',
		name: 'Catch Me If You Can',
		genre: 'Indie',
		year: '2012'
	},{
		image: 'images/WOCETW.jpg',
		artist: 'Walking on Cars',
		name: 'Everything This Way',
		genre: 'Indie',
		year: '2016'
	}];
});
