(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.billboardtable = function() {
	this.initialize(img.billboardtable);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1365,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.recipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVCUIgegGIgJAGIgIABIgGgBIgGgEQgJgIgJgXQgIgXAAgVQAAgJAFgGQAFgGAHAAQANAAAOAXIALARQAIALAPAHQAOAGAQAAQATAAALgJQALgKAAgPQAAgYgvgXIgQgIQgtgWgPgSQgQgSAAgbQAAgmAagXQAagXApAAIATABIAVADIANgFIAJgBQAOAAANAWQANAWAAAZQAAAKgEAGQgFAFgIAAQgGAAgHgFQgGgFgJgOQgKgSgMgHQgLgHgQAAQgQAAgKAKQgKAJAAAPQAAANALAKQAKAKAjASIADABQBPAmAAAuQAAAogeAbQgfAaguAAg");
	this.shape.setTransform(90.2,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBrQgpgqAAg9QAAhBAqgrQAqgrBAAAQA2AAAhAfQAgAfAAA1QAAASgGAGQgFAFgVAAIhsAAQgKAAgFgFQgFgEAAgIQAAgHAFgEQAFgEAJAAIA7AAIAOgDQAEgCAAgGQAAgcgSgSQgTgTgZAAQgiAAgRAeQgQAdAAAqQAAAsAWAgQAXAgAjAAQAVAAAPgEQAOgFAOgKIAKgIQAPgLAIAAQAGAAAEAEQAEAEAAAGQAAAGgHALQgHAJgMAKQgZAUgXAJQgXAJgbAAQg8AAgogpg");
	this.shape_1.setTransform(62.9,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJDCQgPgFAAgMQAAgJAMgFIAPgHQAGgGACgWQACgXAAhHIAAguQAAhNgDgWQgCgWgHgEIgNgFQgRgFAAgKQAAgHAFgFQAFgFAMgEIAogNQASgFALAAQAHAAAEAEQAEAFAAAKIAAANIAAAGIABACIALgIIALgIQASgNAPgGQAQgHARAAQA1AAAiAoQAhAmAAA+QAABDglAsQgmAsg6AAQgZAAgIgHQgKgHAAgMQAAgFAEgFQAFgFAJAAIAHACIAJABQAgAAATgbQATgaAAgsQAAgvgVgfQgVgeggAAQgdABgRAQQgRAQAAArIAAC1IACAcQABALAEAFQADADANAEIALAEIAGAFIADAIQAAALgRAEQgRAFgogBQgpAAgOgEg");
	this.shape_2.setTransform(30,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyDLQgOgFAAgMQAAgJAOgGIAHgDQAHgEAEgJQADgKAAgWIAAgTIgBgWIAAgeQAAgtgCgMQgCgOgGgDIgOgFQgRgFAAgKQAAgGAGgFQAFgGANgFIAqgNIAdgGQAIAAADAGQAEAGAAAMIAAASIAAAMIgDBIIAAACIgBBFQAAAbACAMQADALAGADIALAFQAOAFAAALQABALgOAEQgOAFgmAAQgqAAgOgFgAgjiOQgMgLAAgOQABgQANgMQANgMATABQASgBAMALQAMALAAAPQAAAPgNAMQgOAKgSABQgTgBgMgJg");
	this.shape_3.setTransform(5.7,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaBrQgogqAAg9QAAhAArgsQAqgrA/AAQAvAAAhAYQAhAZAAAgQAAANgJAJQgJAIgPAAQgOAAgJgHQgJgHgKgXQgIgUgMgIQgKgIgSAAQgfAAgTAYQgSAZgBArQAAAyAaAgQAbAgAoAAQAOAAANgEQANgEAKgHIALgIQAPgMAJAAQAGAAADADQAEAEAAAGQAAAHgGAKQgGAKgKAIQgWAUgYAJQgYAJgdAAQg6AAgpgpg");
	this.shape_4.setTransform(-16.9,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcBrQgpgqAAg9QAAhBAqgrQAqgrBAAAQA2AAAhAfQAgAfAAA1QAAASgGAGQgFAFgVAAIhsAAQgKAAgFgFQgFgEAAgIQAAgHAFgEQAFgEAJAAIA7AAIAOgDQAEgCAAgGQAAgcgSgSQgTgTgZAAQgiAAgRAeQgQAdAAAqQAAAsAWAgQAXAgAjAAQAVAAAPgEQAOgFAOgKIAKgIQAPgLAIAAQAGAAAEAEQAEAEAAAGQAAAGgHALQgHAJgMAKQgZAUgXAJQgXAJgbAAQg8AAgogpg");
	this.shape_5.setTransform(-46.9,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA9COQgbhbgUgSQgUgSgcAAQgXAAAAgTQABgRARAAQAwAAAWgTQAXgSAAgnQAAglgXgTQgXgTgrAAQgXAAgIADQgIACgDAJIgDAZIgCA5IAAB9IADBVQABAUAFAEIANAGQASAGAAAMQAAANgQAFQgQAEgtAAQgsAAgQgEQgQgFAAgNQAAgLASgHIAMgGQAGgFADgiQACgiAAhZIgChrQgCgpgEgFQgDgEgPgHQgPgGAAgLQAAgKAJgFQAIgFASAAIA/AAIA4gBIAtgBQA+AAAiAaQAgAbAAAyQAAAlgVAcQgXAbgnALIAAAEQAfAFARATQASATANAuIAIAcQALAsARAAIAIAAIAKgBQAFAAAFAFQAEAEAAAGQAAANgQAJQgQAIgbAAQg5AAgThCg");
	this.shape_6.setTransform(-81.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.recipes, new cjs.Rectangle(-104.9,-35.7,209.9,71.6), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBMQgRgGgNgMIgBgDIgBgDQAAgDACgCIAFgGIAFgEIAGgCQAEAAAEADIAKAHIANAHQAIADAKAAIAMgBQAGgBAGgDQAGgDADgEQAEgFAAgHQAAgGgEgEQgFgEgHgCIgQgDIgSgDIgSgEQgKgCgHgEQgHgFgEgIQgFgIAAgMQAAgMAHgJQAFgJAKgGQAKgGALgDQAMgDAJAAIAQACIAQADIAPAGQAHAEAGAGIAAACIABADQAAADgCADIgFAFIgFADIgHACIgEgBQgJgHgJgFQgKgEgKAAIgLABQgFABgFADQgFACgDAEQgEAFAAAGQAAAJAHADQAIAEAMACIAXADQANACALAEQAMAFAHAHQAIAJAAARQAAANgHAKQgGAKgLAHQgJAGgMADQgNAEgLAAQgRAAgRgHg");
	this.shape.setTransform(160.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BPIgFgCQgDgBAAgDIAAiRQAAgDADgCIAEgBIBvAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIACAFIAAAFIAAAFIgBAGQgBACgDABIhSAAQgCAAgDADQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAAVQAAAEACACQACABAEAAIA0AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIABAGIABAHIAAADQAAAHgGACIg0AAQgCAAgDACQgDADAAADIAAAYQAAADACACQACACAEABIBQAAQAFACAAAHIABAEIgBAHIgCAFQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(145.4,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABSIgFAAQgGAAgDgFIAAiZQACgCACgBIAGgCIAFAAIAFAAQAHAAACAGIAACXQgCADgCABIgGACg");
	this.shape_2.setTransform(133.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBQIgEgBIgDgCIgCgBIgbgqQgCgDgCgCQgDgCgFAAIgTAAQgEAAgCACQgDACAAADIABAoQAAADgDABIgFABIgHABIgFAAQgFAAgCgCQgDgBAAgGIABiRQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgBADAAIBCAAQAMAAALADQAKAEAIAHQAHAGAEAKQAFALAAAMQAAAOgFAIQgFAHgGAFIgMAJQgFADAAADIABAFIAGAIIAJANIAIAMQAEAGAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgFADIgGACIgFABgAgggyQgEACAAAEIAAAjQAAAFAEACQADACAEAAIAgAAQAGAAAFgBIAKgFQAEgDADgFQACgFAAgHQAAgNgJgHQgEgDgGgBQgFgCgGAAIggAAQgEAAgDACg");
	this.shape_3.setTransform(122,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBRIgQgFQgIgDgHgFIgMgKQgMgKgGgQQgEgIgBgHQgCgJAAgIQAAgIACgIQABgIAEgIQAGgPAMgLQAGgFAGgFIAPgIIAQgEQAIgBAIAAIARABQAJABAHADQAQAHALALQAMALAGAPQAHAPAAARQAAAIgCAJQgBAHgEAIQgGAQgMAKQgLALgQAHQgHADgJACQgIABgJABQgIgBgIgBgAgTgyQgKAFgIAHQgHAIgFAJQgEAKAAALQAAALAEAKQAFALAHAGQAIAIAKAEQAJAFAKAAQALAAAJgFQAKgEAIgIQAHgGAFgLQAEgKAAgLQAAgLgEgKQgFgJgHgIQgIgHgKgFQgJgEgLAAQgKAAgJAEg");
	this.shape_4.setTransform(103.7,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA1BQIgHgCQgEgCAAgEIAAhIQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgBADIgaAoQgCAFgEAAIgFgBIgEgEIgWgoQgBgCgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAABHQgDAGgEABIgJABIgFgBIgEgBIgDgDQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAiPQACgFAEgBIAJAAIAFABQAEABABACIAlBAQADAEAFAAIAEgBIAEgEIAmg+QAEgGAIAAIAHABQACAAACAEIAACSQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFADIgGABg");
	this.shape_5.setTransform(85.4,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BPIgFgCQgDgBAAgDIAAiRQAAgDADgCIAEgBIBvAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIACAFIAAAFIAAAFIgBAGQgBACgDABIhSAAQgCAAgDADQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAAVQAAAEACACQACABAEAAIA0AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIABAGIABAHIAAADQAAAHgGACIg0AAQgCAAgDACQgDADAAADIAAAYQAAADACACQACACAEABIBQAAQAFACAAAHIABAEIgBAHIgCAFQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_6.setTransform(69.4,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA1BQIgHgCQgEgCAAgEIAAhIQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgBADIgaAoQgCAFgEAAIgFgBIgEgEIgWgoQgBgCgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAABHQgDAGgEABIgJABIgFgBIgEgBIgDgDQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAiPQACgFAEgBIAJAAIAFABQAEABABACIAlBAQADAEAFAAIAEgBIAEgEIAmg+QAEgGAIAAIAHABQACAAACAEIAACSQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFADIgGABg");
	this.shape_7.setTransform(51.9,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBMQgRgGgMgMIgCgDIgBgDQAAgDACgCIAFgGIAGgEIAFgCQAEAAADADIAKAHIAOAHQAIADAKAAIALgBQAHgBAGgDQAFgDAFgEQADgFAAgHQAAgGgEgEQgFgEgHgCIgRgDIgRgDIgTgEQgIgCgIgEQgHgFgFgIQgEgIAAgMQAAgMAGgJQAHgJAJgGQAKgGALgDQAMgDAKAAIAPACIAQADIAPAGQAHAEAFAGIACACIAAADQAAADgCADIgEAFIgHADIgGACIgEgBQgJgHgJgFQgKgEgKAAIgKABQgGABgGADQgEACgEAEQgDAFAAAGQAAAJAIADQAHAEALACIAYADQANACALAEQAMAFAIAHQAHAJAAARQAAANgGAKQgHAKgKAHQgLAGgMADQgMAEgLAAQgRAAgRgHg");
	this.shape_8.setTransform(28.2,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBNQgNgFgJgJQgKgJgGgNQgCgFgBgHIgCgPIAAgrIAAgsQAAgDADgBIAEgDIAGAAIAGAAIAGACQAEABAAAEIAABRQAAAJADAIQADAJAFAHQAFAGAHAEQAJADAIAAQAKAAAHgDQAIgEAGgGQAFgHADgJQADgIAAgJIAAhRQAAgEACgCQAEgCAEAAIAGAAIAFAAIAGADQABABAAAEIAABXIgBAPQgBAHgEAFQgFANgJAJQgKAJgNAFQgMAFgPAAQgNAAgNgFg");
	this.shape_9.setTransform(11.5,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQBRIgQgFQgIgDgHgFIgMgKQgMgKgGgQQgEgIgBgHQgCgJAAgIQAAgIACgIQABgIAEgIQAGgPAMgLQAGgFAGgFIAPgIIAQgEQAIgBAIAAIARABQAJABAHADQAQAHALALQAMALAGAPQAHAPAAARQAAAIgCAJQgBAHgEAIQgGAQgMAKQgLALgQAHQgHADgJACQgIABgJABQgIgBgIgBgAgTgyQgKAFgIAHQgHAIgFAJQgEAKAAALQAAALAEAKQAFALAHAGQAIAIAKAEQAJAFAKAAQALAAAJgFQAKgEAIgIQAHgGAFgLQAEgKAAgLQAAgLgEgKQgFgJgHgIQgIgHgKgFQgJgEgLAAQgKAAgJAEg");
	this.shape_10.setTransform(-6.8,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABSIgFAAQgGAAgDgFIAAiZQACgCACgBIAGgCIAFAAIAFAAQAHAAACAGIAACXQgCADgCABIgGACg");
	this.shape_11.setTransform(-19.8,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBRIgQgFQgIgDgHgEIgMgKQgGgFgEgHQgFgHgDgHQgHgPAAgSQAAgRAHgPQADgHAFgHQAEgHAGgFQALgLAQgGIAQgFQAHgCAJAAQAIAAAJACQAKACAIAEQAJAEAIAFQAHAGAFAHIABADQAAAFgCACIgHAFIgFADQgCACgDAAQgDAAgDgEIgJgHQgFgEgHgDQgIgEgLAAQgKAAgKAFQgKAEgHAIQgIAHgEAKQgEAKAAAKQAAALAEAKQAEAKAIAIQAHAHAKAEQAKAFAKAAQAMAAALgFQAKgFAIgJIAGgBIAFABIAGAEIAFAFQACADAAACIAAADIgOANQgHAFgJAEIgRAGQgJACgJAAQgJAAgHgCg");
	this.shape_12.setTransform(-32,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAABSIgFAAQgGAAgDgFIAAiZQACgCACgBIAGgCIAFAAIAFAAQAHAAACAGIAACXQgCADgCABIgGACg");
	this.shape_13.setTransform(-44,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BRQgDAAgCgDQgCgDAAgCIAAiQQAAgEACgBIAEgDIAGgBIAFAAQAFAAADACQADACACAEIAABvIABAFIACAFQAEAEAGAAIBIAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIADAEIABAFIAAAFQAAAFgCADQgBAEgGAAg");
	this.shape_14.setTransform(-54.5,-0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BPIgFgCQgDgBAAgDIAAiRQAAgDADgCIAEgBIBvAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIACAFIAAAFIAAAFIgBAGQgBACgDABIhSAAQgCAAgDADQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAAVQAAAEACACQACABAEAAIA0AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIABAGIABAHIAAADQAAAHgGACIg0AAQgCAAgDACQgDADAAADIAAAYQAAADACACQACACAEABIBQAAQAFACAAAHIABAEIgBAHIgCAFQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-69.7,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCBPIgGgCQgDgBAAgDIAAiPQAAgEADgCQABgCAFAAIA6AAIAQABIAQAFQAPAFAMAKQAMALAGAOQADAIACAIQACAIAAAIQAAASgHAOQgDAIgFAGQgFAHgFAEQgGAGgHADIgOAIQgQAFgQAAgAgrgwQgDADABADIAABXQAAACACACQADACADABIAdAAQAKAAAKgEQAKgEAIgHQAIgGAFgKQADgJAAgMQAAgLgDgJQgFgKgIgGQgIgHgKgDQgKgFgKAAIgcAAQgEAAgDADg");
	this.shape_16.setTransform(-86.8,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1BPIgFgCQgDgBAAgDIAAiRQAAgDADgCIAEgBIBvAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIACAFIAAAFIAAAFIgBAGQgBACgDABIhSAAQgCAAgDADQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAAVQAAAEACACQACABAEAAIA0AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIABAGIABAHIAAADQAAAHgGACIg0AAQgCAAgDACQgDADAAADIAAAYQAAADACACQACACAEABIBQAAQAFACAAAHIABAEIgBAHIgCAFQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_17.setTransform(-110.6,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAlBSQgEgCgCgCIgog8QgBgCgEgBIgGgCQgEAAgEACQgFACAAAFIAAAxQAAAEgCABIgGADIgGABIgGAAQgJAAAAgIIAAiVIAEgDIAFgBIAFAAIAFAAQAHgBADAGIAAAyQAAADAEACQADACADAAQAEAAADgEIAsg2IADgBIADgBIAFACIAGAEIAFADQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBADIgnAtIgCAEIAAAFIAAADIABAEIAzBEIAAADIABACQAAACgDACIgFAEIgGACIgFAAg");
	this.shape_18.setTransform(-126.1,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA/BQIgFAAIgJgBQgEgBgBgEIgJgVIgDgEQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIg1AAIgCABIgDABIgDABIAAACIgJAVIgDADIgFABIgEABIgFAAIgDAAIgGAAIgEgCQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIBBiVQABgCADgBIAFgBIAGABQAFAAABADIA+CVIABABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAIgFACgAgBgYIgCACIgCAEIgCAHIgFAJIgDAIIgDAIIgCADIACAEQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAgAAIADgBIABgEIgCgGIgGgNIgFgNIgEgIQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_19.setTransform(-142.4,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA1BQIgHgCQgEgCAAgEIAAhIQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgBADIgaAoQgCAFgEAAIgFgBIgEgEIgWgoQgBgCgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAABHQgDAGgEABIgJABIgFgBIgEgBIgDgDQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAiPQACgFAEgBIAJAAIAFABQAEABABACIAlBAQADAEAFAAIAEgBIAEgEIAmg+QAEgGAIAAIAHABQACAAACAEIAACSQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFADIgGABg");
	this.shape_20.setTransform(-159.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.makedeliciousmemories, new cjs.Rectangle(-170.1,-13.6,340.2,27.2), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.holidaytips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBWQgGgCAAgEIAGgLIAGgJIAQgfQAGgPAAgFIgBgHIgKgFQgPgHgHgKQgHgKAAgPQAAgTAMgMQAMgNASAAQASABAMAQQANARAAAZQAAATgIAUQgHAVgTAeIgOAXQgHAGgFAAQgIAAgFgDg");
	this.shape.setTransform(165,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVCUIgegGIgJAGIgIABIgGgBIgGgEQgJgIgJgXQgIgXAAgVQAAgJAFgGQAFgGAHAAQANAAAOAXIALARQAIALAPAHQAOAGAQAAQATAAALgJQALgKAAgPQAAgYgvgXIgQgIQgtgWgPgSQgQgSAAgbQAAgmAagXQAagXApAAIATABIAVADIANgFIAJgBQAOAAANAWQANAWAAAZQAAAKgEAGQgFAFgIAAQgGAAgHgFQgGgFgJgOQgKgSgMgHQgLgHgQAAQgQAAgKAKQgKAJAAAPQAAANALAKQAKAKAjASIADABQBPAmAAAuQAAAogeAbQgfAaguAAg");
	this.shape_1.setTransform(143.8,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJDCQgPgFAAgMQAAgJAMgFIAPgHQAGgGACgWQACgXAAhHIAAguQAAhNgDgWQgCgWgHgEIgNgFQgRgFAAgKQAAgHAFgFQAFgFAMgEIAogNQASgFALAAQAHAAAEAEQAEAFAAAKIAAANIAAAGIABACIALgIIALgIQASgNAPgGQAQgHARAAQA1AAAiAoQAhAmAAA+QAABDglAsQgmAsg6AAQgZAAgIgHQgKgHAAgMQAAgFAEgFQAFgFAJAAIAHACIAJABQAgAAATgbQATgaAAgsQAAgvgVgfQgVgeggAAQgdABgRAQQgRAQAAArIAAC1IACAcQABALAEAFQADADANAEIALAEIAGAFIADAIQAAALgRAEQgRAFgogBQgpAAgOgEg");
	this.shape_2.setTransform(113.8,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyDLQgOgFAAgMQAAgJAOgGIAIgDQAGgEAEgJQACgKABgWIAAgTIgBgWIAAgeQAAgtgCgMQgCgOgGgDIgOgFQgRgFAAgKQAAgGAGgFQAFgGAMgFIArgNIAdgGQAIAAADAGQAEAGAAAMIAAASIAAAMIgDBIIAAACIgBBFQAAAbADAMQACALAHADIAKAFQAOAFAAALQAAALgNAEQgOAFgmAAQgqAAgOgFgAgjiOQgLgLgBgOQAAgQAOgMQANgMATABQASgBAMALQAMALAAAPQAAAPgNAMQgOAKgSABQgTgBgMgJg");
	this.shape_3.setTransform(89.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7DLQgQgGAAgMQAAgMAPgFQAPgHADgDQADgGACguIACiGIgBhLIgDgtQAAgIgFgDQgFgCgMAAIgMAAQgUAAgLAFQgKAEgIALIgJATIgJAUIgIAJQgFADgFAAQgJAAgDgIQgEgHAAgSQAAglAIgXQAJgXAOAAIADAAQAXAEAiAAICnAAQAiAAAXgEIADAAQAOAAAIAXQAJAXAAAlQAAASgEAHQgEAIgJAAIgJgDIgIgJIgJgUIgJgTQgIgLgLgEQgLgFgUAAIgLAAQgMAAgFACQgFADgBAIIgCAuIgBBKIACCGQABAuAEAGQADADAPAHQAPAFAAAMQAAAMgQAGQgQAEgsAAQgrAAgQgEg");
	this.shape_4.setTransform(62.8,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiDC8QgNgMAAgSQAAgOAKgKQAKgLAOAAIAMADIAJAGIAIAKQAHAMAGAAQAOAAAPgVQAPgVAAgWQAAgZgUgtIgDgHIgthjIgbg3QgFgKgQgHIgBAAQgJgEgEgEQgDgEAAgGQAAgNAPgFQAPgFApAAQAqAAAOAFQAOAEAAAMIgCAJIgFAFIgLAFQgKAEAAAFIAFAVIAXA5IAXA2QAHANAEAAQADAAAHgNIASgtIAVg4QAHgVAAgHQAAgIgQgJQgQgJAAgHQAAgKANgEQANgFAgAAQAiAAAMAFQAMAEAAAMQAAAKgQAEIgMAFQgQAIgSAxIgIAVIglBbQguB2geAkQgeAkgpAAQgVAAgOgMg");
	this.shape_5.setTransform(14.3,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyCGIgOgQIgNAHQgiAXgkAAQgpAAgagXQgagZAAgnQAAgtAigZQAggaA8ABQAOAAAHAEQAHAEAAALQAAAQgTAAQgcAAgRANQgSAOAAAYQABAXAPAOQAOANAZAAQAcAAAMgMQALgNAAgeIAAhrQAAgZgLgNQgLgOgTAAQgOAAgMAGQgMAGgLANIgGAIQgSAWgTgBQgLAAgHgGQgHgIAAgMQAAgbAigSQAhgSAzgBQAgAAAWAJQAXAIAMAQQAIALAEARQADASAAApIAABaQAAAQADAIQADAIAGACIAIACQATAFgBAJQABAOgUALQgSALgaAAQgNAAgOgOg");
	this.shape_6.setTransform(-15.2,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah8CsQghgngBg9QAAhFAngrQAmgsA+AAIATADQAJACAFAHQAEAGAAAHQABAPgTABIgIgBIgIAAQgfAAgTAZQgSAZgBAtQABAvAUAfQAUAdAhAAQAdAAAQgPQAQgSABgfIAAhOIAAiCQAAgUgEgHQgEgJgKgDIgIgDQgRgFAAgJQAAgIAGgGQAHgFAWgIIAfgJIAbgEQAJAAAFAGQAEAGAAAMIgBAPIgCCuIABB3QADAbAEAEIAUAHQAPADAAAKQAAANgqAOIgbAHIgXACQgHAAgEgEQgEgEABgKIAAgOIgBgFIgCgCIgIAGIgNAJQgRANgQAGQgPAHgSgBQg1AAgigmg");
	this.shape_7.setTransform(-46.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyDLQgOgFAAgMQAAgJAOgGIAHgDQAHgEAEgJQADgKAAgWIAAgTIgBgWIAAgeQAAgtgCgMQgCgOgGgDIgOgFQgRgFAAgKQAAgGAGgFQAFgGANgFIAqgNIAdgGQAIAAADAGQAEAGAAAMIAAASIAAAMIgDBIIAAACIgBBFQAAAbACAMQADALAGADIALAFQAOAFAAALQABALgOAEQgOAFgmAAQgqAAgOgFgAgjiOQgMgLAAgOQAAgQAOgMQANgMATABQASgBAMALQAMALAAAPQAAAPgNAMQgOAKgSABQgTgBgMgJg");
	this.shape_8.setTransform(-73.1,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwDMQgNgEAAgNQAAgJALgFIAPgIQAFgEACgSIACg4IAAgsIgBg1IAAgWQAAhHgCgVQgDgVgGgDIgRgGQgSgFAAgKQAAgIAGgEQAFgFAUgHIAmgLIAdgEQAIAAAEAGQADAFAAANIAAAWQgDBlAABnIACBhQABAUAFAGIAQAIQANAFAAALQAAALgOAFQgOAEglAAQgrAAgOgFg");
	this.shape_9.setTransform(-89.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhnBqQgogpAAhAQAAg/AqgrQArgqA/AAQA9AAAnAoQAnAnAAA/QAABBgqAsQgqAsg9AAQg9AAgpgqgAg2hUQgRAXAAAmQAAA3AYAmQAYAmAhAAQAcAAASgXQARgYAAgmQAAg3gYglQgZgmggAAQgcAAgSAXg");
	this.shape_10.setTransform(-113.3,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA/DJQgPgGAAgMQAAgMARgGIANgHQAFgDACgSIAChDIgBgnIgCgLQgDgGgOgCQgOgCg1gBIg8ACQgQACgFAEIgDAIIgBAWIAAAXIACBDQACASAEADIANAHQARAGAAAMQAAAMgPAGQgQAEgtAAQgsAAgQgEQgQgGAAgMQAAgMARgGIANgHQAGgEADgkQACgkAAhVIgChqQgDgqgDgFQgDgEgPgGQgPgHAAgLQAAgMANgEQAMgEAzAAQAyAAANAEQANAEAAAMQAAALgRAHIgNAGQgFAEgCASIgCBTQAAAMALAEQALAEApAAIAXAAIA8gCQARgCAFgEIAEgFIABgLIAAgNIgChGQgCgPgFgDIgNgGQgRgHAAgLQAAgMANgEQANgEAyAAQAzAAANAEQAMAEAAAMQAAAMgSAGIgMAGQgGAEgDAnQgCAnAABLIACBuQACArAEAGQADADAPAHQAPAFAAAMQAAAMgQAGQgQAEgsAAQgtAAgQgEg");
	this.shape_11.setTransform(-151,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaytips, new cjs.Rectangle(-174.5,-35.7,349,71.6), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhK2gTDMCVtAAAMAAAAmHMiVtAAAg");
	this.shape.setTransform(0,0,1.011,1.02);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-485.5,-125.5,971,251), null);


(lib.getinspiredtable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardtable();
	this.instance.parent = this;
	this.instance.setTransform(-682.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredtable, new cjs.Rectangle(-682.5,-125,1365,250), null);


(lib.getinspiredctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsYDBIAAmAIYxAAIAAGAg");
	this.shape.setTransform(0,0,1,1.019);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredctarectangle, new cjs.Rectangle(-79.2,-19.6,158.6,39.3), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AgxA5IAAhxIAmAAQALAAALAEQALADAIAHQAJAHAGAKIAEAMQABAHAAAGQAAAHgBAHIgEALIgHAKIgIAIQgIAHgLADQgOAEgIAAgAghArIATAAQAKAAAIgDQAJgDAHgFQAGgGAEgIIACgIIABgKIgBgJIgCgIQgEgIgGgGQgHgFgJgDQgIgDgKAAIgTAAg");
	this.shape.setTransform(47.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgkA5IAAhxIBHAAIAAAOIg4AAIAAAiIA1AAIAAANIg1AAIAAAmIA6AAIAAAOg");
	this.shape_1.setTransform(36.5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AAVA5IgcgzIgRAAIAAAzIgPAAIAAhxIAkAAQAHAAAHACQAIACAFAEQAGADADAGQADAGAAAJQAAAMgIAIQgDAEgFABQgFADgGABIAfA0gAgYgGIATAAIAJgBIAIgDIAGgGQACgDAAgFQAAgFgCgEIgFgFIgIgDIgJgBIgUAAg");
	this.shape_2.setTransform(27,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_3.setTransform(19.4,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgkA5IAAhxIAiAAQAIAAAHACQAIACAFAEQAFAEAEAGQADAGgBAIQAAAIgDAHQgDAGgFADQgGADgIACQgHACgIAAIgSAAIAAAygAgVgFIARAAIAJgBIAJgEQADgCACgDQACgEAAgFQAAgFgCgEIgFgFIgJgDIgJgBIgRAAg");
	this.shape_4.setTransform(12.9,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgVA4QgKgFgGgIIAMgLQAEAHAHADQAGAEAIAAIAHgBQAEgBAEgDQADgCACgEQACgDAAgFQAAgGgCgDQgCgDgEgDQgEgDgFgBIgJgEIgLgDQgFgCgEgEQgEgDgDgFQgCgGAAgHQAAgJADgGQAEgGAFgEQAGgEAHgCIANgCIAJABIAJADQAJADAFAHIgLAKQgEgEgFgDQgGgDgHAAIgHABIgHADIgFAGQgCADAAAFQAAAEABAEIAFAFIAIAEIAIADIAMAEQAFACAFADQAFAEADAFQADAFAAAJQAAAJgDAGQgDAHgGAEQgFAEgHACQgIACgGAAQgLAAgKgDg");
	this.shape_5.setTransform(3.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AAcA5Ig7hcIAAAAIAABcIgQAAIAAhxIAUAAIA7BaIAAAAIAAhaIAQAAIAABxg");
	this.shape_6.setTransform(-7.5,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_7.setTransform(-15.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63900").s().p("AgHA5IAAhjIgkAAIAAgOIBXAAIAAAOIgkAAIAABjg");
	this.shape_8.setTransform(-26.5,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63900").s().p("AglA5IAAhxIBIAAIAAAOIg4AAIAAAiIA0AAIAAANIg0AAIAAAmIA7AAIAAAOg");
	this.shape_9.setTransform(-35.5,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63900").s().p("AgOA3QgMgEgHgJQgJgHgEgLQgEgLAAgNQAAgMAEgMQAEgLAJgHIAJgHIAKgFQALgFAMAAIAMABIAMAEQALAEAGAGIgLALQgEgFgIgEIgIgCIgKgBQgJAAgIAEQgIAEgGAFQgFAHgDAIQgDAJAAAIQAAAJADAJQADAIAFAGQAGAGAIADQAIAEAKAAQAHAAAHgBQAHgCAFgDIAAgfIgZAAIAAgNIAoAAIAAA2QgJAFgKADQgOACgJAAQgMABgLgFg");
	this.shape_10.setTransform(-47.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-55.2,-11.8,110.4,23.7), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.ctatextrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxA5IAAhxIAnAAQAKAAAKAEQALADAJAHQAJAHAFAKIAFAMQABAHAAAGQAAAHgBAHIgFALIgGAKIgIAIQgJAHgLADQgNAEgHAAgAgiArIAVAAQAJAAAJgDQAIgDAGgFQAHgGADgIIADgIIABgKIgBgJIgDgIQgDgIgHgGQgGgFgIgDQgJgDgJAAIgVAAg");
	this.shape.setTransform(47.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBIAAIAAAOIg4AAIAAAiIA0AAIAAANIg0AAIAAAmIA7AAIAAAOg");
	this.shape_1.setTransform(36.6,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVA5IgcgzIgRAAIAAAzIgPAAIAAhxIAkAAQAHAAAHACQAIACAFAEQAGADADAGQADAGAAAJQAAAMgIAIQgDAEgFABQgFADgGABIAfA0gAgYgGIATAAIAJgBIAIgDIAGgGQACgDAAgFQAAgFgCgEIgFgFIgIgDIgJgBIgUAAg");
	this.shape_2.setTransform(27,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_3.setTransform(19.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA5IAAhxIAjAAQAIAAAIACQAHACAFAEQAFAEADAGQADAGABAIQAAAIgEAHQgDAGgGADQgFADgHACQgIACgIAAIgSAAIAAAygAgVgFIARAAIAKgBIAIgEQADgCADgDQACgEAAgFQAAgFgCgEIgGgFIgIgDIgKgBIgRAAg");
	this.shape_4.setTransform(13,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA4QgKgFgGgIIAMgLQAEAHAHADQAGAEAIAAIAHgBQAEgBAEgDQADgCACgEQACgDAAgFQAAgGgCgDQgCgDgEgDQgEgDgFgBIgJgEIgLgDQgFgCgEgEQgEgDgDgFQgCgGAAgHQAAgJADgGQAEgGAFgEQAGgEAHgCIANgCIAJABIAJADQAJADAFAHIgLAKQgEgEgFgDQgGgDgHAAIgHABIgHADIgFAGQgCADAAAFQAAAEABAEIAFAFIAIAEIAIADIAMAEQAFACAFADQAFAEADAFQADAFAAAJQAAAJgDAGQgDAHgGAEQgFAEgHACQgIACgGAAQgLAAgKgDg");
	this.shape_5.setTransform(3.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA5Ig7hcIgBAAIAABcIgPAAIAAhxIAVAAIA5BaIABAAIAAhaIAQAAIAABxg");
	this.shape_6.setTransform(-7.4,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_7.setTransform(-15.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHA5IAAhjIgkAAIAAgOIBXAAIAAAOIgkAAIAABjg");
	this.shape_8.setTransform(-26.5,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBHAAIAAAOIg4AAIAAAiIA1AAIAAANIg1AAIAAAmIA6AAIAAAOg");
	this.shape_9.setTransform(-35.5,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA3QgKgEgJgJQgHgHgFgLQgFgLAAgNQAAgMAFgMQAFgLAHgHIAJgHIALgFQALgFAMAAIANABIALAEQAKAEAIAGIgLALQgGgFgIgEIgIgCIgJgBQgJAAgIAEQgIAEgFAFQgGAHgDAIQgDAJAAAIQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAGgBQAHgCAFgDIAAgfIgaAAIAAgNIAqAAIAAA2QgKAFgKADQgPACgIAAQgMABgMgFg");
	this.shape_10.setTransform(-47.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctatextrollover, new cjs.Rectangle(-55.2,-11.8,110.5,23.7), null);


(lib.ctarolloverrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AsWDEIAAmHIYtAAIAAGHg");
	this.shape.setTransform(0.3,0.1,1.006,1.013);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarolloverrectangle, new cjs.Rectangle(-79.2,-19.7,159.2,39.8), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.andmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBrQgpgqAAg9QAAhBAqgrQAqgrBAAAQA2AAAhAfQAgAfAAA1QAAASgGAGQgFAFgVAAIhsAAQgKAAgFgFQgFgEAAgIQAAgHAFgEQAFgEAJAAIA7AAIAOgDQAEgCAAgGQAAgcgSgSQgTgTgZAAQgiAAgRAeQgQAdAAAqQAAAsAWAgQAXAgAjAAQAVAAAPgEQAOgFAOgKIAKgIQAPgLAIAAQAGAAAEAEQAEAEAAAGQAAAGgHALQgHAJgMAKQgZAUgXAJQgXAJgbAAQg8AAgogpg");
	this.shape.setTransform(110,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVCNQgPgFAAgMQAAgKAOgEIAIgEQAHgEADgJQADgKAAgWIAAgTIgBgWIAAgRQAAg0gBgQQgDgPgGgEIgNgFQgRgFAAgKQAAgHAFgEQAFgGANgFIAmgMIAZgFQAOAAAFAnIAAAFIADACQAOgXAQgMQAQgNAQAAQAUAAALANQAMALAAAUQAAAUgJAMQgJAKgQABIgPgDIgLgIIgHgMQgDgHgDAAQgUAAgIAcQgGAagBBWQAAAZADAMQADANAIADIALAEQARAGAAALQABAKgRAFQgPAFgnAAQgqAAgOgFg");
	this.shape_1.setTransform(84.6,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhnBqQgogpAAhAQAAg/AqgrQArgqA/AAQA9AAAnAoQAnAnAAA/QAABBgqAsQgqAsg9AAQg9AAgpgqgAg2hUQgRAXAAAmQAAA3AYAmQAYAmAhAAQAcAAASgXQARgYAAgmQAAg3gYglQgZgmggAAQgcAAgSAXg");
	this.shape_2.setTransform(56.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABqDJQgPgGAAgMQgBgMATgGIALgHQAGgDACgNQABgMAAgnIAAgOIAAh6IgBhHIgjBeQhUDagTgBQgIABgQgeQgRgegohdIg+iOIgDBwIgBBMIACA1QACANAEADIAMAHQATAGgBAMQAAAMgOAFQgOAFgkAAQgfAAgOgFQgNgFAAgMQAAgKAPgIQAPgHACgGQADgNAFhKQAEhIAAhZIAAgKQAAgegDgKQgCgKgGgEIgNgGQgTgGAAgMQAAgMANgEQANgEApAAIApABIALACQAFAEAVAzIAQAoIAIAVQBFCpAFABQAGAAAZg9QAag9AjhkIAGgSQAKgeAJgKQAEgFAMgCIAmgCQAnAAAMAEQANAEAAAMQAAAMgRAGIgIACQgHAGgEALQgCALAAArIACCiQADBJADAKQABAHANAFIAGACIALAHQADAEABAGQgBAMgPAGQgQAEguAAQgrAAgQgEg");
	this.shape_3.setTransform(15,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah8CsQghgngBg9QAAhFAngrQAmgsA+AAIATADQAJACAFAHQAEAGAAAHQABAPgTABIgIgBIgIAAQgfAAgTAZQgSAZAAAtQAAAvAUAfQAUAdAhAAQAdAAAQgPQARgSAAgfIAAhOIAAiCQAAgUgEgHQgEgJgKgDIgIgDQgRgFAAgJQAAgIAGgGQAHgFAWgIIAfgJIAbgEQAJAAAFAGQAEAGAAAMIgBAPIgCCuIABB3QACAbAFAEIATAHQAQADAAAKQAAANgqAOIgcAHIgVACQgJAAgDgEQgDgEAAgKIAAgOIgBgFIgCgCIgIAGIgNAJQgRANgPAGQgRAHgRgBQg1AAgigmg");
	this.shape_4.setTransform(-42.7,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiLCNQgOgFAAgMQAAgJAOgGIAHgDQAHgEADgJQADgKAAgWIAAgTIAAgWIAAgdQAAgtgCgNQgDgOgFgDIgOgFQgRgFAAgKQAAgGAGgFQAFgGAMgFIApgNIAegFQAHAAAEAFQAEAEAAAJIAAAUIAAACIACABIABAAIABgBIAHgGIAGgFQAfgeAjAAQAUABATAIQATAJANAPQANAQAGAVQAFAWAAAuIAAAmIAAASIAAAQQAAAVADAIQADAIAHAEIAHADQAOAGAAAJQAAAMgNAFQgNAEgsAAQgoAAgNgEQgOgFAAgKQAAgLAOgFIALgFQAHgEACgMQADgNAAgeQAAhagLgXQgMgXgeAAQgOABgOAIQgOAKgHAPQgHAMgCAWQgDAWAAA4QAAAcADAJQACAJAGADIALAFQAOAFAAALQAAALgOAEQgOAFglAAQgrAAgOgFg");
	this.shape_5.setTransform(-77.7,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzCGIgQgQIgLAHQgkAXgiAAQgqAAgagXQgZgZAAgnQAAgtAggZQAigaA7ABQAOAAAHAEQAIAEAAALQAAAQgVAAQgbAAgRANQgRAOAAAYQAAAXAOAOQAPANAaAAQAaAAAMgMQAMgNAAgeIAAhrQAAgZgLgNQgLgOgTAAQgOAAgMAGQgMAGgLANIgGAIQgRAWgTgBQgMAAgGgGQgIgIABgMQAAgbAggSQAigSA0gBQAfAAAWAJQAWAIANAQQAIALAEARQAEASAAApIAABaQAAAQADAIQACAIAGACIAJACQARAFABAJQgBAOgSALQgUALgZAAQgNAAgNgOg");
	this.shape_6.setTransform(-109.6,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andmore, new cjs.Rectangle(-127.3,-35.7,254.6,71.6), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(130.4,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-11.1,85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(130.6,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-48.8,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-44.3,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgngCgNgHQgUgMgBggIAAljQAAghALgMQAIgMAdgEIAdgDQBKAAArA/QArA+AABvQgBBxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(64.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(6.9,30.2);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(69.3,-37.3,1,1,0,0,0,20.2,28.3);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,-54.3,1,1,0,0,0,33.5,46.6);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98.3,30.1,1,1,0,0,0,22.6,28.3);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.6,165.6);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,88.2,1,1,0,0,0,10.5,10.3);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.7,88.2,1,1,0,0,0,9.6,10.3);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-78.1,88.3,1,1,0,0,0,12.2,10.3);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.1,30.3,1,1,0,0,0,19,29.6);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-20.9,30.2,1,1,0,0,0,55.8,29.5);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(130.6,59.1,1,1,0,0,0,1.9,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-74.6,-36.8,1,1,0,0,0,63.5,28.9);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-11,88.3,1,1,0,0,0,9.5,10.3);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(52.4,88.3,1,1,0,0,0,9,10.2);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(81.3,88.3,1,1,0,0,0,9.1,10.2);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(130.4,59.1,1,1,0,0,0,4.4,4.4);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(62.2,30.2,1,1,0,0,0,26.9,29.5);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(114.4,-37.3,1,1,0,0,0,21.9,28.3);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-175,-175,350,350), null);


(lib.ctarolloverorange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// get-inspired
	this.instance = new lib.ctatextrollover();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

	// Layer 1
	this.instance_1 = new lib.ctarolloverrectangle();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-19.7,159.2,39.8);


// stage content:
(lib.billboardgetinspired = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(23).call(this.frame_99).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(486.2,125.3,4.708,0.381,0,0,0,0.3,0.8);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(104));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486.8,125.1,5.906,0.417,0,0,0,0.4,0.2);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.4,x:488.7,alpha:0},9).wait(95));

	// white-logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(851.8,50.6,0.348,0.348);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.01,scaleY:0.01},0).to({regY:1.2,scaleX:0.47,scaleY:0.47,y:51.1,alpha:1},6,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.41,scaleY:0.41,y:50.6},7,cjs.Ease.get(1)).wait(82));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/UE7IAAnpMBDqAAAIAAHpg");
	mask.setTransform(232.6,31.5);

	// make-delicious-memories
	this.instance_3 = new lib.makedeliciousmemories();
	this.instance_3.parent = this;
	this.instance_3.setTransform(202,39.8);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({x:-171.1,y:38.8},0).to({x:222,y:39.8,alpha:1},10).to({x:202},8,cjs.Ease.get(1)).wait(54));

	// holiday-tips
	this.instance_4 = new lib.holidaytips();
	this.instance_4.parent = this;
	this.instance_4.setTransform(206.7,88.2);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({alpha:1},10).wait(46));

	// recipes
	this.instance_5 = new lib.recipes();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.9,147.9);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({alpha:1},10).wait(36));

	// and-more
	this.instance_6 = new lib.andmore();
	this.instance_6.parent = this;
	this.instance_6.setTransform(380.3,147.9);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68).to({alpha:1},10).wait(26));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ay+SXIAAnqMAq9AAAIAAHqg");
	mask_1.setTransform(153.5,117.6);

	// cta-rollover
	this.cta_rollover = new lib.ctarolloverorange();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(111.2,208.4);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(76).to({x:-79.3},0).to({x:131.2},9,cjs.Ease.get(1)).to({x:111.2},8,cjs.Ease.get(1)).wait(11));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ax4D1IAAnpMAjxAAAIAAHpg");
	mask_2.setTransform(170.6,210.6);

	// get-inspired
	this.instance_7 = new lib.getinspired();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-79.3,208.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76).to({_off:false},0).to({x:131.3,alpha:1},9,cjs.Ease.get(1)).to({x:111.7},8,cjs.Ease.get(1)).wait(11));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ay+SXIAAnqMAq9AAAIAAHqg");
	mask_3.setTransform(153.5,117.6);

	// cta-rectangle
	this.instance_8 = new lib.getinspiredctarectangle();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-79.3,208.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(76).to({_off:false},0).to({x:131.3,alpha:1},9,cjs.Ease.get(1)).to({x:111.3},8,cjs.Ease.get(1)).wait(11));

	// table
	this.instance_9 = new lib.getinspiredtable();
	this.instance_9.parent = this;
	this.instance_9.setTransform(682.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:287.5},39,cjs.Ease.sineInOut).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.6,114.7,1365.4,260.4);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/billboardtable.jpg", id:"billboardtable"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;