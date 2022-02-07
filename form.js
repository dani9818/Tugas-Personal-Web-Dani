function showData(){
    
    // mengambil data dari elemen id
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // validasi
    if (name == ""){
        alert('name input field must be not empty')
    }

    if (email == ""){
        alert('email input field must be not empty')
    }

    if (phone == ""){
        alert('phone input field must be not empty')
    }

    if (subject == ""){
        alert('subject input field must be not empty')
    }

    if (message == ""){
        alert('message input field must be not empty')
    }
    

    // send email 
    let emailReciver ='ramdhanidani74@gmail.com'
    
    let a = document.createElement('a')
    a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name is ${name}, ${subject}, ${message}, this is my phone number ${phone}.`

    a.click()

    let dataObject = {
        name : name,
        email : email,
        numberPhone : phone,
        subject : subject,
        message : message
    }
    console.table(dataObject)
}
