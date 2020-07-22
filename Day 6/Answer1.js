var i=0;
function change(){
    const arr = ['Red','blue','orange','purple','yellow','green'];
    document.body.style.backgroundColor = arr[i];
     i =(i+1)%arr.length;   
    }

    setInterval(change,5000);