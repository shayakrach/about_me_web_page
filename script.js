checkSubmit=()=>{
    let check = true;
    let name =document.getElementById("name_box").value;
    if (!/^[a-zA-Z]+/.test(name)) {
        document.getElementById("invalid_name").innerHTML = "invalid name";
        check = false;
    } else{
        document.getElementById("invalid_name").innerHTML = "";
    }
    let subject =document.getElementById("subject_box").value;
    if (subject ===""){
        document.getElementById("invalid_subject").innerHTML = "invalid subject";
        check = false;
    } else{
        document.getElementById("invalid_subject").innerHTML = "";
    }

    let message =document.getElementById("message_box").value;
    if (message===""){
        document.getElementById("invalid_msg").innerHTML = "invalid message";
        check = false;
    }else{
        document.getElementById("invalid_msg").innerHTML = "";
    }

    if(!check){
        alert("invalid inputs");
        return false;
    }

    document.getElementById("name_box").value = "";
    document.getElementById("invalid_name").innerHTML = "";
    document.getElementById("subject_box").value = "";
    document.getElementById("invalid_subject").innerHTML = "";
    document.getElementById("message_box").value = "";
    document.getElementById("invalid_msg").innerHTML = "";

    window.location ="mailto:rachmany.shay@post.idc.ac.il?Subject=" + subject + "&body=Hi Shay,%0A%0A"+ message+ "%0A%0Athanks, " + name;
    return true;
}