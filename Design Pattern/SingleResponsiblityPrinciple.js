class Enteries {
    count = 0;
    constructor() {
        this.entryObj = {}
    }
    addEntry(ele) {
        this.count++;
        let countVal = this.count;
        this.entryObj[countVal] = {
            countVal: ele
        }
    }
    deleteEntry(id){
   return  delete((this.entryObj)[id]);
    }
    displayObj(){
        return this.entryObj
    }

}

let x = new Enteries()
console.log(x.addEntry('design pattern'))
console.log(x.addEntry('design pattern2'))
console.log(x.deleteEntry(2))
console.log(x.displayObj())
