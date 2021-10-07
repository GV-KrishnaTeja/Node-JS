let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  }
  
  let userGuest = {};

userAdmin.admin?.();

userGuest.admin?.(); 
  