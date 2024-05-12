const show1=document.getElementById("detail");
const day=document.getElementsByClassName("day");
const recent=document.getElementById('recent');

function searchloc(){
    const loc=document.getElementById("inp");
    const locat=loc.value;
    if(location!=''){
        localStorage.setItem("location", locat)
       
       fetch("https://api.openweathermap.org/data/2.5/forecast?q="+locat+"&appid=cfa4176fade7acc544c199157e49fb22")
        .then(res=>res.json())
        .then(res=>{
             console.log(res)
             const loca=document.createElement("p");
             loca.innerHTML="location: "+locat;
             show1.appendChild(loca)
             const arr=res.list;
             
             for(let i=0; i<=6;i++){
                const data=arr[i];
                const d=i-1;
                if(i!=0){
                    const hum=document.createElement("p");
                    hum.innerHTML="Humidity : "+data.main.humidity;
                    day[d].appendChild(hum)
                    const temp=document.createElement("p");
                    const tempc=(data.main.temp)-272.15
                    temp.innerHTML="Temp : "+Math.round(tempc);
                    day[d].appendChild(temp)
                    const cloud=document.createElement("p");
                    cloud.innerHTML="cloud : "+data.weather[0].main;
                    day[d].appendChild(cloud)
                    
            
                }
                else{
                    const hum=document.createElement("p");
                    hum.innerHTML="Humidity : "+data.main.humidity;
                    show1.appendChild(hum)
                    const temp=document.createElement("p");
                    const tempc=(data.main.temp)-272.15
                    temp.innerHTML="Temp : "+Math.round(tempc);
                    show1.appendChild(temp)
                    const cloud=document.createElement("p");
                    cloud.innerHTML="cloud : "+data.weather[0].main;
                    show1.appendChild(cloud)    
                

                }
            
             }
             location.reload();
             

        })
        .catch(err=>console.log(err))
    
    }
    else{
        alert("please enter city")
    }

}
      

function currloc(){
    navigator.geolocation.getCurrentPosition(success, err)
}

function success(postion){
  console.log(postion)
  let lon=postion.coords.longitude;
  let lat=postion.coords.latitude;
  fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=3f0956122d59bd387e4b2a866e517a8f")
        .then(res=>res.json())
        .then(res=>{
            
             console.log(res)
        localStorage.setItem("location", res.city.name)

             const loca=document.createElement("p");
             loca.innerHTML="location: "+res.city.name;
             show1.appendChild(loca)
             const arr=res.list;
    
             for(let i=0; i<=6;i++){
                const data=arr[i];
                const d=i-1;
                if(i!=0){
                    const hum=document.createElement("p");
                    hum.innerHTML="Humidity : "+data.main.humidity;
                    day[d].appendChild(hum)
                    const temp=document.createElement("p");
                    const tempc=(data.main.temp)-272.15
                    temp.innerHTML="Temp : "+Math.round(tempc);
                    day[d].appendChild(temp)
                    const cloud=document.createElement("p");
                    cloud.innerHTML="cloud : "+data.weather[0].main;
                    day[d].appendChild(cloud)
                    
            
                }
                else{
                    const hum=document.createElement("p");
                    hum.innerHTML="Humidity : "+data.main.humidity;
                    show1.appendChild(hum)
                    const temp=document.createElement("p");
                    const tempc=(data.main.temp)-272.15
                    temp.innerHTML="Temp : "+Math.round(tempc);
                    show1.appendChild(temp)
                    const cloud=document.createElement("p");
                    cloud.innerHTML="cloud : "+data.weather[0].main;
                    show1.appendChild(cloud)    
                

                }
            
             }


        })
        .catch(err=>console.log(err))
}
function err(error){
    console.log(error )
}

window.addEventListener(`load`, ()=>{
    const value=localStorage.getItem('location')

    recent.innerHTML='<input type="button" id="inp1" value='+value+' class="bg-gray-500" >'

    
 
})
recent.addEventListener('click', ()=>{
    const v=document.getElementById('inp1');
    const locat=v.value;
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+locat+"&appid=cfa4176fade7acc544c199157e49fb22")
        .then(res=>res.json())
        .then(res=>{
             console.log(res)
             const loca=document.createElement("p");
             loca.innerHTML="location: "+locat;
             show1.appendChild(loca)
             const arr=res.list;
             
             for(let i=0; i<=6;i++){
                const data=arr[i];
                const d=i-1;
                if(i!=0){
                    const hum=document.createElement("p");
                    hum.innerHTML="Humidity : "+data.main.humidity;
                    day[d].appendChild(hum)
                    const temp=document.createElement("p");
                    const tempc=(data.main.temp)-272.15
                    temp.innerHTML="Temp : "+Math.round(tempc);
                    day[d].appendChild(temp)
                    const cloud=document.createElement("p");
                    cloud.innerHTML="cloud : "+data.weather[0].main;
                    day[d].appendChild(cloud)
                    
            
                }
                else{
                    const hum=document.createElement("p");
                    hum.innerHTML="Humidity : "+data.main.humidity;
                    show1.appendChild(hum)
                    const temp=document.createElement("p");
                    const tempc=(data.main.temp)-272.15
                    temp.innerHTML="Temp : "+Math.round(tempc);
                    show1.appendChild(temp)
                    const cloud=document.createElement("p");
                    cloud.innerHTML="cloud : "+data.weather[0].main;
                    show1.appendChild(cloud)    
                

                }
            
             }
             location.reload();
             

        })
        .catch(err=>console.log(err))
    
})



