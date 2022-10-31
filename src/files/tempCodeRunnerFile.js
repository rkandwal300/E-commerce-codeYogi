 axios.get('https://myeasykart.codeyogi.io/products').then((promise)=>{
      return  promise.data;
                    }).catch(()=>{ console.log('error api  api')})
                    

  