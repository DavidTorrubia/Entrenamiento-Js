const test = {
    prop: 42,
    func: function() {
        // _this = this
        setTimeout(() => {
            console.log(this.prop)
        }, 1000)
    },
  };
const printProp = function(){
    console.log(`Prop value ${this.prop}`)
}
let printPropBinded = printProp.bind(test);
printPropBinded();