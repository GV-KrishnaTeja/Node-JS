//this

const you ={
    pro:11,
    func:function() {
        return this.pro;     //11 (here this ==fun
    },
};
console.log(you.func());           //11
