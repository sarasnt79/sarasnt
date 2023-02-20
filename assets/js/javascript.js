var navig=document.querySelector('.navbox');

window.onscroll=function(){

    if(document.documentElement.scrollTop >10  &&  document.documentElement.scrollTop <500){
        navig.style.display='none';
    }

    else{
        navig.style.display='block';
        navig.style.position='fixed';
    }
    
}