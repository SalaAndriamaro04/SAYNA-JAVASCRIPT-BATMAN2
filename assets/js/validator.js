                    /*********************************************************/
                                    /*Generate popup box*/
                    /*********************************************************/
window.onload = ()=>{
        let myForm = document.querySelector('#myForm');
        const popupbox=document.getElementById('popupbox');
        myForm.addEventListener('submit', function popup(evt){
            let email=document.getElementById('mail');
            if(email.value==''){
                evt.preventDefault();
                let invalid=document.getElementById('invalid');
                invalid.innerHTML='Le champ email ne peut pas rester vide';
                invalid.style.color= 'red';
                invalid.style.fontStyle= 'italic';
            }
            else{
                popupbox.style.display ='block';
            }
            disparition();  
        });  
        function disparition(){
            document.addEventListener('click',()=>{
                popupbox.style.display ='none';
            })
        }      
}