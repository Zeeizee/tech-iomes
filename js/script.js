const btnGetInTouch=document.querySelector('.btn-get')
const formcontainer=document.querySelector('.get-in-touch-cotact-form')
const btncancel=document.querySelector('.cancel')
const form=document.querySelector('form')
const txtusername=document.querySelector('.username')
const txtemail=document.querySelector('.useremail')
const txtmsg=document.querySelector('.usermsg')

btnGetInTouch.addEventListener('click',()=>{

    formcontainer.classList.remove('d-none')
    

})
btncancel.addEventListener('click', (e)=>{
    e.preventDefault()
    form.reset()
    formcontainer.classList.add('d-none')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    emailsend();
    form.reset();
    formcontainer.classList.add('d-none')
})


const emailsend=()=>{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "zenizee563@gmail.com",
        Password : "piifxxyoucnstyki",
        To : txtemail.value.trim(),
        From : "zenizee563@gmail.com",
        Subject : "GET IN TOUCH (IOMES)",
        Body : `Hello ${txtusername.value.trim()}: <br> Thank you for contacting me.I have recieved your email. I will give you response very soon.`
    }).then(
    ).catch(err=>{
        console.log(err)
    })
    Email.send({
        Host : "smtp.gmail.com",
        Username : "zenizee563@gmail.com",
        Password : "piifxxyoucnstyki",
        To : 'zenizee563@gmail.com',
        From : "zenizee563@gmail.com",
        Subject : `GET IN TOUCH (IOMES)`,
        Body : `${txtusername.value} trying to connect you through Get In Touch from this Email: ${txtemail.value.trim()} <br><br> ${txtmsg.value.trim()}  `
    }).then(
      
    ).catch(err=>{
        console.log(err)
    })
}