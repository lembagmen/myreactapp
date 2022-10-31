class User{
   constructor(email, password){
      this.email = email;
      this.password = password;
   }
   setPassword(value){
      this.password = value;
   }
   getPassword(){
      return "Your default password is: " + this.password;
   }
}


// ARROW Function ------------------------------------------------------------------------------------------------------------------------
onChangeEmail = () => {
   let x = 5;
   return x + "Your email has been changed to " + this.email;
}
// or
// onChangeEmail = () => "Your email has been changed to " + this.email;



class PersonalInfo extends User{
   constructor(email, password, firstName, lastName){
      super(email, password)
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = firstName + " " + lastName;
   }
}
class Employee extends PersonalInfo{

}
class Client extends User{
   constructor(email, password, clientName){
      super(email, password);
      this.clientName = clientName;
   }

   getContactDetails = (contact) => this.clientName + " - " + contact;
}



class Fruits{
   constructor(color, shape){
      this.color = color;
      this.shape = shape;
   }
}
class Apple extends Fruits{
   constructor(isImported){
      super("red", "round");
      this.isImported = isImported;
   }
}

let redFruit = new Apple (false);
document.write(redFruit.color);
document.write("<br/>");


let user1 = new User("juan@kodego.ph", "12345678");
let user2 = new User("maria@kodego.ph", "12345678",);
let user3 = new PersonalInfo("juan@kodego.ph", "12345678", "Juan", "dela Cruz");
let user4 = new PersonalInfo("maria@kodego.ph", "12345678", "Maria", "Makiling");
let client1 = new Client("client@kodego.ph", "12345678", "Eljay")

document.write(user3.firstName);

document.write("<br/>");
user1.setPassword("54321");
document.write(user1.getPassword());

document.write(user4.onChangeEmail());

document.write(client1.getContactDetails("09959336063"));