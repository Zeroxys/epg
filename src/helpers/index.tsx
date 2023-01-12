export const getDate = () => {
  const currentdate = new Date(); 

  const start = currentdate.getFullYear() + "0"
                + (currentdate.getMonth()+1) 
                + currentdate.getDate()   
                + (currentdate.getHours() < 10 ? '0': '' ) + currentdate.getHours()
                + (currentdate.getMinutes() < 10 ? '0': '' ) + currentdate.getMinutes()
                + currentdate.getSeconds();
  
  const end = currentdate.getFullYear() + "0"
                + (currentdate.getMonth()+1) 
                + (currentdate.getDate()+1)
                + (currentdate.getHours() < 10 ? '0': '' ) + currentdate.getHours()
                + (currentdate.getMinutes() < 10 ? '0': '' ) + currentdate.getMinutes()
                + currentdate.getSeconds();
                

  return {
    start,
    end
  }
}