function getAge() {
    const dob = new Date(1998,3,1);
    const today = new Date;
    
    const diffinMs = today.getTime() - dob.getTime();

    const yearInMs = 31536000000;
    const age = Math.floor(diffinMs / yearInMs);
    
    document.getElementById("age").innerHTML = age.toString() + " Years";
}