function dash(){
       const btn=document.querySelectorAll('.btn');
       const storeImage=document.querySelectorAll('.store-item')
        
       btn.forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                e.preventDefault();
                const filter=e.target.dataset.filter;
                storeImage.forEach((item)=>{
                    if(filter==='all'){
                        item.style.display='block';
                    }
                    else
                    {
                        if(item.classList.contains(filter))
                        {
                            item.style.display='block';
                        }
                        else
                        {
                            item.style.display='none';
                        }
                    }
                })
            })
       })
}
dash();
