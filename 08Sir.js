class Parent {
    function addressOne (city) {
        const add = {
            city : city,
        
        }
        
        return add
    }
}
    console.log(addressOne('Trichy'));
    
    // ARROW FUNCTIONS
    
    const addressTwo = (city) => {
        const add = {
            city : city,
            street : '13th Main'
        }
        
        return add
    }
    
    console.log(addressTwo('Madurai'));
    const addressOne = function (city) {
        const add = {
            city : city,
            street : '13th Main'
        }
        
        return add
    }
    
    console.log(addressOne('Trichy'));
    
    // ARROW FUNCTIONS
   const add1 = {
        city : 'city',
        street : '13th Main'
    }
    const addressTwo = () => add1
    
    console.log(addressTwo('Madurai'));
    

    const objOne = {
        name : 'Krishna',
        address : function() {
            return `${this.name}'s addrress is 13th Main, 4th block, Bangalore`;
        }
    }
    
    const objTwo = {
        name : 'Ram',
        address : () => {
            return `${this.name}'s addrress is 13th Main, 4th block, Bangalore`;
        }
    }
    
    console.log(objOne.address());
    console.log(objTwo.address());
     

//