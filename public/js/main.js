let title =document.body.querySelector('.slogan');
let slogon = "Upscale your work here"
let pun_slogan = "ਇੱਥੇ ਆਪਣੇ ਕੰਮ ਨੂੰ ਵਧਾਓ"
let hin_slogan = "यहां अपना काम बढ़ाएं"

let index=1;
let new_index=1;
let hin_index=1;

const typeWriter =() => {

    let new_slogan = slogon.slice(0,index);
    
    title.innerHTML= new_slogan;
    
    
    if(index > slogon.length ){
        let new_Pun_slogon = pun_slogan.slice(0 , new_index)
        title.innerHTML=new_Pun_slogon
        new_index++
       

        if(new_index> pun_slogan.length) {
            let new_hin_slogon = hin_slogan.slice(0 , hin_index)
            title.innerHTML=new_hin_slogon
            hin_index++
            if(hin_index> hin_slogan.length) {
                hin_index =1;
                index=1 ;
                new_index=1;
            }
                else{
                    hin_index++;
                }
            }
        
        else{
            new_index++
        } 
    }
    
    else{
        index++
    }
    

    setTimeout(() => typeWriter() , 250)

}

typeWriter()
const themeToggle = document.getElementById('themeToggle');
      const body = document.body;

      themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-theme');
      });



 