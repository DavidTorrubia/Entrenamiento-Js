const test = {
    prop: 42,
    func: function() {
        // _this = this
        setTimeout(() => {
            console.log(this.prop)
        }, 1000)
    },
  };

test.func()