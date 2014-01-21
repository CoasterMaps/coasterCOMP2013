var blueHex;
var stage;
var staticLayer;

var worldpixelX;
var worldpixelY;

var pixelpoint;


function Overlay()
{
 
	 this.setStage = function() {

	   this.stage = new Kinetic.Stage({
	   		container: 'container',
	   		width: $(window).width()-210,
	   		height: $(window).height(),
	   		draggable: true
	   	});

	    this.eventLayer = new Kinetic.Layer();
      this.staticLayer = new Kinetic.Layer();


      /*
       * leave center point positioned
       * at the default which is at the center
       * of the hexagon
       */
      blueHex = new Kinetic.RegularPolygon({
        x: 100,
        y: this.stage.height()/2,
        sides: 6,
        radius: 70,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      });

      stage = this.stage;
      staticLayer=this.staticLayer;
      
     // pixelpointX = (60+staticLayer.getAbsolutePosition().x+stage.getAbsolutePosition().x + blueHex.getAbsolutePosition().x) / Math.pow(2, globalMap.getZoom());// / Math.pow(2,zoom);
     // var pixelpointY = (staticLayer.getAbsolutePosition().y + stage.getAbsolutePosition().y + blueHex.getAbsolutePosition().y) / Math.pow(2, globalMap.getZoom());// / Math.pow(2,zoom);

      //pixelpoint = new google.maps.Point(pixelpointX, pixelpointY);



/*      var numTiles = 1 << globalMap.getZoom();
      window.alert("hi");

      var worldCoordinate = globalMap.getProjection().fromLatLngToPoint(globalMap.getCenter());

       window.alert("hi");

      var pixelCoordinate = new google.maps.Point(
        worldCoordinate.x * numTiles,
        worldCoordinate.y * numTiles);
  
      var tileCoordinate = new google.maps.Point(
        Math.floor(pixelCoordinate.x / 256),
        Math.floor(pixelCoordinate.y / 256)); 


var pointOnMap = new google.maps.Point(tileCoordinate.x + blueHex.getAbsolutePosition().x / Math.pow(2, globalMap.getZoom()), 
  tileCoordinate.y + blueHex.getAbsolutePosition().y / Math.pow(2, globalMap.getZoom())); 


      pointLatLng = globalMap.getProjection().fromPointToLatLng(pointOnMap); the last*/

      //worldpixelY = globalMap.getProjection().fromPointToLatLng();

    //  window.alert("lat="+pointLatLng.lat() + " lng="+pointLatLng.lng());

     // saveLatLong = globalMap.getProjection().fromPointToLatLng(worldpixelX);

      this.yellowHex = new Kinetic.RegularPolygon({
        x: this.stage.width()/2,
        y: this.stage.height()/2,
        sides: 6,
        radius: 70,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      });

      /*
       * move center point to right side
       * of hexagon
       */
      this.redHex = new Kinetic.RegularPolygon({
        x: 470,
        y: this.stage.height()/2,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        offset: {
          x: 70,
          y: 0
        },
        draggable: true
      });
      

      this.text = new Kinetic.Text({
        x: 10,
        y: 10,
        text: 'Static Layer',
        fontSize: '30',
        fontFamily: 'Calibri',
        fill: 'black'
      });

	 }


	 this.getStage = function() {

	   	return this.stage;
    }

	 
	 this.getblueHex = function() {

	 	return blueHex;
	 }

	 this.setblueHex = function(newBlueHex) {

	 	blueHex = newBlueHex;
	 }


   this.uploadOverlay = function() {

      	this.staticLayer.add(this.text);
      	this.staticLayer.add(blueHex);
        this.staticLayer.add(this.yellowHex);
        this.staticLayer.add(this.redHex);
        this.stage.add(this.staticLayer);

        staticLayer = this.staticLayer;
        stage = this.stage;
    }
	
}