define([
    "./canvas2d",
    "./primitives/fabric"
], function(canvas2d,fabric) {
	fabric.Object.remove = function() {
        return this.canvas.remove(this);
    };
    
    return canvas2d.Object = fabric.Object;
});