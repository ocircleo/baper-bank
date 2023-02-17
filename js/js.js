document.getElementById('btn-submit').addEventListener('click',function(){
   let inputEmail = document.getElementById('input-email');
   let inputPassWord = document.getElementById('input-password');
   if(inputEmail.value == 'manus@salman.com'&& inputPassWord.value == 'bankerboss'){
    window.location.href = 'bank.html'
   } else {
      alert("Sorry Wrong password")
   }
})