document.addEventListener('alpine:init',()=>{
  Alpine.data('counter',function(){
      return{
          num:0,
          max:10,
          increment(){
            if(this.num >= 0 && this.num < this.max){
              this.num++;
            }
          },
          decrement(){
            if(this.num > 0){
              this.messege=this.num--;
            }
          },
          reset(){
            this.num=0;
            this.messege= this.num;
            return this.messege;
          },
      }
  });
  setTimeout(function(){
    console.log("This message is displayed after 3 seconds...")
  }, 3000)
  setInterval(function(){
    console.log("This message is printed every 3 seconds...")
  }, 3000)
  setTimeout(function(){
    console.log("This is the first message");
  });
  console.log("This is the 2nd message - or is it?");  
})