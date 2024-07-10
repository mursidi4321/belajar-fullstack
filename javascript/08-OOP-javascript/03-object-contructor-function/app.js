function Color (r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function(a =1){
    const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(111,111,111);
// document.body.style.backgroundColor = color1.rgb();

const color2 = new Color(12,123,144);
console.log(color2.rgba(.2));
document.body.style.backgroundColor = color2.rgba();


